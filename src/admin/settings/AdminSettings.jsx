import { useState } from "react";
import "./AdminSettings.css";

const SETTING_TABS = [
  { id: "general", label: "Chung", icon: "⚙" },
  { id: "ai", label: "AI", icon: "✦" },
  { id: "documents", label: "Tài liệu", icon: "▣" },
  { id: "access", label: "Quyền & bảo mật", icon: "♙" },
  { id: "notifications", label: "Thông báo", icon: "♢" },
];

const INITIAL_SETTINGS = {
  systemName: "Học Cùng CTT",
  logoUrl: "",
  logoName: "",
  description:
    "Học Cùng CTT - Nền tảng luyện tập thông minh giúp sinh viên học tập hiệu quả hơn với sự hỗ trợ của AI.",
  language: "Tiếng Việt",
  timezone: "GMT+7 (Việt Nam)",
  questionCount: "10",
  questionTypes: { multiple: true, trueFalse: true, fillBlank: true },
  fileTypes: { pdf: true, docx: true, pptx: true },
  maxFileSize: "20",
  maxFiles: "5",
  permissions: {
    student: { upload: true, create: true, practice: true, results: true },
    admin: { students: true, documents: true, questions: true, settings: true },
  },
  notifications: { complete: true, failed: true, system: true },
};

const TAB_FIELDS = {
  general: [
    "systemName",
    "logoUrl",
    "logoName",
    "description",
    "language",
    "timezone",
  ],
  ai: ["questionCount", "questionTypes"],
  documents: ["fileTypes", "maxFileSize", "maxFiles"],
  access: ["permissions"],
  notifications: ["notifications"],
};

function cloneSettings(value) {
  return JSON.parse(JSON.stringify(value));
}

function Toggle({ checked, onChange, label }) {
  return (
    <button
      type="button"
      className={`settings-toggle ${checked ? "is-on" : ""}`}
      onClick={() => onChange(!checked)}
      aria-label={label}
      aria-pressed={checked}
    >
      <span />
    </button>
  );
}

function Field({ label, children, hint }) {
  return (
    <label className="settings-field">
      <span className="settings-label">{label}</span>
      {children}
      {hint && <small>{hint}</small>}
    </label>
  );
}

function CheckboxGroup({ items, values, onChange }) {
  return (
    <div className="settings-check-grid">
      {items.map(([key, label]) => (
        <label className="settings-check" key={key}>
          <input
            type="checkbox"
            checked={values[key]}
            onChange={(event) => onChange(key, event.target.checked)}
          />
          <span>{label}</span>
        </label>
      ))}
    </div>
  );
}

function SettingCard({ title, children, className = "" }) {
  return (
    <section className={`settings-card ${className}`}>
      {title && <h3>{title}</h3>}
      {children}
    </section>
  );
}

function FormActions({ onCancel, onSave, saved, error }) {
  return (
    <div className="settings-actions">
      {saved && <span className="settings-saved">Đã lưu thay đổi</span>}
      {error && <span className="settings-error">{error}</span>}
      <button
        type="button"
        className="settings-button secondary"
        onClick={onCancel}
      >
        Hủy
      </button>
      <button
        type="button"
        className="settings-button primary"
        onClick={onSave}
      >
        Lưu thay đổi
      </button>
    </div>
  );
}

