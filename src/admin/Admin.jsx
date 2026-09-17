import { useEffect, useState } from "react";
import "./dashboard.css";
import StudentModule from "./student/StudentModule";
import Documentdashboard from "./documents/Documentdashboard";
import Question from "./questions/Question";
import AdminSettings from "./settings/AdminSettings";

/* =========================
   ICONS
========================= */

const PATHS = {
  cap: (
    <>
      <path d="M22 10v6" />
      <path d="M2 10l10-5 10 5-10 5z" />
      <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </>
  ),

  home: (
    <path d="M3 9.5 12 3l9 6.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
  ),

  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    </>
  ),

  userAdd: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M19 8v6M22 11h-6" />
    </>
  ),

  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),

  file: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8M8 17h5" />
    </>
  ),

  fileMini: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
    </>
  ),

  help: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="M9.1 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" />
      <path d="M12 17h.01" />
    </>
  ),

  chartBox: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 15l3.5-4 3 2.5L17 9" />
    </>
  ),

  chartBar: (
    <>
      <path d="M3 3v18h18" />
      <rect x="7" y="12" width="3" height="6" />
      <rect x="13" y="8" width="3" height="10" />
    </>
  ),

  gear: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.2.61.75 1 1.51 1H21a2 2 0 1 1 0 4h-.09c-.76 0-1.31.39-1.51 1z" />
    </>
  ),

  logout: (
    <>
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="M16 17l5-5-5-5" />
      <path d="M21 12H9" />
    </>
  ),

  search: (
    <>
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </>
  ),

  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.7 21a2 2 0 0 1-3.4 0" />
    </>
  ),

  message: (
    <>
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.5 9.5 0 0 1-4-.9L3 21l1.9-4.2A8.2 8.2 0 0 1 3 11.5 8.5 8.5 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5Z" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" />
    </>
  ),

  chevron: <path d="m6 9 6 6 6-6" />,

  calendar: (
    <>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </>
  ),

  check: (
    <>
      <circle cx="12" cy="12" r="10" />
      <path d="m8 12 3 3 5-6" />
    </>
  ),

  bolt: <path d="M13 2 3 14h8l-1 8 10-12h-8z" />,

  spark: (
    <>
      <path d="M12 3v18M3 12h18" />
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),

  upload: (
    <>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <path d="M7 9l5-5 5 5" />
      <path d="M12 4v12" />
    </>
  ),

  arrowUp: <path d="M12 19V5M5 12l7-7 7 7" />,
};

