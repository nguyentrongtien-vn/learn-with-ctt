import React from 'react';
import { useApp } from '../../../context/AppContext';
import Icon from '../../../components/ui/Icon';

export default function QuickActionPills() {
  const { setActiveTab, setActiveCourseId, handleJumpToQuestion } = useApp();

  const actions = [
    {
      id: 'quiz-fast',
      label: 'Luyện tập nhanh (5 phút)',
      icon: 'bolt',
      onClick: () => {
        handleJumpToQuestion(2);
        setActiveTab('quiz');
      }
    },
    {
      id: 'ask-ai',
      label: 'Hỏi trợ lý CTT AI',
      icon: 'smart_toy',
      onClick: () => setActiveTab('ai-companion')
    },
    {
      id: 'today-cal',
      label: 'Xem thời khóa biểu hôm nay',
      icon: 'calendar_today',
      onClick: () => setActiveTab('study-calendar')
    },
    {
      id: 'cs201-docs',
      label: 'Tài liệu CS201',
      icon: 'description',
      onClick: () => {
        setActiveCourseId('cs201');
        setActiveTab('course-detail');
      }
    }
  ];

  return (
    <div className="flex items-center gap-2 overflow-x-auto py-1 no-scrollbar">
      {actions.map((act) => (
        <button
          key={act.id}
          type="button"
          onClick={act.onClick}
          className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-container-low/70 hover:bg-surface-container border border-surface-container-high/40 text-[12px] font-medium text-on-surface-variant hover:text-on-surface whitespace-nowrap transition-all active:scale-95 shrink-0"
        >
          <Icon name={act.icon} size={15} className="text-primary" />
          <span>{act.label}</span>
        </button>
      ))}
    </div>
  );
}
