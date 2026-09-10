import React from 'react';
import { useApp } from '../../../context/AppContext';
import Icon from '../../../components/ui/Icon';
import Button from '../../../components/ui/Button';

export default function ContextInspector() {
  const { aiKnowledgeContext, setActiveTab, handleJumpToQuestion } = useApp();

  const handleStartQuickDrill = () => {
    handleJumpToQuestion(2);
    setActiveTab('quiz');
  };

  return (
    <aside className="w-full lg:w-80 h-full flex flex-col gap-3 shrink-0 overflow-y-auto lg:overflow-hidden select-none">
      {/* Box 1: Course Context */}
      <div className="bg-surface-container-lowest rounded-3xl p-4 shadow-sm border border-surface-container-high/40 flex flex-col gap-3 shrink-0">
        <div className="flex items-center justify-between pb-2 border-b border-surface-container-high/40">
          <span className="font-label-md text-label-md font-extrabold text-on-surface flex items-center gap-1.5">
            <Icon name="hub" size={18} className="text-primary" />
            NGỮ CẢNH TRI THỨC
          </span>
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-sm text-[11px] font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Đồng bộ SIS
          </span>
        </div>

        <div className="flex flex-col gap-1 text-label-sm">
          <span className="text-on-surface-variant font-medium text-[11px]">Môn học đang khảo sát:</span>
          <strong className="text-on-surface font-extrabold text-body-sm leading-snug">
            {aiKnowledgeContext.course}
          </strong>
        </div>

        <div className="p-3 rounded-2xl bg-surface-container-low/70 border border-surface-container-high/30 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-label-sm text-[11px] text-on-surface-variant font-medium">Chủ đề trọng điểm</span>
            <span className="font-label-md font-extrabold text-primary">{aiKnowledgeContext.activeTopic}</span>
          </div>
          <span className="font-label-sm text-[11px] font-extrabold text-error bg-error-container/60 px-2.5 py-0.5 rounded-full border border-error/20">
            {aiKnowledgeContext.mastery}
          </span>
        </div>
      </div>

      {/* Box 2: Connected Citations */}
      <div className="bg-surface-container-lowest rounded-3xl p-4 shadow-sm border border-surface-container-high/40 flex flex-col gap-2.5 shrink-0">
        <span className="font-label-md text-label-md font-extrabold text-on-surface flex items-center gap-1.5">
          <Icon name="menu_book" size={18} className="text-primary" />
          TRÍCH XUẤT TÀI LIỆU EIU
        </span>

        <div className="flex flex-col gap-2">
          {aiKnowledgeContext.connectedDocuments.map((doc, idx) => (
            <div
              key={idx}
              className="p-3 rounded-2xl bg-surface-container-low/60 flex flex-col gap-1 border border-surface-container-high/30 hover:bg-surface-container/70 transition-colors"
            >
              <div className="flex items-center gap-2 text-primary font-label-sm font-bold truncate">
                <Icon name="picture_as_pdf" size={16} />
                <span className="truncate">{doc.name}</span>
              </div>
              <p className="font-body-sm text-[11px] text-on-surface-variant leading-snug">
                {doc.page}
              </p>
              <span className="text-[10px] text-secondary font-bold flex items-center gap-1 pt-0.5">
                <Icon name="verified" size={12} />
                {doc.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Box 3: Quick Action Drill */}
      <div className="bg-surface-container-lowest rounded-3xl p-4 shadow-sm border border-surface-container-high/40 flex flex-col justify-between gap-3 flex-1 min-h-[160px] lg:min-h-0">
        <div className="flex flex-col gap-1.5">
          <span className="font-label-md text-label-md font-extrabold text-on-surface flex items-center gap-1.5">
            <Icon name="bolt" size={18} className="text-amber-500" fill />
            LUYỆN TẬP THÍCH ỨNG
          </span>
          <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
            Kiểm tra mức độ tiến bộ sau khi được AI mentor gợi mở tư duy bằng 5 câu hỏi chẩn đoán nhanh.
          </p>
        </div>

        <Button
          variant="primary"
          size="md"
          iconRight="arrow_forward"
          onClick={handleStartQuickDrill}
          className="w-full justify-center card-shadow-glow-primary font-bold"
        >
          Luyện tập 5 câu hỏi nhanh
        </Button>
      </div>
    </aside>
  );
}
