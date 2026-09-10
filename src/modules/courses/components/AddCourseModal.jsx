import React, { useState } from 'react';
import Modal from '../../../components/ui/Modal';
import Button from '../../../components/ui/Button';

export default function AddCourseModal({ isOpen, onClose, onAddCourse }) {
  const [formData, setFormData] = useState({
    code: '',
    title: '',
    credits: 3,
    lecturer: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.code || !formData.title) return;

    onAddCourse({
      id: formData.code.toLowerCase(),
      code: formData.code.toUpperCase(),
      title: formData.title,
      credits: Number(formData.credits),
      lecturer: formData.lecturer || 'Giảng viên EIU',
      progressWeek: 'Tuần 1/16',
      mastery: 0,
      targetMastery: 80,
      passedObjectives: 0,
      totalObjectives: 30,
      labCount: 0,
      colorAccent: 'primary-container',
      statusBadge: 'Mới thêm'
    });

    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Thêm môn học mới"
      icon="add_circle"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label className="block text-label-sm font-semibold text-on-surface mb-1">
            Mã học phần (Course Code)
          </label>
          <input
            type="text"
            required
            placeholder="Ví dụ: CS301, IT3100"
            value={formData.code}
            onChange={(e) => setFormData({ ...formData, code: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary text-on-surface font-body-md"
          />
        </div>

        <div>
          <label className="block text-label-sm font-semibold text-on-surface mb-1">
            Tên môn học
          </label>
          <input
            type="text"
            required
            placeholder="Ví dụ: Cơ sở dữ liệu, Mạng máy tính"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary text-on-surface font-body-md"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-label-sm font-semibold text-on-surface mb-1">
              Số tín chỉ
            </label>
            <input
              type="number"
              min="1"
              max="6"
              value={formData.credits}
              onChange={(e) => setFormData({ ...formData, credits: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary text-on-surface font-body-md"
            />
          </div>

          <div>
            <label className="block text-label-sm font-semibold text-on-surface mb-1">
              Giảng viên phụ trách
            </label>
            <input
              type="text"
              placeholder="TS. Nguyễn Văn A"
              value={formData.lecturer}
              onChange={(e) => setFormData({ ...formData, lecturer: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low border border-surface-container-high focus:outline-none focus:ring-2 focus:ring-primary text-on-surface font-body-md"
            />
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-3 border-t border-surface-container-high/60">
          <Button variant="surface" size="md" onClick={onClose}>
            Hủy
          </Button>
          <Button variant="primary" size="md" type="submit">
            Thêm môn học
          </Button>
        </div>
      </form>
    </Modal>
  );
}
