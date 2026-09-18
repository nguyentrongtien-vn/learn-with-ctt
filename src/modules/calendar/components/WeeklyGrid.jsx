// import React from "react";
// import { useApp } from "../../../context/AppContext";
// import Icon from "../../../components/ui/Icon";

// export default function WeeklyGrid({ onSelectSession }) {
//   const { calendarSchedule, calendarOptimized } = useApp();

//   const timeSlots = [
//     "07:00",
//     "08:00",
//     "09:00",
//     "10:00",
//     "11:00",
//     "12:00",
//     "13:00",
//     "14:00",
//     "15:00",
//     "16:00",
//     "17:00",
//     "18:00",
//     "19:00",
//     "20:00",
//   ];

//   // Lưới thời gian chạy từ 07:00 -> 21:00 (timeSlots có 14 hàng, mỗi hàng = 1 tiếng)
//   const GRID_START_MIN = 7 * 60;
//   const GRID_END_MIN = GRID_START_MIN + timeSlots.length * 60; // 21:00

//   /**
//    * Trích giờ bắt đầu + kết thúc thật từ evt.time, vd:
//    * "07:30 - 11:30", "18:00 - 18:20", "09:00" (chỉ có giờ bắt đầu)
//    * -> trả về { startMin, endMin } tính bằng phút kể từ 00:00,
//    *    đã CLAMP vào trong khung lưới [07:00, 21:00] để không vỡ layout
//    *    nếu lỡ có event ngoài khung giờ hiển thị.
//    */
//   const parseEventRange = (timeStr) => {
//     if (!timeStr)
//       return { startMin: GRID_START_MIN, endMin: GRID_START_MIN + 60 };
//     const matches = [...timeStr.matchAll(/(\d{1,2}):(\d{2})/g)].map(
//       (m) => parseInt(m[1], 10) * 60 + parseInt(m[2], 10),
//     );
//     let start = matches[0] ?? GRID_START_MIN;
//     let end = matches[1] ?? start + 60; // không có giờ kết thúc -> mặc định 1 tiếng
//     if (end <= start) end = start + 30; // phòng dữ liệu lỗi (end <= start)

//     start = Math.min(Math.max(start, GRID_START_MIN), GRID_END_MIN);
//     end = Math.min(Math.max(end, GRID_START_MIN), GRID_END_MIN);
//     if (end - start < 20) end = Math.min(start + 20, GRID_END_MIN); // tối thiểu 20' để không bị bẹp dí

//     return { startMin: start, endMin: end };
//   };

//   const getEventBadge = (type) => {
//     switch (type) {
//       case "exam":
//         return {
//           label: "BÀI THI / MINI-TEST",
//           bg: "bg-rose-600 dark:bg-rose-700",
//           text: "text-white",
//           border: "border-rose-700",
//         };
//       case "ai-scheduled":
//         return {
//           label: "AI REVIEW",
//           bg: "bg-purple-600 dark:bg-purple-700",
//           text: "text-white",
//           border: "border-purple-700",
//         };
//       case "lab":
//         return {
//           label: "THỰC HÀNH LAB",
//           bg: "bg-teal-600 dark:bg-teal-700",
//           text: "text-white",
//           border: "border-teal-700",
//         };
//       case "lecture":
//         return {
//           label: "LÝ THUYẾT",
//           bg: "bg-blue-600 dark:bg-blue-700",
//           text: "text-white",
//           border: "border-blue-700",
//         };
//       default:
//         return {
//           label: "TỰ HỌC",
//           bg: "bg-amber-600 dark:bg-amber-700",
//           text: "text-white",
//           border: "border-amber-700",
//         };
//     }
//   };

