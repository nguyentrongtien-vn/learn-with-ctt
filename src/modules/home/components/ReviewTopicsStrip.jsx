import React from 'react';
import { useApp } from '../../../context/AppContext';
import { weakConceptsRanked } from '../../../data/mockData';
import Icon from '../../../components/ui/Icon';

export default function ReviewTopicsStrip() {
  const { setActiveTab, setActiveCourseId, handleJumpToQuestion } = useApp();

  const handleReview = (item) => {
    if (item.id === 'tree-traversal') {
      handleJumpToQuestion(2);
      setActiveTab('quiz');
    } else {
      setActiveCourseId(item.course.toLowerCase());
      setActiveTab('course-detail');
    }
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-[15px] font-bold text-on-surface">
          Chủ đề nên ôn lại
        </h3>
        <span className="text-[11px] text-on-surface-variant font-medium">
          Dựa trên bài làm gần đây
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
        {weakConceptsRanked.map((item) => (
          <div
            key={item.id}
            onClick={() => handleReview(item)}
            className="p-3 rounded-xl bg-surface-container-low/50 hover:bg-surface-container-low border border-surface-container-high/30 cursor-pointer transition-colors flex items-center justify-between gap-2"
          >
            <div className="flex flex-col min-w-0">
              <span className="text-[13px] font-semibold text-on-surface truncate">
                {item.name}
              </span>
              <span className="text-[11px] text-on-surface-variant">
                {item.course} · Năng lực {item.mastery}%
              </span>
            </div>

            <button
              type="button"
              className="w-7 h-7 rounded-lg bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors shrink-0"
              aria-label="Ôn tập"
            >
              <Icon name="arrow_forward" size={15} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