function Icon({ name, size = 16, width = 2 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}

/* =========================
   DATA
========================= */

const NAV = [
  { id: "tong-quan", label: "Tổng quan", icon: "home" },
  { id: "sinh-vien", label: "Sinh viên", icon: "users" },
  { id: "phan-hoi", label: "Phản hồi", icon: "message" },
  { id: "tai-lieu", label: "Tài liệu", icon: "file" },
  { id: "cau-hoi", label: "Câu hỏi", icon: "help" },
  { id: "cai-dat", label: "Cài đặt", icon: "gear" },
];

const SEARCH_ITEMS = [
  { label: "Tổng quan", type: "Điều hướng", target: "tong-quan" },
  { label: "Sinh viên", type: "Điều hướng", target: "sinh-vien" },
  { label: "Tài liệu", type: "Điều hướng", target: "tai-lieu" },
  { label: "Câu hỏi", type: "Điều hướng", target: "cau-hoi" },
  { label: "Cài đặt", type: "Điều hướng", target: "cai-dat" },
  { label: "Nguyễn Minh Anh", type: "Sinh viên", target: "sinh-vien" },
  { label: "QDT_Chuy3.pdf", type: "Tài liệu", target: "tai-lieu" },
  {
    label: "Cấu trúc dữ liệu cây nhị phân",
    type: "Câu hỏi",
    target: "cau-hoi",
  },
];

const ADMIN_NOTIFICATIONS = [
  {
    id: 1,
    title: "Feedback mới từ sinh viên",
    body: "Nguyễn Minh Anh vừa gửi góp ý về chế độ ôn tập.",
    time: "5 phút trước",
    target: "phan-hoi",
    tone: "feedback",
  },
  {
    id: 2,
    title: "Tài liệu đã được xử lý",
    body: "QDT_Chuy3.pdf đã sẵn sàng để tạo câu hỏi.",
    time: "18 phút trước",
    target: "tai-lieu",
    tone: "document",
  },
  {
    id: 3,
    title: "Sinh viên mới hoạt động",
    body: "Trần Quốc Bảo vừa hoàn thành bài luyện tập.",
    time: "1 giờ trước",
    target: "sinh-vien",
    tone: "student",
  },
];

const STATS = [
  {
    label: "Tổng số sinh viên",
    value: "1,248",
    delta: "12%",
    icon: "users",
    tint: "t-blue",
  },
  {
    label: "Tổng số tài liệu",
    value: "856",
    delta: "18%",
    icon: "file",
    tint: "t-sky",
  },
  {
    label: "Tổng số câu hỏi",
    value: "12,540",
    delta: "25%",
    icon: "help",
    tint: "t-indigo",
  },
  {
    label: "Số bài đã hoàn thành",
    value: "9,320",
    delta: "20%",
    icon: "check",
    tint: "t-green",
  },
  {
    label: "Sinh viên hoạt động",
    value: "382",
    delta: "22%",
    icon: "bolt",
    tint: "t-violet",
  },
];

const ACTIVITY = [
  { day: "Thứ 2", value: 330 },
  { day: "Thứ 3", value: 248 },
  { day: "Thứ 4", value: 305 },
  { day: "Thứ 5", value: 318 },
  { day: "Thứ 6", value: 252 },
  { day: "Thứ 7", value: 283 },
  { day: "CN", value: 393 },
];

const ACTIVITY_BY_RANGE = {
  "7 ngày": ACTIVITY,
  "30 ngày": [
    { day: "Tuần 1", value: 980 },
    { day: "Tuần 2", value: 1240 },
    { day: "Tuần 3", value: 1105 },
    { day: "Tuần 4", value: 1450 },
  ],
  "90 ngày": [
    { day: "Tháng 1", value: 3820 },
    { day: "Tháng 2", value: 4260 },
    { day: "Tháng 3", value: 5180 },
  ],
};

const PROCESSING = [
  { label: "Đã xử lý", value: 734, color: "#2563eb" },
  { label: "Đang xử lý", value: 98, color: "#5eead4" },
  { label: "Lỗi", value: 22, color: "#ef4444" },
];

const STATUS = {
  done: {
    label: "Đã xử lý",
    cls: "b-done",
  },
  processing: {
    label: "Đang xử lý",
    cls: "b-proc",
  },
  error: {
    label: "Lỗi",
    cls: "b-err",
  },
};

const DOCS = [
  {
    student: "Nguyen A",
    name: "OOP.pdf",
    type: "PDF",
    time: "14/09 10:24",
    status: "done",
    questions: "25",
    color: "#3b82f6",
  },
  {
    student: "Tran B",
    name: "Chapter1.docx",
    type: "DOCX",
    time: "14/09 09:12",
    status: "processing",
    questions: "-",
    color: "#0ea5e9",
  },
  {
    student: "Le C",
    name: "SQL.pdf",
    type: "PDF",
    time: "14/09 08:37",
    status: "done",
    questions: "30",
    color: "#6366f1",
  },
  {
    student: "Phuong D",
    name: "Data Structure.pdf",
    type: "PDF",
    time: "13/09 16:20",
    status: "done",
    questions: "28",
    color: "#8b5cf6",
  },
  {
    student: "Mai N",
    name: "JavaScript.pdf",
    type: "PDF",
    time: "13/09 14:55",
    status: "error",
    questions: "0",
    color: "#d946ef",
  },
];

const FEED = [
  {
    title: "Nguyen A đã tải lên tài liệu OOP.pdf",
    sub: "Đang xử lý câu hỏi...",
    time: "2 phút",
    icon: "fileMini",
    tint: "t-blue",
  },
  {
    title: "AI đã tạo 25 câu hỏi từ OOP.pdf",
    sub: "Hoàn thành",
    time: "5 phút",
    icon: "spark",
    tint: "t-teal",
  },
  {
    title: "Tran B đã hoàn thành bài luyện tập",
    sub: "Đạt 8.5/10 điểm",
    time: "10 phút",
    icon: "check",
    tint: "t-green",
  },
  {
    title: "Le C đã tải lên tài liệu SQL.pdf",
    sub: "Đang xử lý...",
    time: "20 phút",
    icon: "fileMini",
    tint: "t-blue",
  },
  {
    title: "Phuong D đã hoàn thành bài luyện tập",
    sub: "Đạt 9.0/10 điểm",
    time: "35 phút",
    icon: "check",
    tint: "t-green",
  },
  {
    title: "Mai N đã đăng ký tài khoản",
    sub: "Sinh viên mới",
    time: "1 giờ",
    icon: "user",
    tint: "t-violet",
  },
];

const TOPICS = [
  { name: "OOP", percent: 42 },
  { name: "Data Structure", percent: 31 },
  { name: "SQL", percent: 18 },
  { name: "JavaScript", percent: 9 },
];

const QUICK = [
  {
    label: "Thêm sinh viên",
    icon: "userAdd",
    tint: "t-blue",
  },
  {
    label: "Tải tài liệu",
    icon: "upload",
    tint: "t-green",
  },
  {
    label: "Tạo câu hỏi",
    icon: "help",
    tint: "t-indigo",
  },
];

const FEEDBACKS = [
  {
    id: 1,
    student: "Nguyễn Minh Anh",
    type: "Feature request",
    rating: 5,
    content: "Mình mong muốn có thêm chế độ ôn tập theo từng chủ đề nhỏ.",
    time: "Hôm nay, 09:24",
    status: "new",
  },
  {
    id: 2,
    student: "Trần Quốc Bảo",
    type: "Bug report",
    rating: 3,
    content: "Một số câu hỏi trong bài quiz bị tải lại khi chuyển câu.",
    time: "Hôm qua, 16:40",
    status: "processing",
  },
  {
    id: 3,
    student: "Lê Hoàng Nam",
    type: "General feedback",
    rating: 4,
    content: "Giao diện dễ dùng, phần kế hoạch học tập rất hữu ích.",
    time: "12/09/2026, 11:15",
    status: "done",
  },
];

/* =========================
   COMPONENTS
========================= */

function StatCard({ label, value, delta, icon, tint }) {
  return (
    <article className="card stat">
      <span className={`ico ${tint}`}>
        <Icon name={icon} size={16} />
      </span>

      <p className="label">{label}</p>

      <p className="value">{value}</p>

      <p className="delta">
        <Icon name="arrowUp" size={11} width={2.5} />
        {delta}
      </p>

      <p className="foot">so với tuần trước</p>
    </article>
  );
}

function LineChart({ data, max = 500 }) {
  const L = 34;
  const R = 360;
  const T = 8;
  const B = 120;

  const step = (R - L) / (data.length - 1);

  const pts = data.map((item, index) => ({
    x: L + index * step,
    y: B - (item.value / max) * (B - T),
    day: item.day,
  }));

  let d = `M${pts[0].x},${pts[0].y}`;

  for (let i = 1; i < pts.length; i++) {
    const p0 = pts[i - 1];
    const p1 = pts[i];
    const h = (p1.x - p0.x) / 2;

    d += ` C${p0.x + h},${p0.y} ${p1.x - h},${p1.y} ${p1.x},${p1.y}`;
  }

  const yTicks = [0, max / 2, max];

  return (
    <svg
      className="chart"
      viewBox="0 0 390 145"
      preserveAspectRatio="none"
      role="img"
      aria-label="Biểu đồ hoạt động sinh viên"
    >
      <defs>
        <linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3b82f6" stopOpacity=".22" />
          <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
        </linearGradient>
      </defs>

      <g stroke="#eef2f7" strokeWidth="1">
        {yTicks.map((value) => {
          const y = B - (value / max) * (B - T);

          return <line key={`h${value}`} x1={L} y1={y} x2={R} y2={y} />;
        })}
      </g>

      <g fill="#94a3b8" fontSize="9" textAnchor="end">
        {yTicks.map((value) => (
          <text key={value} x={L - 6} y={B - (value / max) * (B - T) + 3}>
            {value}
          </text>
        ))}
      </g>

      <path fill="url(#fade)" d={`${d} L${R},${B} L${L},${B} Z`} />

      <path
        fill="none"
        stroke="#3b82f6"
        strokeWidth="2"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        d={d}
      />

      <g fill="#3b82f6">
        {pts.map((point) => (
          <circle key={`c${point.x}`} cx={point.x} cy={point.y} r="2.6" />
        ))}
      </g>

      <g fill="#94a3b8" fontSize="9" textAnchor="middle">
        {pts.map((point) => (
          <text key={`t${point.x}`} x={point.x} y={140}>
            {point.day}
          </text>
        ))}
      </g>
    </svg>
  );
}

function Donut({ percent = 86 }) {
  const r = 44;
  const circumference = 2 * Math.PI * r;

  return (
    <div className="donut-wrap">
      <svg
        width="104"
        height="104"
        viewBox="0 0 104 104"
        style={{
          transform: "rotate(-90deg)",
        }}
      >
        <circle
          cx="52"
          cy="52"
          r={r}
          fill="none"
          stroke="#dbeafe"
          strokeWidth="11"
        />

        <circle
          cx="52"
          cy="52"
          r={r}
          fill="none"
          stroke="#2563eb"
          strokeWidth="11"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * (1 - percent / 100)}
        />
      </svg>

      <div className="donut-center">
        <b>{percent}%</b>
        <small>Đã xử lý</small>
      </div>
    </div>
  );
}