//   return (
//     <div className="w-full bg-surface-container-lowest rounded-2xl border border-surface-container-high/60 shadow-sm overflow-hidden flex flex-col select-none">
//       {/*
//         Biến --slot-h là "nguồn chân lý" duy nhất cho chiều cao 1 tiếng.
//         Header ngày, hàng giờ nền, VÀ vị trí card đều dùng chung biến này
//         -> luôn khớp nhau tuyệt đối kể cả khi responsive đổi breakpoint.
//       */}
//       <style>{`
//         /*
//           --slot-h = chiều cao 1 tiếng, tính động theo chiều cao màn hình (vh)
//           để toàn bộ 14 hàng (07:00-21:00) luôn vừa đúng 1 màn hình, hạn chế
//           cuộn. 260px là phần ước lượng cho phần header phía trên khung lưới
//           (thanh điều hướng trang, CalendarHeader, hàng ngày T2-CN...).
//           Đã nâng min/max của clamp() lên để mỗi ô giờ có đủ không gian chứa
//           card 3 dòng (tên môn, thời gian, địa điểm) mà không bị bóp chữ.
//         */
//         .wg-timegrid { --slot-h: clamp(2.25rem, calc((100vh - 260px) / 14), 3.25rem); }
//       `}</style>

//       {/* 1. Google Calendar Sticky Day Headers */}
//       <div className="grid grid-cols-[64px_repeat(7,1fr)] sm:grid-cols-[84px_repeat(7,1fr)] border-b border-surface-container-high/60 bg-surface-container-low/40">
//         {/* Timezone / GMT+7 corner */}
//         <div className="flex items-center justify-center border-r border-surface-container-high/40 text-[11px] font-semibold text-on-surface-variant/80">
//           GMT+7
//         </div>

//         {/* 7 Days Columns */}
//         {calendarSchedule.map((dayItem, idx) => {
//           const isToday = dayItem.isToday;
//           const dayShort = dayItem.day
//             .replace("Thứ ", "T")
//             .replace("Chủ Nhật", "CN");

//           return (
//             <div
//               key={idx}
//               className={`flex flex-col items-center py-1.5 border-r border-surface-container-high/30 last:border-r-0 transition-colors ${
//                 isToday ? "bg-primary/5" : ""
//               }`}
//             >
//               <span
//                 className={`text-[11px] font-bold tracking-wider uppercase ${
//                   isToday ? "text-primary" : "text-on-surface-variant"
//                 }`}
//               >
//                 {dayShort}
//               </span>

//               {/* Circular Date (Google Calendar iconic circle) — thu nhỏ để đỡ chiếm chỗ */}
//               <div
//                 className={`mt-0.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-sm sm:text-base transition-transform hover:scale-105 ${
//                   isToday
//                     ? "bg-primary text-white shadow-md"
//                     : "text-on-surface hover:bg-surface-container"
//                 }`}
//               >
//                 {dayItem.date.split("/")[0]}
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* 2. Main Calendar Body with Time Guide & Event Blocks */}
//       <div className="overflow-x-auto">
//         <div className="wg-timegrid grid grid-cols-[64px_repeat(7,1fr)] sm:grid-cols-[84px_repeat(7,1fr)] min-w-[1180px] relative">
//           {/* Left Column: Time Axis Labels */}
//           <div className="flex flex-col border-r border-surface-container-high/40 bg-surface-container-low/20">
//             {timeSlots.map((time, tIdx) => (
//               <div
//                 key={tIdx}
//                 style={{ height: "var(--slot-h)" }}
//                 className="pr-2 pt-0.5 text-right text-[10px] sm:text-[11px] font-semibold text-on-surface-variant border-b border-surface-container-high/30 leading-none"
//               >
//                 {time}
//               </div>
//             ))}
//           </div>

//           {/* 7 Day Columns containing Events */}
//           {calendarSchedule.map((dayItem, dIdx) => {
//             const isToday = dayItem.isToday;
//             const columnHeight = `calc(var(--slot-h) * ${timeSlots.length})`;

//             return (
//               <div
//                 key={dIdx}
//                 className={`relative flex flex-col border-r border-surface-container-high/30 last:border-r-0 ${
//                   isToday ? "bg-primary/5" : ""
//                 }`}
//                 style={{ height: columnHeight, minHeight: columnHeight }}
//               >
//                 {/* Horizontal hour lines background */}
//                 <div className="absolute inset-0 flex flex-col pointer-events-none">
//                   {timeSlots.map((_, lIdx) => (
//                     <div
//                       key={lIdx}
//                       style={{ height: "var(--slot-h)" }}
//                       className="border-b border-surface-container-high/25 w-full"
//                     />
//                   ))}
//                 </div>

