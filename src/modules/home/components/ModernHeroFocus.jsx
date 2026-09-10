import React from 'react';
import { useApp } from '../../../context/AppContext';
import Icon from '../../../components/ui/Icon';

export default function ModernHeroFocus() {
  const { setActiveTab, handleJumpToQuestion } = useApp();

  const handleStartPractice = () => {
    handleJumpToQuestion(2); // Jump to Question 3
    setActiveTab('quiz');
  };

  const handleAskMentor = () => {
    setActiveTab('ai-companion');
  };

  return (
    <div className="relative overflow-hidden rounded-2xl bg-surface-container-low/80 hover:bg-surface-container-low border border-surface-container-high/40 p-5 sm:p-6 transition-all shadow-2xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
        {/* Left: Content */}
        <div className="flex items-start gap-3.5 max-w-2xl">
          <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 border border-primary/20">
            <Icon name="play_arrow" size={22} fill />
          </div>

          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[12px] font-semibold text-primary">
                Tiếp tục bài học
              </span>
              <span className="text-[11px] text-on-surface-variant font-medium">
                · CS201 Cấu trúc dữ liệu &amp; GT
              </span>
            </div>

            <h2 className="text-lg sm:text-xl font-bold text-on-surface tracking-tight">
              Duyệt cây nhị phân (Tree Traversal)
            </h2>

            <p className="text-[13px] text-on-surface-variant mt-1 leading-relaxed">
              CTT AI đã soạn sẵn 5 câu hỏi thích ứng ngắn giúp bạn phân biệt rõ cơ chế đệ quy Call Stack giữa In-order và Post-order.
            </p>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={handleAskMentor}
            className="px-3.5 py-2 rounded-xl text-on-surface hover:bg-surface-container text-[13px] font-medium transition-colors border border-surface-container-high/40"
          >
            Hỏi trợ lý CTT
          </button>

          <button
            type="button"
            onClick={handleStartPractice}
            className="px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 text-on-primary text-[13px] font-semibold flex items-center gap-1.5 shadow-sm transition-all active:scale-98"
          >
            <span>Luyện tập (10 phút)</span>
            <Icon name="arrow_forward" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
