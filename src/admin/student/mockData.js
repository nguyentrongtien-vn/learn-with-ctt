export const studentStats = [
  {
    key: "total",
    label: "Tổng sinh viên",
    value: "1,248",
    delta: "+12%",
    deltaDir: "up",
    note: "so với tuần trước",
    icon: "users",
    color: "blue",
  },
  {
    key: "active",
    label: "Đang hoạt động",
    value: "382",
    delta: "+18%",
    deltaDir: "up",
    note: "so với tuần trước",
    icon: "activity",
    color: "green",
  },
  {
    key: "new",
    label: "Sinh viên mới",
    value: "56",
    delta: "+25%",
    deltaDir: "up",
    note: "so với tuần trước",
    icon: "spark",
    color: "purple",
  },
  {
    key: "attention",
    label: "Cần chú ý",
    value: "42",
    delta: "+8%",
    deltaDir: "up",
    note: "so với tuần trước",
    icon: "bell",
    color: "red",
  },
];

const AVA_COLORS = [
  "#6C5CE7",
  "#4A7CFF",
  "#17B26A",
  "#F6A609",
  "#F04452",
  "#9B6BFF",
];

const initials = (name) =>
  name
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .slice(-2)
    .join("")
    .toUpperCase();

export const students = [
  {
    id: "sv001",
    name: "Nguyễn A",
    mssv: "2024051",
    email: "nguyena@edu.edu.vn",
    khoa: "CNTT",
    taiLieu: 12,
    cauHoi: 185,
    quizHoanThanh: 32,
    hoatDong: "5 phút trước",
    trangThai: "active",
  },
  {
    id: "sv002",
    name: "Trần B",
    mssv: "2024592",
    email: "tranb@edu.edu.vn",
    khoa: "Tự động hóa",
    taiLieu: 8,
    cauHoi: 348,
    quizHoanThanh: 24,
    hoatDong: "1 giờ trước",
    trangThai: "active",
  },
  {
    id: "sv003",
    name: "Lê C",
    mssv: "2024678",
    email: "lec@edu.edu.vn",
    khoa: "Công nghệ thông tin",
    taiLieu: 21,
    cauHoi: 348,
    quizHoanThanh: 67,
    hoatDong: "2 ngày trước",
    trangThai: "active",
  },
  {
    id: "sv004",
    name: "Phạm D",
    mssv: "2024501",
    email: "phamd@edu.edu.vn",
    khoa: "Kinh tế",
    taiLieu: 5,
    cauHoi: 68,
    quizHoanThanh: 15,
    hoatDong: "3 ngày trước",
    trangThai: "active",
  },
  {
    id: "sv005",
    name: "Hoàng E",
    mssv: "2024785",
    email: "hoange@edu.edu.vn",
    khoa: "Tự động hóa",
    taiLieu: 14,
    cauHoi: 218,
    quizHoanThanh: 42,
    hoatDong: "1 tuần trước",
    trangThai: "inactive",
  },
].map((student) => ({
  ...student,
  color:
    AVA_COLORS[
      Math.abs(student.mssv.charCodeAt(0) + student.mssv.length) %
        AVA_COLORS.length
    ],
  initials: initials(student.name),
}));

export const recentActivity = [
  {
    id: 1,
    text: "Nguyễn A đã tải lên tài liệu OOP.pdf",
    time: "2 phút trước",
    type: "file",
  },
  {
    id: 2,
    text: "Trần B đã hoàn thành bài luyện tập SQL",
    time: "12 phút trước",
    type: "quiz",
  },
  {
    id: 3,
    text: "Lê C đã đặt câu hỏi về tài liệu Database",
    time: "30 phút trước",
    type: "question",
  },
  {
    id: 4,
    text: "Phạm D đăng nhập vào hệ thống",
    time: "1 giờ trước",
    type: "login",
  },
  {
    id: 5,
    text: "Hoàng E đã tải lên tài liệu và tạo câu hỏi",
    time: "2 giờ trước",
    type: "file",
  },
];

export const activityByDept = [
  { name: "CNTT", pct: 35, color: "#4A7CFF" },
  { name: "Tự động hóa", pct: 25, color: "#17B26A" },
  { name: "Kinh tế", pct: 15, color: "#F6A609" },
  { name: "Công nghệ thông tin", pct: 15, color: "#9B6BFF" },
  { name: "Khác", pct: 10, color: "#F04452" },
];

export const studentDetails = {
  sv001: {
    joinedAt: "12/05/2025",
    quizCompletionRate: 87,
    activitySeries: {
      "7ngay": [20, 45, 30, 60, 40, 80, 55],
      "30ngay": [20, 35, 25, 45, 30, 60, 50, 70, 40, 65],
      "90ngay": [15, 30, 25, 40, 35, 55, 45, 60, 50, 65, 55, 70],
    },
    documents: [
      { name: "OOP.pdf", views: 65, date: "14/09/2025" },
      { name: "Database Design.pdf", views: 42, date: "12/09/2025" },
      { name: "SQL.pdf", views: 38, date: "10/09/2025" },
      { name: "Web Development.pdf", views: 30, date: "08/09/2025" },
      { name: "Network.pdf", views: 22, date: "05/09/2025" },
    ],
    questionBank: [
      { subject: "OOP", count: 65 },
      { subject: "Data Structure", count: 48 },
      { subject: "SQL", count: 40 },
      { subject: "Web Development", count: 32 },
      { subject: "Network", count: 28 },
    ],
    recentQuizzes: [
      { subject: "SQL nâng cao", date: "15/09/2025", score: "9/10", status: "pass" },
      { subject: "OOP nâng cao", date: "13/09/2025", score: "8/10", status: "pass" },
      { subject: "Data Structure", date: "10/09/2025", score: "6/10", status: "pass" },
      { subject: "Database", date: "08/09/2025", score: "7/10", status: "pass" },
    ],
  },
};
