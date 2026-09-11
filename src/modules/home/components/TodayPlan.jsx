import React from "react";
import { useApp } from "../../../context/AppContext";
import Icon from "../../../components/ui/Icon";

export default function TodayPlan() {
  const { setActiveTab } = useApp();

  return (
    <div className="flex flex-col justify-between rounded-3xl bg-surface-container-lowest p-5 shadow-sm border border-surface-container-high/40 hover:border-primary/30 transition-all min-h-[380px] lg:min-h-0">
      <div className="flex flex-col gap-3.5 min-h-0">
        {/* Header */}
        <div className="flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary border border-primary/15">
              <Icon name="event_upcoming" size={20} />
            </div>
            <div>
              <h3 className="font-title text-title text-on-surface font-extrabold leading-none">
                Kế hoạch hôm nay
              </h3>
              <p className="font-label-sm text-[11px] text-on-surface-variant mt-1">
                3 phiên học tập đã sắp xếp
              </p>
            </div>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-[11px] font-bold">
            Thứ Ba · Hôm nay
          </span>
        </div>

        {/* Sessions list */}
        <div className="flex flex-col gap-2.5 min-h-0 overflow-y-auto pr-0.5">
          {/* Session 1: Class (Completed) */}
          <div className="p-3 rounded-2xl bg-surface-container-low/60 border border-surface-container-high/30 flex items-center justify-between gap-2.5 hover:bg-surface-container/70 transition-all">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-xs border border-surface-container-high/40">
                <Icon name="school" size={18} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h4 className="font-label-md text-label-md text-on-surface font-bold truncate">
                    Lập trình OOP Java
                  </h4>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-surface-container text-on-surface-variant font-semibold">
                    TC-203
                  </span>
                </div>
                <p className="font-body-sm text-[11px] text-on-surface-variant truncate mt-0.5">
                  09:30 - 11:30 · Tiết chính khóa Quốc tế Miền Đông
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-secondary bg-secondary-container/50 px-2 py-0.5 rounded-full shrink-0">
              <Icon name="check" size={13} />
              Đã học
            </span>
          </div>

          {/* Session 2: AI Review Priority (Active CTA) */}
          <div className="relative overflow-hidden p-3 rounded-2xl bg-primary-container/10 border border-primary/30 flex items-center justify-between gap-2.5 hover:bg-primary-container/15 transition-all card-shadow-subtle">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary" />
            <div className="flex items-center gap-3 min-w-0 pl-1">
              <div className="w-9 h-9 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-xs">
                <Icon name="auto_awesome" size={18} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <h4 className="font-label-md text-label-md text-primary font-extrabold truncate">
                    Tree Traversal Review
                  </h4>
                  <span className="text-[10px] px-2 py-0.2 rounded-full bg-primary-container text-on-primary font-bold">
                    AI Slot
                  </span>
                </div>
                <p className="font-body-sm text-[11px] text-on-surface-variant truncate mt-0.5">
                  18:00 Hôm nay · 20p Spaced Repetition
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab("quiz")}
              className="px-3 py-1.5 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-sm text-label-sm font-bold shrink-0 shadow-xs active:scale-95 transition-all"
            >
              Bắt đầu
            </button>
          </div>

          {/* Session 3: Evening self-study */}
          <div className="p-3 rounded-2xl bg-surface-container-low/60 border border-surface-container-high/30 flex items-center justify-between gap-2.5 hover:bg-surface-container/70 transition-all">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-9 h-9 rounded-xl bg-surface-container-lowest flex items-center justify-center text-on-surface-variant shrink-0 shadow-xs border border-surface-container-high/40">
                <Icon name="menu_book" size={18} />
              </div>
              <div className="min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="font-label-md text-label-md text-on-surface font-semibold truncate">
                    Đọc slide Toán rời rạc
                  </h4>
                </div>
                <p className="font-body-sm text-[11px] text-on-surface-variant truncate mt-0.5">
                  20:30 - 21:15 · Bài giảng MA110 (Hàm sinh)
                </p>
              </div>
            </div>
            <span className="text-[11px] text-on-surface-variant font-semibold px-2 py-0.5 rounded-full bg-surface-container shrink-0">
              Sắp tới
            </span>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-3 border-t border-surface-container-high/40 shrink-0">
        <button
          type="button"
          onClick={() => setActiveTab("study-calendar")}
          className="w-full py-2 rounded-xl bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 transition-all active:scale-98 border border-surface-container-high/40"
        >
          <span>Mở toàn bộ thời khóa biểu tuần</span>
          <Icon name="chevron_right" size={16} />
        </button>
      </div>
    </div>
  );
}
