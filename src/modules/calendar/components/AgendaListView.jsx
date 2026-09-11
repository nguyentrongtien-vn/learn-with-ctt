import React from "react";
import { useApp } from "../../../context/AppContext";
import Icon from "../../../components/ui/Icon";

/**
 * Lấy số phút kể từ 00:00 từ chuỗi giờ bất kỳ, vd:
 * "18:00 - 18:20", "08:00-10:00 (Java Core)", "19:30 – 19:50", "09:00"
 * -> luôn lấy đúng mốc HH:MM ĐẦU TIÊN xuất hiện (giờ bắt đầu),
 * bất kể dấu gạch nối là "-" hay "–" hay "·".
 */
function getStartMinutes(timeStr) {
  if (!timeStr) return 0;
  const match = timeStr.match(/(\d{1,2}):(\d{2})/);
  if (!match) return 0;
  const [, hh, mm] = match;
  return parseInt(hh, 10) * 60 + parseInt(mm, 10);
}

/** Chỉ lấy phần giờ bắt đầu để hiển thị làm mốc thời gian bên trái mỗi card */
function getStartLabel(timeStr) {
  if (!timeStr) return "--:--";
  const match = timeStr.match(/(\d{1,2}):(\d{2})/);
  return match ? match[0] : timeStr;
}

export default function AgendaListView({ onSelectSession }) {
  const { calendarSchedule, calendarOptimized } = useApp();

  return (
    <div className="flex flex-col gap-4">
      {calendarSchedule.map((dayItem, idx) => {
        const isToday = dayItem.isToday;

        // Sắp xếp lại đúng thứ tự thời gian thật trong ngày trước khi render.
        // dayItem.events gốc có thể không đúng thứ tự (VD AI Slot được chèn thêm
        // sau vào giữa lịch chính khóa) -> luôn sort lại theo giờ bắt đầu ở đây,
        // không tin vào thứ tự sẵn có trong mảng dữ liệu.
        const sortedEvents = [...dayItem.events].sort(
          (a, b) => getStartMinutes(a.time) - getStartMinutes(b.time),
        );

        return (
          <div
            key={idx}
            className={`p-4 rounded-2xl border transition-all ${
              isToday
                ? "bg-primary/5 border-primary/30 ring-1 ring-primary/20"
                : "bg-surface-container-low/50 border-surface-container-high/30"
            }`}
          >
            {/* Day Title Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-surface-container-high/30">
              <div className="flex items-center gap-2">
                <span
                  className={`text-[14px] font-bold ${isToday ? "text-primary" : "text-on-surface"}`}
                >
                  {dayItem.day} ({dayItem.date})
                </span>
                {isToday && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary text-on-primary">
                    Hôm nay
                  </span>
                )}
              </div>

              <span className="text-[12px] text-on-surface-variant font-medium">
                {dayItem.events.length} phiên
              </span>
            </div>

            {/* Events List — đã sắp xếp đúng mốc giờ, có cột giờ neo bên trái mỗi card */}
            {sortedEvents.length > 0 ? (
              <div className="flex flex-col gap-2.5">
                {sortedEvents.map((evt, eIdx) => {
                  const isAi = evt.type === "ai-scheduled";
                  const isExam = evt.type === "exam";

                  return (
                    <div
                      key={eIdx}
                      onClick={() => onSelectSession(evt)}
                      className="flex items-stretch gap-2.5 cursor-pointer group"
                    >
                      {/* Cột mốc giờ: hiển thị đúng giờ bắt đầu thật của evt,
                          neo cố định bên trái, không phụ thuộc thứ tự khai báo trong data */}
                      <div className="w-11 shrink-0 flex flex-col items-end pt-3">
                        <span
                          className={`text-[11px] font-bold leading-none tabular-nums ${
                            isToday ? "text-primary" : "text-on-surface-variant"
                          }`}
                        >
                          {getStartLabel(evt.time)}
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-surface-container-lowest hover:bg-surface-container border border-surface-container-high/40 transition-all flex items-center justify-between gap-3 flex-1 min-w-0 shadow-2xs">
                        <div className="flex items-center gap-3 min-w-0">
                          <div
                            className={`w-1.5 h-10 rounded-full shrink-0 ${
                              isExam
                                ? "bg-error"
                                : isAi
                                  ? "bg-primary"
                                  : "bg-secondary"
                            }`}
                          />

                          <div className="flex flex-col min-w-0">
                            <div className="flex items-center gap-2">
                              <span className="text-[11px] font-bold text-primary">
                                {evt.code}
                              </span>
                              {isAi && (
                                <span className="text-[10px] font-semibold text-primary px-1.5 py-0.2 rounded bg-primary/10 flex items-center gap-1">
                                  <Icon name="auto_awesome" size={11} />
                                  AI Slot
                                </span>
                              )}
                              {isExam && (
                                <span className="text-[10px] font-bold text-error px-1.5 py-0.2 rounded bg-error-container/60">
                                  Bài kiểm tra
                                </span>
                              )}
                            </div>

                            <h4 className="text-[13px] font-semibold text-on-surface group-hover:text-primary transition-colors truncate">
                              {evt.title}
                            </h4>

                            <span className="text-[11px] text-on-surface-variant">
                              {evt.time} · {evt.room}
                            </span>
                          </div>
                        </div>

                        <button
                          type="button"
                          className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors shrink-0"
                        >
                          <Icon name="chevron_right" size={16} />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="py-4 text-center text-[12px] text-on-surface-variant flex items-center justify-center gap-1.5">
                <Icon name="event_available" size={16} />
                <span>Không có tiết học chính khóa (ngày tự học tự do)</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
