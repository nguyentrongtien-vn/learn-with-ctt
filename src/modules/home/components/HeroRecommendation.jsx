import React from 'react';
import { useApp } from '../../../context/AppContext';
import Icon from '../../../components/ui/Icon';

export default function HeroRecommendation() {
  const { setActiveTab, handleJumpToQuestion } = useApp();

  const handleReviewWrongQuestions = () => {
    handleJumpToQuestion(1); // Question 2 (wrong)
    setActiveTab('quiz');
  };

  const handleStartPracticeNow = () => {
    handleJumpToQuestion(2); // Question 3 (in progress)
    setActiveTab('quiz');
  };

  return (
    <div className="relative overflow-hidden rounded-3xl bg-surface-container-lowest p-5 lg:p-6 shadow-sm border border-surface-container-high/40 transition-all hover:border-primary/40">
      {/* Dynamic Ambient Background Meshes */}
      <div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary-fixed/25 blur-3xl pointer-events-none" />
      <div className="absolute right-1/3 -bottom-16 w-64 h-64 rounded-full bg-error-container/20 blur-3xl pointer-events-none" />
      <div className="absolute left-1/4 -top-10 w-48 h-48 rounded-full bg-secondary-container/15 blur-2xl pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-5">
        {/* Left: Diagnosis Insight */}
        <div className="flex items-start gap-4 max-w-3xl">
          <div className="relative w-13 h-13 rounded-2xl bg-gradient-to-br from-primary to-primary-container text-on-primary flex items-center justify-center shrink-0 shadow-md p-3">
            <Icon name="psychology" size={28} />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-error ring-2 ring-surface-container-lowest animate-ping" />
            <span className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full bg-error ring-2 ring-surface-container-lowest" />
          </div>

          <div className="flex flex-col min-w-0">
            {/* Top diagnostic tag */}
            <div className="flex items-center gap-2 flex-wrap mb-1.5">
              <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-error-container text-on-error-container font-label-sm text-[11px] font-bold tracking-wide uppercase shadow-xs">
                <span className="w-2 h-2 rounded-full bg-error animate-pulse" />
                Ưu tiên số 1 hôm nay · CTT AI Match
              </span>
              <span className="text-[12px] font-semibold text-on-surface-variant">
                CS201 · Cấu trúc dữ liệu &amp; Giải thuật
              </span>
            </div>

            {/* Main title & score */}
            <div className="flex items-baseline gap-3 flex-wrap">
              <h2 className="font-headline-md text-headline-md text-on-surface font-extrabold tracking-tight">
                🌳 Tree Traversal (Duyệt Cây Nhị Phân)
              </h2>
              <span className="px-2.5 py-0.5 rounded-lg bg-error-container text-error font-title text-label-md font-bold shrink-0 border border-error/20">
                32% Năng lực
              </span>
            </div>

            {/* Diagnostic statement */}
            <div className="flex items-center gap-2 mt-1.5 text-on-surface-variant font-body-md text-body-sm flex-wrap">
              <span className="inline-flex items-center gap-1 font-bold text-error">
                <Icon name="error" size={16} />
                Chẩn đoán lỗi:
              </span>
              <span className="text-on-surface">
                Bạn đã làm sai <strong>4/6 câu hỏi</strong> gần đây ở chủ đề này (nhầm lẫn giữa In-order &amp; Post-order trong Call Stack đệ quy).
              </span>
            </div>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3 shrink-0 flex-wrap">
          <button
            type="button"
            onClick={handleReviewWrongQuestions}
            className="px-4 py-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface font-label-md text-label-md font-semibold flex items-center gap-1.5 transition-all active:scale-95 border border-surface-container-high/40 shadow-xs"
          >
            <Icon name="history_edu" size={18} className="text-primary" />
            <span>Xem lại 4 câu sai</span>
          </button>

          <button
            type="button"
            onClick={handleStartPracticeNow}
            className="px-5 py-2.5 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-bold flex items-center gap-2 shadow-md hover:shadow-lg transition-all active:scale-95 card-shadow-glow-primary"
          >
            <span>Ôn tập ngay (10 phút)</span>
            <Icon name="arrow_forward" size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
