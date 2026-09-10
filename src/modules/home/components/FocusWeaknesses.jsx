import React from 'react';
import { useApp } from '../../../context/AppContext';
import { weakConceptsRanked } from '../../../data/mockData';
import Icon from '../../../components/ui/Icon';

export default function FocusWeaknesses() {
  const { setActiveTab, setActiveCourseId, handleJumpToQuestion } = useApp();

  const handlePracticeConcept = (concept) => {
    if (concept.id === 'tree-traversal') {
      handleJumpToQuestion(2); // Question 3
      setActiveTab('quiz');
    } else {
      setActiveCourseId(concept.course.toLowerCase());
      setActiveTab('course-detail');
    }
  };

  return (
    <div className="flex flex-col justify-between rounded-3xl bg-surface-container-lowest p-5 shadow-sm border border-surface-container-high/40 hover:border-primary/30 transition-all min-h-[380px] lg:min-h-0">
      <div className="flex flex-col gap-3.5 min-h-0">
        {/* Header */}
        <div className="flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary border border-primary/15">
              <Icon name="track_changes" size={20} />
            </div>
            <div>
              <h3 className="font-title text-title text-on-surface font-extrabold leading-none">
                Lỗ hổng trọng tâm
              </h3>
              <p className="font-label-sm text-[11px] text-on-surface-variant mt-1">
                Xếp hạng theo độ lệch chuẩn chẩn đoán
              </p>
            </div>
          </div>
          <span className="font-label-sm text-[11px] text-error font-bold bg-error-container/60 px-2.5 py-0.5 rounded-full border border-error/20">
            3 chủ đề
          </span>
        </div>

        {/* Concept Rank List */}
        <div className="flex flex-col gap-2.5 min-h-0 overflow-y-auto pr-0.5">
          {weakConceptsRanked.map((item) => {
            const isCritical = item.severity === 'critical';
            const isModerate = item.severity === 'moderate';

            const borderAccent = isCritical
              ? 'bg-error'
              : isModerate
              ? 'bg-on-tertiary-container'
              : 'bg-secondary';

            const rankColor = isCritical
              ? 'text-error'
              : isModerate
              ? 'text-on-tertiary-container'
              : 'text-secondary';

            const badgeBg = isCritical
              ? 'bg-error-container text-on-error-container border border-error/20'
              : isModerate
              ? 'bg-tertiary-fixed text-on-tertiary-fixed-variant'
              : 'bg-secondary-fixed text-on-secondary-container';

            const progressBg = isCritical
              ? 'bg-error'
              : isModerate
              ? 'bg-on-tertiary-container'
              : 'bg-secondary';

            const buttonStyle = isCritical
              ? 'bg-error-container hover:bg-error-container/80 text-on-error-container font-bold'
              : 'bg-surface-container hover:bg-surface-container-high text-on-surface font-semibold';

            return (
              <div
                key={item.id}
                className="relative overflow-hidden rounded-2xl bg-surface-container-low/60 p-3 flex items-center justify-between gap-2.5 hover:bg-surface-container/80 transition-all border border-surface-container-high/30 group"
              >
                <div className={`absolute left-0 top-0 bottom-0 w-1 ${borderAccent}`} />
                <div className="flex items-center gap-3 min-w-0 pl-1">
                  <span className={`font-title text-xl ${rankColor} font-black tracking-tighter shrink-0 w-6 text-center`}>
                    {item.rank}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <h4 className="font-label-md text-label-md text-on-surface font-bold truncate">
                        {item.name}
                      </h4>
                      <span className={`inline-flex items-center px-2 py-0.2 rounded-full text-[10px] font-bold ${badgeBg}`}>
                        {item.levelBadge}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <span className={`font-label-sm text-label-sm font-extrabold ${rankColor}`}>
                        {item.mastery}%
                      </span>
                      <div className="w-16 h-1.5 rounded-full bg-surface-container-highest overflow-hidden">
                        <div
                          className={`h-full ${progressBg} rounded-full transition-all duration-500`}
                          style={{ width: `${item.mastery}%` }}
                        />
                      </div>
                      <span className="font-body-sm text-[11px] text-on-surface-variant font-semibold">
                        {item.course}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handlePracticeConcept(item)}
                  className={`px-3 py-1.5 rounded-xl font-label-sm text-label-sm shrink-0 transition-all active:scale-95 shadow-xs ${buttonStyle}`}
                >
                  Luyện tập
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-3 border-t border-surface-container-high/40 shrink-0">
        <button
          type="button"
          onClick={() => {
            setActiveCourseId('cs201');
            setActiveTab('course-detail');
          }}
          className="w-full py-2 rounded-xl bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 transition-all active:scale-98 border border-surface-container-high/40"
        >
          <span>Xem phân tích tất cả 12 kỹ năng</span>
          <Icon name="chevron_right" size={16} />
        </button>
      </div>
    </div>
  );
}
