import React, { useState } from "react";
import Icon from "../../../components/ui/Icon";

export default function CalendarHeader({
  activeView,
  setActiveView,
  onJumpToday,
  onAddStudySchedule,
}) {
  const [syncedGoogle, setSyncedGoogle] = useState(false);

  const handleSyncGoogle = () => {
    setSyncedGoogle(true);
    setTimeout(() => {
      setSyncedGoogle(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 max-[640px]:gap-2 pb-2 max-[640px]:pb-1 border-b border-surface-container-high/40">
      {/* Left: Google Calendar Style Navigation */}
      <div className="flex items-center gap-3 sm:gap-4 max-[640px]:gap-2 flex-wrap">
        {/* Today Button */}
        <button
          type="button"
          onClick={onJumpToday}
          className="px-4 py-2 max-[640px]:px-2.5 max-[640px]:py-1.5 rounded-full border border-surface-container-high/80 hover:bg-surface-container text-on-surface text-[14px] max-[640px]:text-[11px] font-semibold transition-all active:scale-95 shadow-2xs"
        >
          Hôm nay
        </button>

        {/* Previous / Next Arrows */}
        <div className="flex items-center">
          <button
            type="button"
            className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
            aria-label="Tuần trước"
          >
            <Icon name="chevron_left" size={22} />
          </button>
          <button
            type="button"
            className="w-9 h-9 rounded-full flex items-center justify-center text-on-surface hover:bg-surface-container transition-colors"
            aria-label="Tuần sau"
          >
            <Icon name="chevron_right" size={22} />
          </button>
        </div>

        {/* Big Month & Year */}
        <div className="flex items-baseline gap-2.5">
          <h2 className="text-xl sm:text-2xl max-[640px]:text-base font-bold text-on-surface tracking-tight">
            Tháng 10 năm 2024
          </h2>
          <span className="text-[13px] max-[640px]:text-[10px] font-semibold text-primary px-2.5 max-[640px]:px-1.5 py-0.5 rounded-full bg-primary/10">
            Tuần 7 · EIU
          </span>
        </div>
      </div>

      {/* Right: View Switcher & AI Actions */}
      <div className="flex items-center gap-1.5 max-[640px]:gap-1 flex-nowrap overflow-x-auto pb-1">
        {/* View Switcher (Tuần / Danh sách) */}
        <div className="flex shrink-0 items-center p-0.5 rounded-xl bg-surface-container-low border border-surface-container-high/50 text-[12px] max-[640px]:text-[10px] font-medium">
          <button
            type="button"
            onClick={() => setActiveView("grid")}
            className={`px-2.5 py-1.5 max-[640px]:px-1.5 max-[640px]:py-1 rounded-lg transition-all flex items-center gap-1 max-[640px]:gap-0.5 ${
              activeView === "grid"
                ? "bg-surface-container-lowest text-primary font-bold shadow-2xs"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <Icon name="calendar_view_week" size={16} />
            <span>Tuần</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveView("list")}
            className={`px-2.5 py-1.5 max-[640px]:px-1.5 max-[640px]:py-1 rounded-lg transition-all flex items-center gap-1 max-[640px]:gap-0.5 ${
              activeView === "list"
                ? "bg-surface-container-lowest text-primary font-bold shadow-2xs"
                : "text-on-surface-variant hover:text-on-surface"
            }`}
          >
            <Icon name="view_agenda" size={16} />
            <span>Lịch biểu</span>
          </button>
        </div>

        {/* Google Calendar Sync */}
        <button
          type="button"
          onClick={handleSyncGoogle}
          className="flex shrink-0 items-center gap-1.5 max-[640px]:gap-1 px-3 py-2 max-[640px]:px-2 max-[640px]:py-1.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface text-[12px] max-[640px]:text-[10px] font-semibold border border-surface-container-high/50 transition-colors shadow-2xs"
        >
          <Icon
            name={syncedGoogle ? "check" : "sync"}
            size={17}
            className={syncedGoogle ? "text-secondary" : "text-primary"}
          />
          <span className="hidden sm:inline">
            {syncedGoogle ? "Đã đồng bộ!" : "Google Calendar"}
          </span>
        </button>

        {/* Add study schedule */}
        <button
          type="button"
          onClick={onAddStudySchedule}
          className="flex shrink-0 items-center gap-1.5 max-[640px]:gap-1 px-3 py-2 max-[640px]:px-2 max-[640px]:py-1.5 rounded-xl bg-primary hover:bg-primary/90 text-white text-[12px] max-[640px]:text-[10px] font-semibold border border-primary transition-all active:scale-95 shadow-2xs"
        >
          <Icon name="add" size={17} />
          <span>Thêm lịch học mới</span>
        </button>
      </div>
    </div>
  );
}
