import React, { useState } from 'react';
import Modal from '../../../components/ui/Modal';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/ui/Icon';

export default function SyncSISModal({ isOpen, onClose }) {
  const [syncing, setSyncing] = useState(false);
  const [syncedSuccess, setSyncedSuccess] = useState(false);

  const handleSync = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setSyncedSuccess(true);
      setTimeout(() => {
        setSyncedSuccess(false);
        onClose();
      }, 1500);
    }, 1200);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Đồng bộ Cổng đào tạo QAA / SIS EIU"
      icon="sync"
    >
      <div className="flex flex-col gap-4">
        <p className="font-body-md text-body-md text-on-surface-variant">
          Hệ thống sẽ kết nối với tài khoản CTT Bách Khoa để cập nhật thời khóa biểu, danh sách lớp học phần và điểm quá trình kỳ 2024.2.
        </p>

        <div className="p-3.5 rounded-xl bg-surface-container-low flex flex-col gap-2">
          <div className="flex items-center justify-between text-label-sm">
            <span className="text-on-surface-variant">Trạng thái kết nối:</span>
            <span className="font-semibold text-secondary flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              Đã xác thực SSO EIU
            </span>
          </div>
          <div className="flex items-center justify-between text-label-sm">
            <span className="text-on-surface-variant">Lần đồng bộ gần nhất:</span>
            <span className="font-medium text-on-surface">22/10/2024, 08:30</span>
          </div>
          <div className="flex items-center justify-between text-label-sm">
            <span className="text-on-surface-variant">Mã sinh viên:</span>
            <span className="font-medium text-on-surface">20205214 · Nguyễn Trọng Tiến</span>
          </div>
        </div>

        {syncedSuccess ? (
          <div className="p-3 rounded-xl bg-secondary-container/60 text-on-secondary-container flex items-center gap-2 font-label-md">
            <Icon name="check_circle" size={20} className="text-secondary" />
            <span>Đã cập nhật thành công 3 môn học &amp; 14 buổi lab!</span>
          </div>
        ) : null}

        <div className="flex items-center justify-end gap-2 pt-3 border-t border-surface-container-high/60">
          <Button variant="surface" size="md" onClick={onClose} disabled={syncing}>
            Đóng
          </Button>
          <Button
            variant="primary"
            size="md"
            icon="sync"
            loading={syncing}
            onClick={handleSync}
          >
            {syncing ? 'Đang đồng bộ...' : 'Bắt đầu đồng bộ'}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
