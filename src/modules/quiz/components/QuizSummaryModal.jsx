import React from 'react';
import Modal from '../../../components/ui/Modal';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/ui/Icon';

export default function QuizSummaryModal({ isOpen, onClose, onRestart, onGoHome, stats }) {
  const { total, correct, incorrect, unattempted, percentage } = stats;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Kết quả đánh giá năng lực thích ứng"
      icon="military_tech"
    >
      <div className="flex flex-col gap-4">
        <div className="flex flex-col items-center justify-center p-4 rounded-xl bg-surface-container-low text-center">
          <span className="text-4xl font-extrabold text-primary mb-1">
            {percentage}%
          </span>
          <span className="font-label-md text-on-surface font-semibold">
            {percentage >= 70 ? 'Đã đạt chuẩn kiến thức!' : 'Cần củng cố thêm chủ đề Tree Traversal'}
          </span>
          <p className="font-body-sm text-on-surface-variant text-[12px] mt-1">
            Chủ đề: Tree Traversal (CS201 · Cấu trúc Dữ liệu & Giải thuật)
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-label-sm">
          <div className="p-2.5 rounded-xl bg-secondary-container/40 text-on-secondary-container">
            <span className="block text-xl font-bold">{correct}</span>
            <span>Câu đúng</span>
          </div>
          <div className="p-2.5 rounded-xl bg-error-container/60 text-error">
            <span className="block text-xl font-bold">{incorrect}</span>
            <span>Câu sai</span>
          </div>
          <div className="p-2.5 rounded-xl bg-surface-container text-on-surface-variant">
            <span className="block text-xl font-bold">{unattempted}</span>
            <span>Chưa làm</span>
          </div>
        </div>

        <div className="p-3 rounded-xl bg-surface-container-low text-body-sm text-on-surface flex items-start gap-2">
          <Icon name="psychology" size={20} className="text-primary shrink-0" />
          <p className="leading-snug">
            <strong>Lời khuyên CTT Socratic:</strong> Bạn đã cải thiện rõ rệt ở các câu hỏi lý thuyết cơ bản. Tiếp tục thảo luận với AI Mentor về <em>Stack Call Frame</em> để giải quyết triệt để các câu hỏi đệ quy phức tạp.
          </p>
        </div>

        <div className="flex items-center justify-end gap-2 pt-3 border-t border-surface-container-high/60">
          <Button variant="surface" size="md" onClick={onGoHome}>
            Về trang chủ
          </Button>
          <Button variant="primary" size="md" onClick={onRestart}>
            Làm lại bài này
          </Button>
        </div>
      </div>
    </Modal>
  );
}