function FeedbackModule() {
  const statusLabels = {
    new: "Mới",
    processing: "Đang xử lý",
    done: "Đã xử lý",
  };

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Phản hồi</h1>
          <p>Quản lý những phản hồi đã gửi từ sinh viên.</p>
        </div>
        <p className="date">
          <Icon name="message" size={13} width={1.8} />
          {FEEDBACKS.length} phản hồi
        </p>
      </div>

      <section className="feedback-list">
        {FEEDBACKS.map((feedback) => (
          <article className="card feedback-item" key={feedback.id}>
            <div className="feedback-item-head">
              <div>
                <h2>{feedback.student}</h2>
                <p>
                  {feedback.type} · {feedback.time}
                </p>
              </div>
              <span className={`feedback-status ${feedback.status}`}>
                {statusLabels[feedback.status]}
              </span>
            </div>

            <div
              className="feedback-rating"
              aria-label={`${feedback.rating} trên 5 sao`}
            >
              {"★".repeat(feedback.rating)}
              <span>{"★".repeat(5 - feedback.rating)}</span>
            </div>
            <p className="feedback-content">{feedback.content}</p>
          </article>
        ))}
      </section>
    </>
  );
}

/* =========================
   DASHBOARD
========================= */

function formatDashboardDate() {
  const date = new Date();
  const weekday = new Intl.DateTimeFormat("vi-VN", {
    weekday: "long",
  }).format(date);
  const month = new Intl.DateTimeFormat("vi-VN", {
    month: "long",
  }).format(date);

  const cleanWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);
  const cleanMonth = month.charAt(0).toUpperCase() + month.slice(1);

  return `${cleanWeekday}, ${date.getDate()} ${cleanMonth}, ${date.getFullYear()}`;
}