function GeneralSettings({
  settings,
  update,
  onLogoChange,
  onCancel,
  onSave,
  saved,
  error,
}) {
  return (
    <>
      <SettingCard title="Thông tin hệ thống">
        <div className="settings-form">
          <Field label="Tên hệ thống">
            <input
              value={settings.systemName}
              onChange={(event) => update("systemName", event.target.value)}
            />
          </Field>
          <Field
            label="Logo"
            hint="Định dạng PNG, JPG, kích thước đề xuất 200x200px."
          >
            <div className="logo-field">
              <div className="logo-preview">
                {settings.logoUrl ? (
                  <img src={settings.logoUrl} alt="Logo hệ thống" />
                ) : (
                  "🎓"
                )}
              </div>
              <label className="settings-button secondary upload-button">
                Chọn ảnh
                <input
                  type="file"
                  accept="image/png,image/jpeg"
                  onChange={onLogoChange}
                />
              </label>
              {settings.logoName && (
                <span className="logo-name">{settings.logoName}</span>
              )}
            </div>
          </Field>
          <Field label="Mô tả hệ thống">
            <textarea
              rows="4"
              value={settings.description}
              onChange={(event) => update("description", event.target.value)}
            />
          </Field>
          <div className="settings-two-columns">
            <Field label="Ngôn ngữ">
              <select
                value={settings.language}
                onChange={(event) => update("language", event.target.value)}
              >
                <option>Tiếng Việt</option>
                <option>English</option>
              </select>
            </Field>
            <Field label="Múi giờ">
              <select
                value={settings.timezone}
                onChange={(event) => update("timezone", event.target.value)}
              >
                <option>GMT+7 (Việt Nam)</option>
                <option>GMT+8 (Singapore)</option>
              </select>
            </Field>
          </div>
        </div>
        <FormActions
          onCancel={onCancel}
          onSave={onSave}
          saved={saved}
          error={error}
        />
      </SettingCard>
    </>
  );
}

function AISettings({
  settings,
  updateGroup,
  update,
  onCancel,
  onSave,
  saved,
  error,
}) {
  return (
    <SettingCard title="Cấu hình tạo câu hỏi">
      <div className="settings-form">
        <Field label="Số câu hỏi mặc định">
          <select
            value={settings.questionCount}
            onChange={(event) => update("questionCount", event.target.value)}
          >
            {[5, 10, 15, 20, 30].map((count) => (
              <option key={count}>{count}</option>
            ))}
          </select>
        </Field>
        <div className="settings-field">
          <span className="settings-label">Loại câu hỏi</span>
          <CheckboxGroup
            items={[
              ["multiple", "Trắc nghiệm"],
              ["trueFalse", "Đúng / Sai"],
              ["fillBlank", "Điền khuyết"],
            ]}
            values={settings.questionTypes}
            onChange={(key, value) => updateGroup("questionTypes", key, value)}
          />
        </div>
      </div>
      <FormActions
        onCancel={onCancel}
        onSave={onSave}
        saved={saved}
        error={error}
      />
    </SettingCard>
  );
}

function SettingToggle({ title, description, checked, onChange, icon = "✦" }) {
  return (
    <div className="settings-toggle-row">
      <span className="settings-row-icon">{icon}</span>
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      <Toggle checked={checked} onChange={onChange} label={title} />
    </div>
  );
}

function DocumentSettings({
  settings,
  updateGroup,
  update,
  onCancel,
  onSave,
  saved,
  error,
}) {
  return (
    <SettingCard title="Quy trình upload">
      <div className="settings-form">
        <div className="settings-field">
          <span className="settings-label">Định dạng cho phép</span>
          <CheckboxGroup
            items={[
              ["pdf", "PDF"],
              ["docx", "DOCX"],
              ["pptx", "PPTX"],
            ]}
            values={settings.fileTypes}
            onChange={(key, value) => updateGroup("fileTypes", key, value)}
          />
        </div>
        <div className="settings-two-columns">
          <Field label="Dung lượng tối đa">
            <div className="input-with-unit">
              <input
                type="number"
                min="1"
                value={settings.maxFileSize}
                onChange={(event) => update("maxFileSize", event.target.value)}
              />
              <span>MB</span>
            </div>
          </Field>
          <Field label="Số file tối đa mỗi lần upload">
            <input
              type="number"
              min="1"
              value={settings.maxFiles}
              onChange={(event) => update("maxFiles", event.target.value)}
            />
          </Field>
        </div>
      </div>
      <FormActions
        onCancel={onCancel}
        onSave={onSave}
        saved={saved}
        error={error}
      />
    </SettingCard>
  );
}