//                 {/* Google Calendar Current Time Red Line (For Today) */}
//                 {isToday && (
//                   <div className="absolute top-[48%] left-0 right-0 z-20 flex items-center pointer-events-none">
//                     <div className="w-2.5 h-2.5 rounded-full bg-red-500 -ml-1.5 shadow-sm" />
//                     <div className="h-[2px] bg-red-500 flex-1 shadow-sm" />
//                   </div>
//                 )}

//                 {/*
//                   Events Container — position: relative, cao đúng bằng tổng chiều
//                   cao lưới giờ. Mỗi card bên trong dùng position: absolute với
//                   top/height tính bằng calc() từ giờ bắt đầu/kết thúc thật,
//                   neo đúng vào hàng giờ tương ứng bên trái.
//                 */}
//                 <div
//                   className="relative z-10 px-1.5 sm:px-2"
//                   style={{ height: columnHeight }}
//                 >
//                   {dayItem.events.map((evt, eIdx) => {
//                     const badge = getEventBadge(evt.type);
//                     const { startMin, endMin } = parseEventRange(evt.time);
//                     const offsetMin = startMin - GRID_START_MIN;
//                     const durMin = endMin - startMin;

//                     return (
//                       <div
//                         key={eIdx}
//                         onClick={() => onSelectSession(evt)}
//                         style={{
//                           position: "absolute",
//                           left: "4px",
//                           right: "4px",
//                           top: `calc(${offsetMin} / 60 * var(--slot-h))`,
//                           // max(): đảm bảo card không bao giờ thấp hơn 76px dù sự kiện rất
//                           // ngắn (vd 15-20 phút) -> đủ chỗ thoải mái cho 3 dòng (tên môn,
//                           // giờ, phòng) không bị chồng/bóp chữ. Với event dài hơn 76 phút,
//                           // card sẽ tự cao theo đúng thời lượng thật.
//                           height: `max(76px, calc(${durMin} / 60 * var(--slot-h) - 4px))`,
//                         }}
//                         className={`px-2.5 py-2 rounded-lg cursor-pointer transition-all shadow-sm hover:shadow-md hover:z-20 hover:scale-[1.02] active:scale-98 flex flex-col justify-start gap-1.5 border-l-4 overflow-hidden ${badge.bg} ${badge.text} ${badge.border}`}
//                       >
//                         {/* Đã bỏ khối "Top: Code & Tag" (mã môn + nhãn loại tiết) theo yêu cầu.
//                             Card vẫn giữ nguyên width/height nhờ style top/height không đổi. */}

//                         {/* Title: gọn 2 dòng để vừa hàng giờ nhỏ */}
//                         <div className="text-[11px] sm:text-[12.5px] font-bold leading-tight line-clamp-2 drop-shadow-2xs">
//                           {evt.title}
//                         </div>

//                         {/* Bottom: Time & Room — mỗi thứ 1 dòng riêng, giãn cách rõ hơn */}
//                         <div className="flex flex-col gap-1 text-[10px] sm:text-[11px] opacity-95 font-medium min-w-0">
//                           <span className="flex items-center gap-1 truncate">
//                             <Icon name="schedule" size={11} />
//                             <span className="truncate">{evt.time}</span>
//                           </span>
//                           <span className="flex items-center gap-1 truncate">
//                             <Icon name="location_on" size={11} />
//                             <span className="truncate">{evt.room}</span>
//                           </span>
//                         </div>
//                       </div>
//                     );
//                   })}

//                   {/* Empty day free-slot hint when AI optimized */}
//                   {calendarOptimized && dayItem.events.length === 0 && (
//                     <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-xl flex flex-col items-center justify-center gap-1.5 bg-primary/5 text-primary">
//                       <Icon name="event_available" size={22} />
//                       <span className="text-[13px] font-bold">
//                         Giờ tự học tự do
//                       </span>
//                       <span className="text-[11px] text-on-surface-variant">
//                         CTT AI đã tối ưu
//                       </span>
//                     </div>
//                   )}
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useApp } from "../../../context/AppContext";
import Icon from "../../../components/ui/Icon";