export default function Dashboard() {
  const [active, setActive] = useState("tong-quan");
  const [activeSetting, setActiveSetting] = useState("general");
  const [range, setRange] = useState("7 ngày");
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileRole, setProfileRole] = useState("Admin");
  const [logoutMessage, setLogoutMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [notificationOpen, setNotificationOpen] = useState(false);
  const currentDate = formatDashboardDate();
  const searchResults = searchQuery.trim()
    ? SEARCH_ITEMS.filter((item) =>
        item.label.toLowerCase().includes(searchQuery.trim().toLowerCase()),
      ).slice(0, 6)
    : [];

  useEffect(() => {
    const closeFloatingMenus = (event) => {
      if (!event.target.closest(".notification-menu"))
        setNotificationOpen(false);
      if (!event.target.closest(".profile-menu")) setProfileOpen(false);
      if (!event.target.closest(".search")) setSearchQuery("");
    };

    document.addEventListener("mousedown", closeFloatingMenus);
    return () => document.removeEventListener("mousedown", closeFloatingMenus);
  }, []);

  const handleSearchSelect = (item) => {
    setActive(item.target);
    if (item.target === "cai-dat") setActiveSetting("general");
    setSearchQuery("");
  };

  return (
    <div className="layout">
      {/* SIDEBAR */}
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">
            <Icon name="cap" size={16} />
          </span>

          <span className="brand-name">Học Cùng CTT</span>
        </div>

        <p className="side-label">Admin</p>

        <nav className="nav">
          {NAV.map((item) => (
            <div className="nav-group" key={item.id}>
              <button
                className={active === item.id ? "active" : ""}
                aria-current={active === item.id ? "page" : undefined}
                onClick={() => {
                  setActive(item.id);
                  if (item.id === "cai-dat") setActiveSetting("general");
                }}
              >
                <Icon name={item.icon} size={16} width={1.9} />
                {item.label}
              </button>
              {item.id === "cai-dat" && active === "cai-dat" && (
                <div className="nav-submenu">
                  {[
                    "general",
                    "ai",
                    "documents",
                    "access",
                    "notifications",
                  ].map((setting) => {
                    const labels = {
                      general: "Chung",
                      ai: "AI",
                      documents: "Tài liệu",
                      access: "Quyền & bảo mật",
                      notifications: "Thông báo",
                    };
                    return (
                      <button
                        key={setting}
                        className={activeSetting === setting ? "active" : ""}
                        onClick={() => setActiveSetting(setting)}
                      >
                        {labels[setting]}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* MAIN */}
      <div className="main">
        {/* TOPBAR */}
        <header className="topbar">
          <div className="search">
            <span className="ico-l">
              <Icon name="search" size={14} />
            </span>

            <input
              type="text"
              placeholder="Tìm kiếm..."
              aria-label="Tìm kiếm"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            {searchResults.length > 0 && (
              <div className="search-results" role="listbox">
                {searchResults.map((item) => (
                  <button
                    key={`${item.type}-${item.label}`}
                    type="button"
                    onClick={() => handleSearchSelect(item)}
                  >
                    <span className="search-result-label">{item.label}</span>
                    <span className="search-result-type">{item.type}</span>
                  </button>
                ))}
              </div>
            )}
            {searchQuery.trim() && searchResults.length === 0 && (
              <div className="search-empty">Không tìm thấy kết quả phù hợp</div>
            )}
          </div>

          <div className="topbar-right">
            <div className="notification-menu">
              <button
                className="bell"
                aria-label="Thông báo"
                aria-expanded={notificationOpen}
                onClick={() => setNotificationOpen((open) => !open)}
              >
                <Icon name="bell" size={18} width={1.8} />

                <i />
              </button>
              {notificationOpen && (
                <div
                  className="notification-dropdown"
                  role="region"
                  aria-label="Thông báo mới"
                >
                  <div className="notification-header">
                    <strong>Thông báo</strong>
                    <span>{ADMIN_NOTIFICATIONS.length} mới</span>
                  </div>
                  <div className="admin-notification-list">
                    {ADMIN_NOTIFICATIONS.map((notification) => (
                      <button
                        key={notification.id}
                        className="notification-item"
                        onClick={() => {
                          setActive(notification.target);
                          setNotificationOpen(false);
                        }}
                      >
                        <span
                          className={`notification-dot ${notification.tone}`}
                        />
                        <span className="notification-copy">
                          <strong>{notification.title}</strong>
                          <span>{notification.body}</span>
                          <small>{notification.time}</small>
                        </span>
                      </button>
                    ))}
                  </div>
                  <button
                    className="notification-footer"
                    onClick={() => {
                      setActive("phan-hoi");
                      setNotificationOpen(false);
                    }}
                  >
                    Xem tất cả feedback
                  </button>
                </div>
              )}
            </div>

            <div className="profile-menu">
              <button
                className="user"
                aria-expanded={profileOpen}
                aria-haspopup="menu"
                onClick={() => setProfileOpen((open) => !open)}
              >
                <span className="avatar">A</span>
                {profileRole}
                <Icon name="chevron" size={13} />
              </button>

              {profileOpen && (
                <div className="profile-dropdown" role="menu">
                  {["Sinh viên", "Admin"].map((role) => (
                    <button
                      type="button"
                      role="menuitem"
                      key={role}
                      className={profileRole === role ? "selected" : ""}
                      onClick={() => {
                        if (role === "Sinh viên") {
                          window.location.assign("/");
                          return;
                        }
                        setProfileRole(role);
                        setLogoutMessage("");
                        setProfileOpen(false);
                      }}
                    >
                      {role}
                    </button>
                  ))}
                  <button
                    type="button"
                    role="menuitem"
                    className="profile-logout"
                    onClick={() => {
                      setLogoutMessage("Bạn đã chọn đăng xuất.");
                      setProfileOpen(false);
                    }}
                  >
                    <Icon name="logout" size={14} width={1.9} />
                    Đăng xuất
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* PAGE */}
        <main className="page">
          {logoutMessage && (
            <div className="logout-message" role="status">
              {logoutMessage}
            </div>
          )}
          {active === "cai-dat" ? (
            <AdminSettings activeSetting={activeSetting} />
          ) : active === "sinh-vien" ? (
            <StudentModule />
          ) : active === "phan-hoi" ? (
            <FeedbackModule />
          ) : active === "tai-lieu" ? (
            <Documentdashboard />
          ) : active === "cau-hoi" ? (
            <Question />
          ) : (
            <>
              <div className="page-head">
                <div>
                  <h1>Tổng quan</h1>

                  <p>Chào mừng bạn trở lại, Admin!</p>
                </div>

                <p className="date">
                  <Icon name="calendar" size={13} width={1.8} />
                  {currentDate}
                </p>
              </div>

              <div className="shell">
                {/* LEFT */}
                <div className="col-left">
                  {/* STATS */}
                  <section className="stats">
                    {STATS.map((stat) => (
                      <StatCard key={stat.label} {...stat} />
                    ))}
                  </section>

                  {/* CHART */}
                  <section className="row">
                    <article className="card chart-card">
                      <div className="card-h">
                        <h2>Hoạt động sinh viên</h2>

                        <div className="range">
                          {["7 ngày", "30 ngày", "90 ngày"].map((item) => (
                            <button
                              key={item}
                              className={range === item ? "on" : ""}
                              onClick={() => setRange(item)}
                            >
                              {item}
                            </button>
                          ))}
                        </div>
                      </div>

                      <LineChart
                        data={ACTIVITY_BY_RANGE[range]}
                        max={
                          range === "7 ngày"
                            ? 500
                            : range === "30 ngày"
                              ? 1600
                              : 6000
                        }
                      />
                    </article>

                    {/* DONUT */}
                    <article className="card donut-card">
                      <div className="card-h">
                        <h2>Tỉ lệ xử lý</h2>
                      </div>

                      <Donut percent={86} />

                      <ul className="legend">
                        {PROCESSING.map((item) => (
                          <li key={item.label}>
                            <span
                              className="dot"
                              style={{
                                background: item.color,
                              }}
                            />

                            {item.label}

                            <span className="n">{item.value}</span>
                          </li>
                        ))}
                      </ul>
                    </article>
                  </section>

                  {/* TABLE */}
                  <section className="row">
                    <article className="card table-card">
                      <div className="card-h">
                        <h2>Tài liệu gần đây</h2>
                      </div>

                      <div className="table-scroll">
                        <table>
                          <thead>
                            <tr>
                              <th>Sinh viên</th>
                              <th>Tên tài liệu</th>
                              <th>Loại</th>
                              <th>Thời gian</th>
                              <th>Trạng thái</th>
                              <th>Câu hỏi</th>
                              <th />
                            </tr>
                          </thead>

                          <tbody>
                            {DOCS.map((doc) => (
                              <tr key={doc.name}>
                                <td>
                                  <span className="who">
                                    <span
                                      className="pill"
                                      style={{
                                        background: doc.color,
                                      }}
                                    >
                                      <Icon name="user" size={11} />
                                    </span>

                                    {doc.student}
                                  </span>
                                </td>

                                <td>{doc.name}</td>

                                <td>{doc.type}</td>

                                <td>{doc.time}</td>

                                <td>
                                  <span
                                    className={
                                      "badge " + STATUS[doc.status].cls
                                    }
                                  >
                                    {STATUS[doc.status].label}
                                  </span>
                                </td>

                                <td>{doc.questions}</td>

                                <td
                                  style={{
                                    textAlign: "right",
                                  }}
                                >
                                  <button
                                    className="dots"
                                    aria-label={"Tùy chọn cho " + doc.name}
                                  >
                                    ⋯
                                  </button>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </article>

                    {/* TOPICS */}
                    <article className="card topics">
                      <div className="card-h">
                        <h2>Chủ đề phổ biến</h2>

                        <button className="link">Xem tất cả</button>
                      </div>

                      <div className="topics-list">
                        {TOPICS.map((topic) => (
                          <div className="topic" key={topic.name}>
                            <p>{topic.name}</p>

                            <div className="bar-row">
                              <span className="bar">
                                <i
                                  style={{
                                    width: topic.percent + "%",
                                  }}
                                />
                              </span>

                              <span className="pct">{topic.percent}%</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </article>
                  </section>
                </div>

                {/* RIGHT */}
                <div className="col-right">
                  {/* FEED */}
                  <article
                    className="card feed"
                    style={{
                      gridRow: "1 / span 2",
                    }}
                  >
                    <div className="card-h">
                      <h2>Hoạt động gần đây</h2>

                      <button className="link">Xem tất cả</button>
                    </div>

                    <ul className="feed-list">
                      {FEED.map((activity, index) => (
                        <li key={index}>
                          <span className={"ico " + activity.tint}>
                            <Icon name={activity.icon} size={13} />
                          </span>

                          <span className="txt">
                            <b>{activity.title}</b>

                            <small>{activity.sub}</small>
                          </span>

                          <span className="when">{activity.time}</span>
                        </li>
                      ))}
                    </ul>
                  </article>

                  {/* QUICK ACTIONS */}
                  <article className="card quick">
                    <div className="card-h">
                      <h2>Thao tác nhanh</h2>
                    </div>

                    <div className="quick-grid">
                      {QUICK.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => {
                            const destinations = {
                              "Thêm sinh viên": "sinh-vien",
                              "Tải tài liệu": "tai-lieu",
                              "Tạo câu hỏi": "cau-hoi",
                            };
                            setActive(destinations[item.label]);
                          }}
                        >
                          <span className={"ico " + item.tint}>
                            <Icon name={item.icon} size={15} />
                          </span>

                          {item.label}
                        </button>
                      ))}
                    </div>
                  </article>
                </div>
              </div>
            </>
          )}
        </main>
      </div>
    </div>
  );
}
