import React, { useEffect, useState } from "react";
import { useApp } from "../../context/AppContext";
import Modal from "../../components/ui/Modal";
import Button from "../../components/ui/Button";
import Icon from "../../components/ui/Icon";
import "../../admin/settings/AdminSettings.css";

const TABS = [
  ["profile", "Hồ sơ", "person"],
  ["ai", "Trợ lý AI", "smart_toy"],
  ["notifications", "Thông báo & Lịch", "notifications"],
  ["appearance", "Giao diện", "palette"],
  ["privacy", "Quyền riêng tư & Dữ liệu", "privacy_tip"],
  ["security", "Tài khoản & Bảo mật", "lock"],
];

const DEFAULT_DRAFT = {
  name: "",
  email: "tien.nguyentrong.cit24@eiu.edu.vn",
  phone: "0901 234 567",
  username: "tien.ctt",
  major: "CS K65",
  goal: "Đạt GPA 3.6",
  priority: "OOP",
  avatar: "",
  aiStyle: "socratic",
  aiDifficulty: 2,
  responseLanguage: "Tiếng Việt",
  responseLength: "short",
  wrongOnly: false,
  remindersEnabled: true,
  googleCalendarSync: true,
  channels: ["Push", "Email"],
  quietFrom: "22:00",
  quietTo: "07:00",
  repetition: "Mặc định",
  fontSize: "medium",
  density: "comfortable",
  interfaceLanguage: "Tiếng Việt",
};

function Input({ value, onChange, type = "text", placeholder = "" }) {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      className="w-full rounded-xl border border-surface-container-high bg-surface-container-lowest px-3 py-2 text-[13px] text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20"
    />
  );
}

function Field({ label, children, hint }) {
  return (
    <label className="flex flex-col gap-1.5 text-left">
      <span className="text-[12px] font-semibold text-on-surface">{label}</span>
      {children}
      {hint && (
        <small className="text-[11px] text-on-surface-variant">{hint}</small>
      )}
    </label>
  );
}

function Select({ value, onChange, children }) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full rounded-xl border border-surface-container-high bg-surface-container-lowest px-3 py-2 text-[13px] text-on-surface outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
    >
      {children}
    </select>
  );
}

function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      className={`settings-switch relative flex h-5 w-10 shrink-0 items-center rounded-full p-0.5 transition-colors ${checked ? "bg-[#2563eb]" : "bg-slate-300"}`}
      onClick={() => onChange(!checked)}
      aria-label={label}
      aria-pressed={checked}
    >
      <span
        className={`block h-4 w-4 rounded-full bg-white shadow-sm transition-transform ${checked ? "translate-x-5" : "translate-x-0"}`}
      />
    </button>
  );
}

function ToggleRow({ icon, title, description, checked, onChange }) {
  return (
    <div className="modal-toggle-row grid min-w-0 grid-cols-[2.25rem_minmax(0,1fr)_2.5rem] items-center gap-3 border-b border-surface-container-high/40 py-3 last:border-0">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-container/10 text-primary">
        <Icon name={icon} size={18} />
      </span>
      <div className="min-w-0 flex-1 text-left">
        <p className="text-[13px] font-semibold text-on-surface">{title}</p>
        <p className="mt-0.5 text-[11px] leading-relaxed text-on-surface-variant">
          {description}
        </p>
      </div>
      <span className="flex w-10 shrink-0 -translate-x-2 justify-end">
        <Toggle checked={checked} onChange={onChange} label={title} />
      </span>
    </div>
  );
}

