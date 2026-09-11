import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import Modal from "../../components/ui/Modal";
import Button from "../../components/ui/Button";
import Icon from "../../components/ui/Icon";

export default function SettingsModal({ isOpen, onClose }) {
  const { user, setUser, isDarkMode, toggleDarkMode } = useApp();

  const [aiStyle, setAiStyle] = useState("socratic"); // 'socratic' | 'direct'
  const [remindersEnabled, setRemindersEnabled] = useState(true);
  const [googleCalendarSync, setGoogleCalendarSync] = useState(true);
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSave = () => {
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 1200);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Cài đặt hệ thống &amp; Hồ sơ sinh viên"
      icon="settings"
    >
      <div className="flex flex-col gap-4 text-left">
        {/* User Card */}
        <div className="p-3.5 rounded-xl bg-surface-container-low flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold text-lg shadow-sm">
            <Icon name="person" size={24} />
          </div>
          <div className="flex flex-col min-w-0">
            <div className="flex items-center gap-2">
              <h4 className="font-title text-title font-bold text-on-surface truncate">
                {user.name}
              </h4>
              <span className="px-2 py-0.2 rounded-full bg-primary-fixed text-on-primary-fixed-variant text-[11px] font-bold">
                {user.role}
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
              tien.nguyentrong.cit24@eiu.edu.vn · {user.school}
            </p>
          </div>
        </div>

        {/* AI Mentor Settings */}
        <div className="flex flex-col gap-2">
          <span className="text-label-sm font-bold text-on-surface uppercase tracking-wider">
            Phong cách hướng dẫn CTT AI
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => setAiStyle("socratic")}
              className={`p-3 rounded-xl border text-left transition-all ${
                aiStyle === "socratic"
                  ? "border-primary bg-primary-container/10 ring-1 ring-primary/40"
                  : "border-surface-container-high bg-surface-container-low"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-label-md font-bold text-on-surface">
                  Socratic Mentor
                </span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-primary-container text-on-primary font-bold">
                  Khuyên dùng
                </span>
              </div>
              <p className="text-[11px] text-on-surface-variant leading-tight">
                Không giải thay, đặt câu hỏi gợi mở để người học tự khám phá bản
                chất thuật toán.
              </p>
            </button>

            <button
              type="button"
              onClick={() => setAiStyle("direct")}
              className={`p-3 rounded-xl border text-left transition-all ${
                aiStyle === "direct"
                  ? "border-primary bg-primary-container/10 ring-1 ring-primary/40"
                  : "border-surface-container-high bg-surface-container-low"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-label-md font-bold text-on-surface">
                  Direct Answer
                </span>
              </div>
              <p className="text-[11px] text-on-surface-variant leading-tight">
                Cung cấp đáp án và lời giải chi tiết ngay lập tức cho các câu
                hỏi ôn tập nhanh.
              </p>
            </button>
          </div>
        </div>

        {/* Preferences Toggles */}
        <div className="flex flex-col gap-2 pt-2 border-t border-surface-container-high/40">
          <span className="text-label-sm font-bold text-on-surface uppercase tracking-wider">
            Tùy chọn thông báo &amp; Lịch
          </span>

          <label className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
            <div className="flex flex-col">
              <span className="font-label-md text-label-md font-semibold text-on-surface">
                Nhắc nhở phiên ôn tập AI trước 15 phút
              </span>
              <span className="text-[11px] text-on-surface-variant">
                Gửi thông báo đến thiết bị di động của bạn
              </span>
            </div>
            <input
              type="checkbox"
              checked={remindersEnabled}
              onChange={(e) => setRemindersEnabled(e.target.checked)}
              className="w-5 h-5 accent-primary rounded cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
            <div className="flex flex-col">
              <span className="font-label-md text-label-md font-semibold text-on-surface">
                Tự động đồng bộ Google Calendar
              </span>
              <span className="text-[11px] text-on-surface-variant">
                Chèn các buổi Spaced Repetition vào lịch cá nhân
              </span>
            </div>
            <input
              type="checkbox"
              checked={googleCalendarSync}
              onChange={(e) => setGoogleCalendarSync(e.target.checked)}
              className="w-5 h-5 accent-primary rounded cursor-pointer"
            />
          </label>

          <label className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
            <div className="flex flex-col">
              <span className="font-label-md text-label-md font-semibold text-on-surface flex items-center gap-1.5">
                <Icon
                  name={isDarkMode ? "dark_mode" : "light_mode"}
                  size={18}
                  className="text-primary"
                />
                Chế độ nền tối (Dark mode)
              </span>
              <span className="text-[11px] text-on-surface-variant">
                Giao diện học đêm chuẩn Academic Mastery, bảo vệ mắt
              </span>
            </div>
            <input
              type="checkbox"
              checked={isDarkMode}
              onChange={toggleDarkMode}
              className="w-5 h-5 accent-primary rounded cursor-pointer"
            />
          </label>
        </div>

        {savedNotice && (
          <div className="p-2.5 rounded-xl bg-secondary-container/60 text-on-secondary-container flex items-center gap-2 text-label-sm font-semibold animate-in fade-in duration-150">
            <Icon name="check_circle" size={16} className="text-secondary" />
            <span>Đã lưu thành công các tùy chọn!</span>
          </div>
        )}

        <div className="flex items-center justify-end gap-2 pt-3 border-t border-surface-container-high/60">
          <Button variant="surface" size="md" onClick={onClose}>
            Đóng
          </Button>
          <Button variant="primary" size="md" onClick={handleSave}>
            Lưu thay đổi
          </Button>
        </div>
      </div>
    </Modal>
  );
}
