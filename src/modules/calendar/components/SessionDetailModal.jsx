import React, { useState } from 'react';
import { useApp } from '../../../context/AppContext';
import Icon from '../../../components/ui/Icon';
import Modal from '../../../components/ui/Modal';

export default function SessionDetailModal({ session, onClose }) {
  const { setActiveTab, setActiveCourseId, handleJumpToQuestion } = useApp();
  const [synced, setSynced] = useState(false);

  if (!session) return null;

  const handleSyncGoogle = () => {
    setSynced(true);
    setTimeout(() => {
      setSynced(false);
    }, 2000);
  };

  const handleAction = () => {
    onClose();
    if (session.type === 'ai-scheduled') {
      handleJumpToQuestion(2);
      setActiveTab('quiz');
    } else if (session.code && session.code.toLowerCase().startsWith('cs')) {
      setActiveCourseId(session.code.toLowerCase());
      setActiveTab('course-detail');
    } else {
      setActiveTab('courses');
    }
  };

  const isAi = session.type === 'ai-scheduled';
  const isExam = session.type === 'exam';

  return (
    <Modal isOpen={!!session} onClose={onClose} title="Chi tiết phiên học" size="md">
      <div className="flex flex-col gap-4">
        {/* Top Tag & Title */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
              {session.code}
            </span>
            {isAi && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-primary-container text-on-primary flex items-center gap-1">
                <Icon name="auto_awesome" size={13} />
                AI Spaced Repetition
              </span>
            )}
            {isExam && (
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-error-container text-on-error-container">
                Bài kiểm tra chính thức
              </span>
            )}
          </div>

          <h3 className="text-lg font-bold text-on-surface">
            {session.title}
          </h3>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-3 p-3.5 rounded-xl bg-surface-container-low/70 border border-surface-container-high/40 text-[13px]">
          <div className="flex items-center gap-2.5 text-on-surface">
            <Icon name="schedule" size={18} className="text-primary shrink-0" />
            <div>
              <div className="text-[10px] text-on-surface-variant font-medium">Thời gian</div>
              <div className="font-semibold">{session.time}</div>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-on-surface">
            <Icon name="location_on" size={18} className="text-secondary shrink-0" />
            <div>
              <div className="text-[10px] text-on-surface-variant font-medium">Địa điểm</div>
              <div className="font-semibold">{session.room || 'Trực tuyến / CTT App'}</div>
            </div>
          </div>
        </div>

        {/* Context Note */}
        <p className="text-[12px] text-on-surface-variant leading-relaxed">
          {isAi
            ? 'Phiên học này được CTT AI tự động sắp xếp vào giờ rảnh giữa các tiết học nhằm khắc phục rào cản nhận thức gần đây.'
            : 'Tiết học thuộc chương trình đào tạo chính khóa kỳ 2024.2 tại Đại học Bách Khoa Hà Nội.'}
        </p>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-2.5 pt-2 border-t border-surface-container-high/40">
          <button
            type="button"
            onClick={handleSyncGoogle}
            className="px-3.5 py-2 rounded-xl text-[12px] font-medium text-on-surface hover:bg-surface-container border border-surface-container-high/40 transition-colors flex items-center gap-1.5"
          >
            <Icon name={synced ? 'check' : 'calendar_add_on'} size={16} className={synced ? 'text-secondary' : 'text-on-surface-variant'} />
            <span>{synced ? 'Đã đồng bộ!' : 'Google Calendar'}</span>
          </button>

          <button
            type="button"
            onClick={handleAction}
            className="px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 text-on-primary text-[12px] font-semibold flex items-center gap-1.5 shadow-2xs transition-all active:scale-98"
          >
            <span>{isAi ? 'Bắt đầu ôn tập (10p)' : 'Mở tài liệu môn học'}</span>
            <Icon name="arrow_forward" size={15} />
          </button>
        </div>
      </div>
    </Modal>
  );
}