export default function WeeklyGrid({ onSelectSession }) {
  const { calendarSchedule, calendarOptimized } = useApp();

  const timeSlots = [
    "07:00",
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  // Lưới thời gian chạy từ 07:00 -> 21:00 (timeSlots có 14 hàng, mỗi hàng = 1 tiếng)
  const GRID_START_MIN = 7 * 60;
  const GRID_END_MIN = GRID_START_MIN + timeSlots.length * 60; // 21:00

  /**
   * Trích giờ bắt đầu + kết thúc thật từ evt.time, vd:
   * "07:30 - 11:30", "18:00 - 18:20", "09:00" (chỉ có giờ bắt đầu)
   * -> trả về { startMin, endMin } tính bằng phút kể từ 00:00,
   *    đã CLAMP vào trong khung lưới [07:00, 21:00] để không vỡ layout
   *    nếu lỡ có event ngoài khung giờ hiển thị.
   */
  const parseEventRange = (timeStr) => {
    if (!timeStr)
      return { startMin: GRID_START_MIN, endMin: GRID_START_MIN + 60 };
    const matches = [...timeStr.matchAll(/(\d{1,2}):(\d{2})/g)].map(
      (m) => parseInt(m[1], 10) * 60 + parseInt(m[2], 10),
    );
    let start = matches[0] ?? GRID_START_MIN;
    let end = matches[1] ?? start + 60; // không có giờ kết thúc -> mặc định 1 tiếng
    if (end <= start) end = start + 30; // phòng dữ liệu lỗi (end <= start)

    start = Math.min(Math.max(start, GRID_START_MIN), GRID_END_MIN);
    end = Math.min(Math.max(end, GRID_START_MIN), GRID_END_MIN);
    if (end - start < 20) end = Math.min(start + 20, GRID_END_MIN); // tối thiểu 20' để không bị bẹp dí

    return { startMin: start, endMin: end };
  };

  const getEventBadge = (type) => {
    switch (type) {
      case "exam":
        return {
          label: "BÀI THI / MINI-TEST",
          bg: "bg-rose-600 dark:bg-rose-700",
          text: "text-white",
          border: "border-rose-700",
        };
      case "ai-scheduled":
        return {
          label: "AI REVIEW",
          bg: "bg-purple-600 dark:bg-purple-700",
          text: "text-white",
          border: "border-purple-700",
        };
      case "lab":
        return {
          label: "THỰC HÀNH LAB",
          bg: "bg-teal-600 dark:bg-teal-700",
          text: "text-white",
          border: "border-teal-700",
        };
      case "lecture":
        return {
          label: "LÝ THUYẾT",
          bg: "bg-blue-600 dark:bg-blue-700",
          text: "text-white",
          border: "border-blue-700",
        };
      default:
        return {
          label: "TỰ HỌC",
          bg: "bg-amber-600 dark:bg-amber-700",
          text: "text-white",
          border: "border-amber-700",
        };
    }
  };

  return (
    <div className="w-full bg-surface-container-lowest rounded-2xl border border-surface-container-high/60 shadow-sm overflow-hidden flex flex-col select-none">
      {/*
        Biến --slot-h là "nguồn chân lý" duy nhất cho chiều cao 1 tiếng.
        Header ngày, hàng giờ nền, VÀ vị trí card đều dùng chung biến này
        -> luôn khớp nhau tuyệt đối kể cả khi responsive đổi breakpoint.
      */}
      <style>{`
        /*
          --slot-h = chiều cao 1 tiếng, tính động theo chiều cao màn hình (vh)
          để toàn bộ 14 hàng (07:00-21:00) luôn vừa đúng 1 màn hình, hạn chế
          cuộn. 260px là phần ước lượng cho phần header phía trên khung lưới
          (thanh điều hướng trang, CalendarHeader, hàng ngày T2-CN...).
          Đã nâng min/max của clamp() lên để mỗi ô giờ có đủ không gian chứa
          card 3 dòng (tên môn, thời gian, địa điểm) mà không bị bóp chữ.
        */
        .wg-timegrid { --slot-h: clamp(2.25rem, calc((100vh - 260px) / 14), 3.25rem); }
      `}</style>

      {/*
        QUAN TRỌNG: Header ngày (T2, T3...) và lưới giờ bên dưới giờ nằm
        CHUNG một vùng cuộn ngang (overflow-x-auto) với CÙNG một min-w, nên
        cột của 2 phần luôn khớp tuyệt đối kể cả khi cuộn ngang trên màn
        hình hẹp. Header dùng sticky top-0 để luôn dính phía trên khi cuộn
        dọc, nhưng vẫn trượt ngang theo lưới giờ khi cuộn ngang.
      */}
      <div className="overflow-x-auto">
        <div className="w-full min-w-0">
          {/* 1. Google Calendar Sticky Day Headers */}
          <div className="sticky top-0 z-30 grid grid-cols-[32px_repeat(7,minmax(0,1fr))] sm:grid-cols-[64px_repeat(7,minmax(0,1fr))] border-b border-surface-container-high/60 bg-surface-container-low/40 backdrop-blur-sm">
            {/* Timezone / GMT+7 corner */}
            <div className="flex items-center justify-center border-r border-surface-container-high/40 text-[11px] max-[640px]:text-[8px] font-semibold text-on-surface-variant/80">
              GMT+7
            </div>

            {/* 7 Days Columns */}
            {calendarSchedule.map((dayItem, idx) => {
              const isToday = dayItem.isToday;
              const dayShort = dayItem.day
                .replace("Thứ ", "T")
                .replace("Chủ Nhật", "CN");

              return (
                <div
                  key={idx}
                  className={`flex flex-col items-center py-1.5 border-r border-surface-container-high/30 last:border-r-0 transition-colors ${
                    isToday ? "bg-primary/5" : ""
                  }`}
                >
                  <span
                    className={`text-[11px] max-[640px]:text-[8px] font-bold tracking-wider uppercase ${
                      isToday ? "text-primary" : "text-on-surface-variant"
                    }`}
                  >
                    {dayShort}
                  </span>

                  {/* Circular Date (Google Calendar iconic circle) — thu nhỏ để đỡ chiếm chỗ */}
                  <div
                    className={`mt-0.5 w-7 h-7 sm:w-8 sm:h-8 max-[640px]:w-5 max-[640px]:h-5 rounded-full flex items-center justify-center font-bold text-sm sm:text-base max-[640px]:text-[10px] transition-transform hover:scale-105 ${
                      isToday
                        ? "bg-primary text-white shadow-md"
                        : "text-on-surface hover:bg-surface-container"
                    }`}
                  >
                    {dayItem.date.split("/")[0]}
                  </div>
                </div>
              );
            })}
          </div>

          {/* 2. Main Calendar Body with Time Guide & Event Blocks */}
          <div className="wg-timegrid grid grid-cols-[32px_repeat(7,minmax(0,1fr))] sm:grid-cols-[64px_repeat(7,minmax(0,1fr))] relative">
            {/* Left Column: Time Axis Labels */}
            <div className="flex flex-col border-r border-surface-container-high/40 bg-surface-container-low/20">
              {timeSlots.map((time, tIdx) => (
                <div
                  key={tIdx}
                  style={{ height: "var(--slot-h)" }}
                  className="pr-2 max-[640px]:pr-1 pt-0.5 text-right text-[10px] sm:text-[11px] max-[640px]:text-[8px] font-semibold text-on-surface-variant border-b border-surface-container-high/30 leading-none"
                >
                  {time}
                </div>
              ))}
            </div>

            {/* 7 Day Columns containing Events */}
            {calendarSchedule.map((dayItem, dIdx) => {
              const isToday = dayItem.isToday;
              const columnHeight = `calc(var(--slot-h) * ${timeSlots.length})`;

              return (
                <div
                  key={dIdx}
                  className={`relative flex flex-col border-r border-surface-container-high/30 last:border-r-0 ${
                    isToday ? "bg-primary/5" : ""
                  }`}
                  style={{ height: columnHeight, minHeight: columnHeight }}
                >
                  {/* Horizontal hour lines background */}
                  <div className="absolute inset-0 flex flex-col pointer-events-none">
                    {timeSlots.map((_, lIdx) => (
                      <div
                        key={lIdx}
                        style={{ height: "var(--slot-h)" }}
                        className="border-b border-surface-container-high/25 w-full"
                      />
                    ))}
                  </div>

                  {/* Google Calendar Current Time Red Line (For Today) */}
                  {isToday && (
                    <div className="absolute top-[48%] left-0 right-0 z-20 flex items-center pointer-events-none">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500 -ml-1.5 shadow-sm" />
                      <div className="h-[2px] bg-red-500 flex-1 shadow-sm" />
                    </div>
                  )}

                  {/*
                    Events Container — position: relative, cao đúng bằng tổng chiều
                    cao lưới giờ. Mỗi card bên trong dùng position: absolute với
                    top/height tính bằng calc() từ giờ bắt đầu/kết thúc thật,
                    neo đúng vào hàng giờ tương ứng bên trái.
                  */}
                  <div
                    className="relative z-10 px-1.5 sm:px-2 max-[640px]:px-0.5"
                    style={{ height: columnHeight }}
                  >
                    {dayItem.events.map((evt, eIdx) => {
                      const badge = getEventBadge(evt.type);
                      const { startMin, endMin } = parseEventRange(evt.time);
                      const offsetMin = startMin - GRID_START_MIN;
                      const durMin = endMin - startMin;

                      return (
                        <div
                          key={eIdx}
                          onClick={() => onSelectSession(evt)}
                          style={{
                            position: "absolute",
                            left: "2px",
                            right: "2px",
                            top: `calc(${offsetMin} / 60 * var(--slot-h))`,
                            // max(): đảm bảo card không bao giờ thấp hơn 76px dù sự kiện rất
                            // ngắn (vd 15-20 phút) -> đủ chỗ thoải mái cho 3 dòng (tên môn,
                            // giờ, phòng) không bị chồng/bóp chữ. Với event dài hơn 76 phút,
                            // card sẽ tự cao theo đúng thời lượng thật.
                            height: `max(56px, calc(${durMin} / 60 * var(--slot-h) - 4px))`,
                          }}
                          className={`px-2.5 py-2 max-[640px]:px-1 max-[640px]:py-1 rounded-lg max-[640px]:rounded-md cursor-pointer transition-all shadow-sm hover:shadow-md hover:z-20 hover:scale-[1.02] active:scale-98 flex flex-col justify-start gap-1.5 max-[640px]:gap-0.5 border-l-4 max-[640px]:border-l-2 overflow-hidden ${badge.bg} ${badge.text} ${badge.border}`}
                        >
                          {/* Đã bỏ khối "Top: Code & Tag" (mã môn + nhãn loại tiết) theo yêu cầu.
                              Card vẫn giữ nguyên width/height nhờ style top/height không đổi. */}

                          {/* Title: gọn 2 dòng để vừa hàng giờ nhỏ */}
                          <div className="text-[11px] sm:text-[12.5px] max-[640px]:text-[8px] font-bold leading-tight line-clamp-2 drop-shadow-2xs">
                            {evt.title}
                          </div>

                          {/* Bottom: Time & Room — mỗi thứ 1 dòng riêng, giãn cách rõ hơn */}
                          <div className="flex flex-col gap-1 max-[640px]:gap-0.5 text-[10px] sm:text-[11px] max-[640px]:text-[7px] opacity-95 font-medium min-w-0">
                            <span className="flex items-center gap-1 truncate">
                              <Icon name="schedule" size={11} />
                              <span className="truncate">{evt.time}</span>
                            </span>
                            <span className="flex items-center gap-1 truncate">
                              <Icon name="location_on" size={11} />
                              <span className="truncate">{evt.room}</span>
                            </span>
                          </div>
                        </div>
                      );
                    })}

                    {/* Empty day free-slot hint when AI optimized */}
                    {calendarOptimized && dayItem.events.length === 0 && (
                      <div className="absolute inset-4 border-2 border-dashed border-primary/30 rounded-xl flex flex-col items-center justify-center gap-1.5 bg-primary/5 text-primary">
                        <Icon name="event_available" size={22} />
                        <span className="text-[13px] font-bold">
                          Giờ tự học tự do
                        </span>
                        <span className="text-[11px] text-on-surface-variant">
                          CTT AI đã tối ưu
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