function Segmented({ value, onChange, options }) {
  return (
    <div className="grid grid-cols-3 gap-1 rounded-xl bg-surface-container-low p-1">
      {options.map(([key, label]) => (
        <button
          type="button"
          key={key}
          onClick={() => onChange(key)}
          className={`rounded-lg px-2 py-2 text-[12px] font-semibold transition ${value === key ? "bg-surface-container-lowest text-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface"}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

function ProfileTab({ draft, update }) {
  const handleAvatar = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => update("avatar", reader.result);
    reader.readAsDataURL(file);
  };
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center gap-4 rounded-2xl bg-surface-container-low p-4">
        <div className="relative">
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-primary text-on-primary text-2xl font-bold">
            {draft.avatar ? (
              <img
                src={draft.avatar}
                alt="Avatar"
                className="h-full w-full object-cover"
              />
            ) : (
              <Icon name="person" size={34} />
            )}
          </div>
          <label
            title="Đổi ảnh đại diện"
            className="absolute -bottom-1 -right-1 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-surface-container-low bg-primary text-on-primary shadow-sm transition hover:bg-primary-container"
          >
            <Icon name="photo_camera" size={16} />
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatar}
            />
          </label>
        </div>
        <div className="min-w-0 text-left">
          <h4 className="text-base font-bold text-on-surface">
            {draft.name || "Sinh viên"}
          </h4>
          <p className="mt-1 truncate text-[12px] text-on-surface-variant">
            {draft.email} · EIU
          </p>
          <span className="mt-2 inline-flex rounded-full bg-primary-fixed px-2 py-0.5 text-[10px] font-bold text-on-primary-fixed-variant">
            STUDENT
          </span>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Họ tên">
          <Input
            value={draft.name}
            onChange={(value) => update("name", value)}
            placeholder="Nguyễn Văn A"
          />
        </Field>
        <Field label="Ngành học / Khóa">
          <Input
            value={draft.major}
            onChange={(value) => update("major", value)}
          />
        </Field>
        <Field label="Mục tiêu học tập">
          <Input
            value={draft.goal}
            onChange={(value) => update("goal", value)}
          />
        </Field>
        <Field label="Môn đang ưu tiên ôn tập">
          <Select
            value={draft.priority}
            onChange={(value) => update("priority", value)}
          >
            {["OOP", "Mạng máy tính", "Giải thuật", "Cơ sở dữ liệu"].map(
              (item) => (
                <option key={item}>{item}</option>
              ),
            )}
          </Select>
        </Field>
      </div>
      <p className="rounded-xl border border-surface-container-high/50 p-3 text-[11px] text-on-surface-variant">
        <Icon
          name="info"
          size={15}
          className="mr-1 align-middle text-primary"
        />{" "}
        Gmail và trường học chỉ được quản lý bởi nhà trường.
      </p>
    </div>
  );
}

function AiTab({ draft, update }) {
  const styles = [
    [
      "socratic",
      "Socratic Mentor",
      "Đặt câu hỏi gợi mở để bạn tự khám phá bản chất.",
    ],
    [
      "direct",
      "Direct Answer",
      "Cung cấp đáp án và lời giải chi tiết ngay lập tức.",
    ],
    [
      "quiz",
      "Quiz Master",
      "Chỉ đặt câu hỏi để kiểm tra, không giải thích đáp án.",
    ],
  ];
  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-3 md:grid-cols-3">
        {styles.map(([key, title, description]) => (
          <button
            type="button"
            key={key}
            onClick={() => update("aiStyle", key)}
            className={`rounded-2xl border p-4 text-left transition ${draft.aiStyle === key ? "border-primary bg-primary-container/10 ring-2 ring-primary/20" : "border-surface-container-high bg-surface-container-low hover:border-primary/40"}`}
          >
            <div className="mb-2 flex items-center justify-between">
              <strong className="text-[13px] text-on-surface">{title}</strong>
              {draft.aiStyle === key && (
                <Icon name="check_circle" size={17} className="text-primary" />
              )}
            </div>
            <p className="text-[11px] leading-relaxed text-on-surface-variant">
              {description}
            </p>
          </button>
        ))}
      </div>
      <Field label="Độ khó gợi ý">
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-on-surface-variant">
            Dễ theo dõi
          </span>
          <input
            type="range"
            min="1"
            max="3"
            value={draft.aiDifficulty}
            onChange={(event) =>
              update("aiDifficulty", Number(event.target.value))
            }
            className="w-full accent-primary"
          />
          <span className="text-[11px] text-on-surface-variant">
            Thử thách cao
          </span>
        </div>
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Ngôn ngữ phản hồi">
          <Select
            value={draft.responseLanguage}
            onChange={(value) => update("responseLanguage", value)}
          >
            {["Tiếng Việt", "English", "Song ngữ"].map((item) => (
              <option key={item}>{item}</option>
            ))}
          </Select>
        </Field>
        <Field label="Độ dài câu trả lời">
          <Segmented
            value={draft.responseLength}
            onChange={(value) => update("responseLength", value)}
            options={[
              ["short", "Ngắn gọn"],
              ["long", "Chi tiết"],
              ["auto", "Tự động"],
            ]}
          />
        </Field>
      </div>
      <ToggleRow
        icon="history"
        title="Chỉ ôn lại câu đã từng làm sai"
        description="CTT AI sẽ ưu tiên những câu hỏi bạn chưa trả lời chính xác."
        checked={draft.wrongOnly}
        onChange={(value) => update("wrongOnly", value)}
      />
    </div>
  );
}

function NotificationTab({ draft, update }) {
  const toggleChannel = (channel) =>
    update(
      "channels",
      draft.channels.includes(channel)
        ? draft.channels.filter((item) => item !== channel)
        : [...draft.channels, channel],
    );
  return (
    <div className="flex flex-col gap-4">
      <ToggleRow
        icon="alarm"
        title="Nhắc nhở phiên ôn tập AI trước 15 phút"
        description="Gửi thông báo đến thiết bị của bạn."
        checked={draft.remindersEnabled}
        onChange={(value) => update("remindersEnabled", value)}
      />
      <ToggleRow
        icon="event"
        title="Tự động đồng bộ Google Calendar"
        description="Chèn các buổi Spaced Repetition vào lịch cá nhân."
        checked={draft.googleCalendarSync}
        onChange={(value) => update("googleCalendarSync", value)}
      />
      <Field label="Kênh nhận thông báo">
        <div className="flex flex-wrap gap-2">
          {["Push", "Email", "Zalo"].map((channel) => (
            <button
              type="button"
              key={channel}
              onClick={() => toggleChannel(channel)}
              className={`rounded-full border px-3 py-1.5 text-[11px] font-semibold ${draft.channels.includes(channel) ? "border-primary bg-primary-container/10 text-primary" : "border-surface-container-high text-on-surface-variant"}`}
            >
              {draft.channels.includes(channel) && "✓ "}
              {channel}
            </button>
          ))}
        </div>
      </Field>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Không làm phiền từ">
          <Input
            type="time"
            value={draft.quietFrom}
            onChange={(value) => update("quietFrom", value)}
          />
        </Field>
        <Field label="Không làm phiền đến">
          <Input
            type="time"
            value={draft.quietTo}
            onChange={(value) => update("quietTo", value)}
          />
        </Field>
      </div>
      <Field label="Tần suất ôn tập Spaced Repetition">
        <Select
          value={draft.repetition}
          onChange={(value) => update("repetition", value)}
        >
          {["Mặc định", "Dày hơn", "Thưa hơn"].map((item) => (
            <option key={item}>{item}</option>
          ))}
        </Select>
      </Field>
    </div>
  );
}

function AppearanceTab({ draft, update }) {
  return (
    <div className="flex flex-col gap-4">
      <Field label="Cỡ chữ">
        <Segmented
          value={draft.fontSize}
          onChange={(value) => update("fontSize", value)}
          options={[
            ["small", "Nhỏ"],
            ["medium", "Vừa"],
            ["large", "Lớn"],
          ]}
        />
      </Field>
      <Field label="Mật độ hiển thị">
        <Segmented
          value={draft.density}
          onChange={(value) => update("density", value)}
          options={[
            ["compact", "Compact"],
            ["comfortable", "Comfortable"],
            ["roomy", "Roomy"],
          ]}
        />
      </Field>
      <Field label="Ngôn ngữ giao diện">
        <Select
          value={draft.interfaceLanguage}
          onChange={(value) => update("interfaceLanguage", value)}
        >
          <option>Tiếng Việt</option>
          <option>English</option>
        </Select>
      </Field>
    </div>
  );
}

function PrivacyTab({ notify }) {
  const exportData = () => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(
      new Blob([JSON.stringify(draft, null, 2)], { type: "application/json" }),
    );
    link.download = "hoc-cung-ctt-data.json";
    link.click();
    URL.revokeObjectURL(link.href);
    notify("Đã xuất dữ liệu học tập.");
  };
  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl border border-surface-container-high p-4 text-left">
        <h4 className="text-[13px] font-bold text-on-surface">
          Dữ liệu học tập
        </h4>
        <p className="mt-1 text-[11px] text-on-surface-variant">
          Tải xuống bản sao các tùy chọn và dữ liệu học tập của bạn.
        </p>
        <Button
          variant="outline"
          size="sm"
          className="mt-3"
          icon="download"
          onClick={exportData}
        >
          Xuất dữ liệu học tập
        </Button>
      </div>
      <div className="rounded-2xl border border-error/30 bg-error-container/20 p-4 text-left">
        <h4 className="text-[13px] font-bold text-on-surface">
          Lịch sử hội thoại AI
        </h4>
        <p className="mt-1 text-[11px] text-on-surface-variant">
          Xóa toàn bộ lịch sử trò chuyện với CTT AI trên thiết bị này.
        </p>
        <Button
          variant="error"
          size="sm"
          className="mt-3"
          icon="delete"
          onClick={() =>
            window.confirm("Bạn có chắc muốn xóa lịch sử hội thoại với AI?") &&
            notify("Đã xóa lịch sử hội thoại.")
          }
        >
          Xóa lịch sử hội thoại với AI
        </Button>
      </div>
    </div>
  );
}

function SecurityTab({ draft, update, notify }) {
  const [changePasswordOpen, setChangePasswordOpen] = useState(false);
  const [passwordForm, setPasswordForm] = useState({
    current: "",
    next: "",
    confirm: "",
  });

  const updatePassword = (key, value) => {
    setPasswordForm((current) => ({ ...current, [key]: value }));
  };

  const handlePasswordSubmit = () => {
    if (!passwordForm.current || !passwordForm.next || !passwordForm.confirm) {
      notify("Vui lòng nhập đầy đủ thông tin mật khẩu.");
      return;
    }
    if (passwordForm.next !== passwordForm.confirm) {
      notify("Mật khẩu mới và xác nhận mật khẩu không trùng nhau.");
      return;
    }
    setPasswordForm({ current: "", next: "", confirm: "" });
    setChangePasswordOpen(false);
    notify("Đã cập nhật mật khẩu thành công.");
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Gmail">
          <Input
            type="email"
            value={draft.email}
            onChange={(value) => update("email", value)}
            placeholder="ten@example.com"
          />
        </Field>
        <Field label="Số điện thoại">
          <Input
            type="tel"
            value={draft.phone}
            onChange={(value) => update("phone", value)}
            placeholder="0901 234 567"
          />
        </Field>
        <Field label="Tên người dùng">
          <Input
            value={draft.username}
            onChange={(value) => update("username", value)}
            placeholder="ten.nguoi.dung"
          />
        </Field>
      </div>
      <div className="rounded-2xl border border-surface-container-high p-4 text-left">
        <div className="flex items-center justify-between gap-3">
          <div>
            <h4 className="text-[13px] font-bold text-on-surface">Mật khẩu</h4>
            <p className="mt-1 text-[11px] text-on-surface-variant">
              Cập nhật mật khẩu để bảo vệ tài khoản.
            </p>
          </div>
          <Button
            variant="outline"
            size="sm"
            icon="key"
            onClick={() => setChangePasswordOpen(true)}
          >
            Đổi mật khẩu
          </Button>
        </div>
      </div>
      <Button
        variant="error"
        size="sm"
        icon="logout"
        onClick={() => notify("Đã đăng xuất khỏi tất cả thiết bị.")}
      >
        Đăng xuất khỏi tất cả thiết bị
      </Button>

      <Modal
        isOpen={changePasswordOpen}
        onClose={() => setChangePasswordOpen(false)}
        title="Đổi mật khẩu"
        icon="key"
        maxWidth="max-w-md"
      >
        <div className="flex flex-col gap-4">
          <Field label="Mật khẩu hiện tại">
            <Input
              type="password"
              value={passwordForm.current}
              onChange={(value) => updatePassword("current", value)}
              placeholder="Nhập mật khẩu hiện tại"
            />
          </Field>
          <Field label="Mật khẩu mới">
            <Input
              type="password"
              value={passwordForm.next}
              onChange={(value) => updatePassword("next", value)}
              placeholder="Nhập mật khẩu mới"
            />
          </Field>
          <Field label="Xác nhận lại mật khẩu">
            <Input
              type="password"
              value={passwordForm.confirm}
              onChange={(value) => updatePassword("confirm", value)}
              placeholder="Nhập lại mật khẩu mới"
            />
          </Field>
          <Button
            variant="error"
            size="md"
            icon="check"
            onClick={handlePasswordSubmit}
          >
            Xác nhận
          </Button>
        </div>
      </Modal>
    </div>
  );
}

export default function SettingsModal({ isOpen, onClose }) {
  const { user, setUser } = useApp();
  const [activeTab, setActiveTab] = useState("profile");
  const [draft, setDraft] = useState({ ...DEFAULT_DRAFT, name: user.name });
  const [savedNotice, setSavedNotice] = useState(false);
  const [notice, setNotice] = useState("");

  useEffect(() => {
    if (isOpen) {
      setActiveTab("profile");
      setDraft({ ...DEFAULT_DRAFT, name: user.name });
      setSavedNotice(false);
      setNotice("");
    }
  }, [isOpen]);
  const update = (key, value) =>
    setDraft((current) => ({ ...current, [key]: value }));
  const notify = (message) => {
    setNotice(message);
    window.setTimeout(() => setNotice(""), 2400);
  };
  const handleSave = () => {
    setUser((current) => ({ ...current, name: draft.name || current.name }));
    setSavedNotice(true);
    setNotice("Đã lưu thành công các tùy chọn!");
    window.setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 1200);
  };
  const tabDescription = {
    profile: "Quản lý thông tin cá nhân và mục tiêu học tập.",
    ai: "Điều chỉnh cách CTT AI hỗ trợ quá trình học tập.",
    notifications: "Chọn cách bạn muốn nhận nhắc nhở và lịch học.",
    appearance: "Cá nhân hóa trải nghiệm hiển thị của nền tảng.",
    privacy: "Kiểm soát dữ liệu học tập và quyền chia sẻ.",
    security: "Bảo vệ tài khoản và các phương thức đăng nhập.",
  };
  const tab = TABS.find(([id]) => id === activeTab);
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Cài đặt hệ thống & Hồ sơ sinh viên"
      icon="settings"
      maxWidth="max-w-[calc(100vw-2rem)] lg:max-w-[72vw]"
    >
      <div className="flex h-[60vh] max-h-[60vh] min-h-0 max-w-full min-w-0 flex-row gap-3 overflow-hidden text-left sm:gap-4">
        <nav
          className="flex h-fit max-h-[455px] w-32 shrink-0 flex-col gap-1 overflow-y-auto rounded-2xl border border-surface-container-high/60 bg-white p-2 shadow-lg shadow-slate-900/10 sm:w-56 sm:p-3"
          aria-label="Danh mục cài đặt"
        >
          {TABS.map(([id, label, icon]) => (
            <button
              type="button"
              key={id}
              onClick={() => setActiveTab(id)}
              className={`flex min-w-0 shrink-0 items-center gap-2 rounded-xl px-2 py-2.5 text-left text-[11px] font-semibold transition sm:gap-2.5 sm:px-3 sm:text-[12px] ${activeTab === id ? "bg-[#2563eb] text-white" : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"}`}
            >
              <Icon name={icon} size={18} />
              <span className="min-w-0 truncate">{label}</span>
            </button>
          ))}
          <button
            type="button"
            onClick={() => window.location.assign("/admin")}
            className="flex min-w-0 shrink-0 items-center gap-2 rounded-xl px-2 py-2.5 text-left text-[11px] font-semibold text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 sm:gap-2.5 sm:px-3 sm:text-[12px]"
          >
            <Icon name="admin_panel_settings" size={18} />
            <span className="min-w-0 truncate">Admin Manager</span>
          </button>
        </nav>
        <section className="min-w-0 max-w-full flex-1 overflow-x-hidden overflow-y-auto pb-4 pr-2">
          <div className="mb-5">
            <p className="text-[10px] font-bold uppercase tracking-wider text-primary">
              {tab?.[1]}
            </p>
            <h2 className="mt-1 text-lg font-bold text-on-surface">
              {tab?.[1]}
            </h2>
            <p className="mt-1 text-[12px] text-on-surface-variant">
              {tabDescription[activeTab]}
            </p>
          </div>
          {activeTab === "profile" && (
            <ProfileTab draft={draft} update={update} />
          )}
          {activeTab === "ai" && <AiTab draft={draft} update={update} />}
          {activeTab === "notifications" && (
            <NotificationTab draft={draft} update={update} />
          )}
          {activeTab === "appearance" && (
            <AppearanceTab draft={draft} update={update} />
          )}
          {activeTab === "privacy" && <PrivacyTab notify={notify} />}
          {activeTab === "security" && (
            <SecurityTab draft={draft} update={update} notify={notify} />
          )}
        </section>
      </div>
      <div className="mt-5 flex min-w-0 flex-wrap items-center justify-end gap-2 border-t border-surface-container-high/60 pt-4">
        {(savedNotice || notice) && (
          <span className="mr-auto min-w-0 truncate text-[11px] text-secondary">
            {notice || "Đã lưu thay đổi"}
          </span>
        )}
        <Button variant="surface" size="md" onClick={onClose}>
          Đóng
        </Button>
        <Button variant="primary" size="md" icon="save" onClick={handleSave}>
          Lưu thay đổi
        </Button>
      </div>
    </Modal>
  );
}
