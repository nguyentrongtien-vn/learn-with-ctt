import React, { useState } from "react";
import { useApp } from "../../../context/AppContext";
import Icon from "../../../components/ui/Icon";

export default function SessionDetailCard({ selectedSession }) {
  const { setActiveTab, handleJumpToQuestion } = useApp();
  const [lockedSuccess, setLockedSuccess] = useState(false);

  const handleLockSchedule = () => {
    setLockedSuccess(true);
    setTimeout(() => {
      setLockedSuccess(false);
    }, 2500);
  };

  const handleStartReview = () => {
    handleJumpToQuestion(2);
    setActiveTab("quiz");
  };

  const session = selectedSession || {
    title: "Tree Traversal Review",
    code: "CS201 · Cấu trúc dữ liệu & Giải thuật",
    time: "18:00 Hôm nay",
    duration: "20 phút",
    method: "Spaced Repetition",
  };

  return (
    <aside className="w-full lg:w-[24%] h-full flex flex-col gap-3 shrink-0 select-none">
      {/* Box 1: AI Scheduling Engine */}
      <div className="bg-surface-container-lowest rounded-3xl p-4 shadow-sm border border-surface-container-high/40 flex flex-col gap-3 shrink-0">
        <div className="flex items-center justify-between">
          <span className="font-label-md text-label-md font-extrabold text-on-surface flex items-center gap-1.5">
            <Icon name="smart_toy" size={18} className="text-primary" />
            AI SCHEDULING
          </span>
          <span className="text-[11px] font-extrabold px-2.5 py-0.5 rounded-full bg-secondary-container text-on-secondary-container">
            Đã khớp 3 phiên
          </span>
        </div>

        <p className="font-body-sm text-[12px] text-on-surface-variant leading-relaxed">
          Thuật toán tự động tìm các khung giờ trống &gt; 30 phút giữa các tiết
          học tại Đại học Quốc tế Miền Đông để chèn các phiên bù đắp lỗ hổng
          nhận thức.
        </p>

        <button
          type="button"
          onClick={handleLockSchedule}
          className={`w-full py-2.5 px-3 rounded-2xl font-label-md text-label-md font-bold transition-all flex items-center justify-center gap-2 shadow-xs active:scale-95 border ${
            lockedSuccess
              ? "bg-secondary text-on-secondary border-secondary"
              : "bg-surface-container-low hover:bg-surface-container text-primary border-surface-container-high/40"
          }`}
        >
          {lockedSuccess ? (
            <>
              <Icon name="check" size={18} />
              <span>Đã đồng bộ Google Calendar!</span>
            </>
          ) : (
            <>
              <Icon name="lock_clock" size={18} />
              <span>Khóa lịch AI vào TKB</span>
            </>
          )}
        </button>
      </div>

      {/* Box 2: Highlighted Session Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary to-indigo-900 text-on-primary p-5 rounded-3xl shadow-md flex flex-col justify-between flex-1 min-h-[190px] lg:min-h-0 card-shadow-glow-primary">
        {/* Glow blur background */}
        <div className="absolute -right-10 -bottom-10 w-36 h-36 rounded-full bg-secondary/20 blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <span className="text-label-sm font-label-sm uppercase tracking-wider text-on-primary-container font-extrabold text-[11px]">
              Chi tiết phiên học
            </span>
            <span className="px-2.5 py-0.5 rounded-full bg-surface-container-lowest text-primary text-[11px] font-extrabold shadow-xs">
              {session.time || "18:00 Hôm nay"}
            </span>
          </div>

          <div className="my-1">
            <h4 className="font-headline-sm text-lg font-extrabold leading-tight line-clamp-2">
              {session.title}
            </h4>
            <p className="font-body-sm text-[12px] text-on-primary/80 mt-1 line-clamp-1">
              {session.code}
            </p>

            <div className="flex items-center gap-2 mt-2.5 text-[11px] text-on-primary/90 flex-wrap">
              <span className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-md font-semibold">
                <Icon name="timer" size={13} />
                {session.duration || "20 phút"}
              </span>
              <span className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-md font-semibold">
                <Icon name="psychology" size={13} />
                {session.method || "Spaced Repetition"}
              </span>
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleStartReview}
          className="relative z-10 w-full py-2.5 px-4 rounded-2xl bg-surface-container-lowest text-primary font-title text-label-md font-extrabold hover:bg-primary-fixed transition-all flex items-center justify-center gap-2 shadow-md active:scale-95 mt-4"
        >
          <span>Bắt đầu ôn tập ngay</span>
          <Icon name="arrow_forward" size={16} />
        </button>
      </div>
    </aside>
  );
}