function AccessSettings({
  settings,
  updatePermission,
  onCancel,
  onSave,
  saved,
  error,
}) {
  const studentItems = [
    ["upload", "Upload tài liệu"],
    ["create", "Tạo câu hỏi"],
    ["practice", "Luyện tập"],
    ["results", "Xem kết quả"],
  ];
  return (
    <>
      <div className="settings-access-grid">
        <SettingCard
          title={
            <>
              <span className="role-icon">♙</span>Sinh viên
            </>
          }
        >
          <CheckboxGroup
            items={studentItems}
            values={settings.permissions.student}
            onChange={(key, value) => updatePermission("student", key, value)}
          />
        </SettingCard>
      </div>
      <SettingCard title="Vai trò người dùng" className="roles-card">
        <div className="role-tags">
          <span>ADMIN</span>
          <span>MODERATOR</span>
          <span>STUDENT</span>
        </div>
        <FormActions
          onCancel={onCancel}
          onSave={onSave}
          saved={saved}
          error={error}
        />
      </SettingCard>
    </>
  );
}

function NotificationSettings({
  settings,
  updateGroup,
  onCancel,
  onSave,
  saved,
  error,
}) {
  const notifications = [
    [
      "complete",
      "Thông báo khi cập nhật dữ liệu sinh viên mới",
      "Nhận thông báo khi AI hoàn tất xử lý tài liệu.",
      "✓",
    ],
    [
      "failed",
      "Thông báo khi quá tải sever",
      "Nhận thông báo khi hệ thống không thể xử lý tài liệu.",
      "!",
    ],
    [
      "failed",
      "Thông báo kiểm tra gian lận từ người dùng",
      "Nhận các thông báo quan trọng liên quan đến hệ thống.",
      "!",
    ],
  ];
  return (
    <SettingCard title="Thông báo Admin">
      <div className="notification-list">
        {notifications.map(([key, title, description, icon]) => (
          <SettingToggle
            key={key}
            title={title}
            description={description}
            checked={settings.notifications[key]}
            onChange={(value) => updateGroup("notifications", key, value)}
            icon={icon}
          />
        ))}
      </div>
      <FormActions
        onCancel={onCancel}
        onSave={onSave}
        saved={saved}
        error={error}
      />
    </SettingCard>
  );
}

export default function AdminSettings({
  activeSetting = "general",
  onChangeSetting,
}) {
  const [settings, setSettings] = useState(INITIAL_SETTINGS);
  const [savedSettings, setSavedSettings] = useState(INITIAL_SETTINGS);
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState("");
  const [toast, setToast] = useState("");
  const [settingsNavOpen, setSettingsNavOpen] = useState(false);

  const clearStatus = () => {
    setSaved(false);
    setError("");
  };
  const update = (key, value) => {
    clearStatus();
    setSettings((current) => ({ ...current, [key]: value }));
  };
  const updateGroup = (group, key, value) => {
    clearStatus();
    setSettings((current) => ({
      ...current,
      [group]: { ...current[group], [key]: value },
    }));
  };
  const updatePermission = (role, key, value) => {
    clearStatus();
    setSettings((current) => ({
      ...current,
      permissions: {
        ...current.permissions,
        [role]: { ...current.permissions[role], [key]: value },
      },
    }));
  };
  const handleLogoChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (
      !file.type.match(/^image\/(png|jpeg)$/) ||
      file.size > 2 * 1024 * 1024
    ) {
      setError("Logo phải là PNG/JPG và có dung lượng tối đa 2MB.");
      event.target.value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () =>
      setSettings((current) => ({
        ...current,
        logoUrl: reader.result,
        logoName: file.name,
      }));
    reader.readAsDataURL(file);
    clearStatus();
  };
  const validate = () => {
    if (activeSetting === "general" && !settings.systemName.trim())
      return "Tên hệ thống không được để trống.";
    if (
      activeSetting === "ai" &&
      !Object.values(settings.questionTypes).some(Boolean)
    )
      return "Hãy chọn ít nhất một loại câu hỏi.";
    if (
      activeSetting === "documents" &&
      !Object.values(settings.fileTypes).some(Boolean)
    )
      return "Hãy chọn ít nhất một định dạng tài liệu.";
    if (
      activeSetting === "documents" &&
      (Number(settings.maxFileSize) < 1 || Number(settings.maxFiles) < 1)
    )
      return "Dung lượng và số file phải lớn hơn 0.";
    return "";
  };
  const save = () => {
    const validationError = validate();
    if (validationError) {
      setSaved(false);
      setError(validationError);
      return;
    }
    setSavedSettings(cloneSettings(settings));
    setError("");
    setSaved(true);
    setToast("Đã lưu thay đổi");
    window.setTimeout(() => setToast(""), 2200);
  };
  const cancel = () => {
    const fields = TAB_FIELDS[activeSetting];
    setSettings((current) =>
      fields.reduce(
        (next, field) => ({
          ...next,
          [field]: cloneSettings(savedSettings[field]),
        }),
        current,
      ),
    );
    setSaved(false);
    setError("");
  };
  const tab =
    SETTING_TABS.find((item) => item.id === activeSetting) || SETTING_TABS[0];

  const selectSetting = (setting) => {
    onChangeSetting?.(setting);
    setSettingsNavOpen(false);
  };

  return (
    <div className="admin-settings">
      <div className="settings-mobile-nav">
        <button
          type="button"
          className="settings-mobile-nav-toggle"
          onClick={() => setSettingsNavOpen((open) => !open)}
          aria-expanded={settingsNavOpen}
          aria-label="Mở menu cài đặt"
        >
          <span className="settings-menu-icon">☰</span>
          <span>{tab.label}</span>
        </button>
        {settingsNavOpen && (
          <div className="settings-mobile-menu">
            {SETTING_TABS.map((setting) => (
              <button
                type="button"
                key={setting.id}
                className={setting.id === activeSetting ? "active" : ""}
                onClick={() => selectSetting(setting.id)}
              >
                <span>{setting.icon}</span>
                {setting.label}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="settings-heading">
        <div>
          <p className="settings-eyebrow">ADMIN / CÀI ĐẶT</p>
          <h1>Cài đặt</h1>
          <p>Quản lý và cấu hình các thiết lập của hệ thống.</p>
        </div>
      </div>
      <div className="settings-content">
        <div className="settings-section-heading">
          <div>
            <h2>
              {tab.label === "Chung"
                ? "Cài đặt chung"
                : `Cài đặt ${tab.label.toLowerCase()}`}
            </h2>
            <p>
              {tab.id === "general"
                ? "Tùy chỉnh các thông tin cơ bản của hệ thống."
                : tab.id === "ai"
                  ? "Cấu hình cách hệ thống AI tạo câu hỏi cho sinh viên."
                  : tab.id === "documents"
                    ? "Cấu hình định dạng và dung lượng tài liệu được phép upload."
                    : tab.id === "access"
                      ? "Quản lý quyền của từng loại người dùng trong hệ thống."
                      : "Chọn những thông báo mà Admin muốn nhận."}
            </p>
          </div>
        </div>
        {tab.id === "general" && (
          <GeneralSettings
            settings={settings}
            update={update}
            onLogoChange={handleLogoChange}
            onCancel={cancel}
            onSave={save}
            saved={saved}
            error={error}
          />
        )}
        {tab.id === "ai" && (
          <AISettings
            settings={settings}
            update={update}
            updateGroup={updateGroup}
            onCancel={cancel}
            onSave={save}
            saved={saved}
            error={error}
          />
        )}
        {tab.id === "documents" && (
          <DocumentSettings
            settings={settings}
            update={update}
            updateGroup={updateGroup}
            onCancel={cancel}
            onSave={save}
            saved={saved}
            error={error}
          />
        )}
        {tab.id === "access" && (
          <AccessSettings
            settings={settings}
            updatePermission={updatePermission}
            onCancel={cancel}
            onSave={save}
            saved={saved}
            error={error}
          />
        )}
        {tab.id === "notifications" && (
          <NotificationSettings
            settings={settings}
            updateGroup={updateGroup}
            onCancel={cancel}
            onSave={save}
            saved={saved}
            error={error}
          />
        )}
        {toast && (
          <div className="settings-toast" role="status">
            ✓ {toast}
          </div>
        )}
      </div>
    </div>
  );
}
