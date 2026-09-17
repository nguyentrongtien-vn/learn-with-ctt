import { useEffect, useState } from "react";
import {
  AlertCircle,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  FileQuestion,
  Filter,
  MoreHorizontal,
  Plus,
  Sparkles,
  TrendingUp,
  XCircle,
} from "lucide-react";
import "./Question.css";

const questionStats = [
  { label: "Tổng số câu hỏi", value: "12,840", change: "+12.4%", icon: CircleHelp, tone: "blue" },
  { label: "Chờ duyệt", value: "326", change: "+8.2%", icon: Clock3, tone: "orange" },
  { label: "Đã duyệt", value: "11,972", change: "+14.1%", icon: CheckCircle2, tone: "green" },
  { label: "Bị từ chối", value: "542", change: "+5.8%", icon: XCircle, tone: "red" },
  { label: "Được báo cáo", value: "237", change: "+4.6%", icon: AlertCircle, tone: "purple" },
  { label: "Đã tạo từ AI", value: "11,203", change: "+16.8%", icon: Sparkles, tone: "cyan" },
  { label: "Tạo thủ công", value: "1,637", change: "+9.4%", icon: FileQuestion, tone: "indigo" },
];

const recentQuestions = [
  { title: "Cấu trúc dữ liệu cây nhị phân", category: "Cấu trúc dữ liệu", time: "2 phút trước", status: "Đã duyệt", color: "blue" },
  { title: "Which protocol uses port 443?", category: "Mạng máy tính", time: "15 phút trước", status: "Chờ duyệt", color: "orange" },
  { title: "What is dynamic programming?", category: "Lập trình", time: "1 giờ trước", status: "Đã duyệt", color: "green" },
  { title: "What does the following code output?", category: "Python", time: "2 giờ trước", status: "Từ AI", color: "purple" },
  { title: "How does a binary search work?", category: "Thuật toán", time: "3 giờ trước", status: "Đã duyệt", color: "blue" },
];

const subjects = [
  { name: "Công nghệ thông tin", questions: "4,820", percent: 48, color: "#2f80ed" },
  { name: "Công nghệ thông tin", questions: "3,240", percent: 36, color: "#24a8f0" },
  { name: "Kinh tế", questions: "1,865", percent: 28, color: "#16b897" },
  { name: "Kỹ thuật", questions: "1,420", percent: 24, color: "#8255de" },
  { name: "Khoa học tự nhiên", questions: "980", percent: 18, color: "#f2a93b" },
  { name: "Ngoại ngữ", questions: "515", percent: 12, color: "#ee6b9d" },
];

const chartPoints = "0,76 15,108 30,112 45,105 60,109 75,108 90,102 105,106 120,101 135,106 150,98 165,100 180,93 195,99 210,94 225,90 240,94 255,88 270,83 285,87 300,78 315,83 330,75 345,72 360,68";
const chartPointsBottom = "0,133 15,137 30,132 45,139 60,135 75,136 90,130 105,132 120,127 135,130 150,124 165,125 180,119 195,123 210,117 225,120 240,113 255,118 270,110 285,113 300,108 315,112 330,104 345,108 360,101";

function StatCard({ label, value, change, icon: Icon, tone }) {
  return (
    <article className="question-stat-card">
      <div className={`question-stat-icon ${tone}`}><Icon size={17} /></div>
      <span className="question-stat-label">{label}</span>
      <strong>{value}</strong>
      <span className="question-stat-change"><TrendingUp size={12} /> {change}</span>
      <small>so với tháng trước</small>
    </article>
  );
}

function QuestionTrendChart() {
  return (
    <div className="question-trend-chart">
      <div className="question-chart-y-labels"><span>100%</span><span>75%</span><span>50%</span><span>25%</span><span>0%</span></div>
      <svg viewBox="0 0 360 150" role="img" aria-label="Tỷ lệ câu hỏi hợp lệ">
        <defs>
          <linearGradient id="questionTrendFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2f80ed" stopOpacity=".2" />
            <stop offset="100%" stopColor="#2f80ed" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[12, 42, 72, 102, 132].map((y) => <line key={y} x1="0" y1={y} x2="360" y2={y} className="question-grid-line" />)}
        <polyline points={`${chartPoints} 360,150 0,150`} fill="url(#questionTrendFill)" stroke="none" />
        <polyline points={chartPoints} fill="none" stroke="#2f80ed" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        <polyline points={chartPointsBottom} fill="none" stroke="#f26978" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {chartPoints.split(" ").map((point) => {
          const [cx, cy] = point.split(",");
          return <circle key={point} cx={cx} cy={cy} r="2.4" fill="#fff" stroke="#2f80ed" strokeWidth="1.5" />;
        })}
      </svg>
      <div className="question-chart-x-labels"><span>01/09</span><span>08/09</span><span>15/09</span><span>22/09</span><span>29/09</span><span>07/10</span></div>
    </div>
  );
}

function QuestionQualityDonut() {
  return (
    <div className="question-donut-wrap">
      <div className="question-donut"><strong>12,840</strong><span>Tổng câu hỏi</span></div>
      <div className="question-donut-legend">
        <span><i className="dot green" /> Dễ <b>5,392</b></span>
        <span><i className="dot blue" /> Trung bình <b>3,875</b></span>
        <span><i className="dot orange" /> Khó <b>2,573</b></span>
      </div>
    </div>
  );
}

export default function Question() {
  const [range, setRange] = useState("01/09/2025 đến 07/10/2025");
  const [subjectFilter, setSubjectFilter] = useState("Tất cả nhóm ngành");
  const [createOpen, setCreateOpen] = useState(false);
  const [openSubjectMenu, setOpenSubjectMenu] = useState(null);
  const [newQuestion, setNewQuestion] = useState({ title: "", category: "Công nghệ thông tin", type: "Trắc nghiệm" });
  const [message, setMessage] = useState("");
  useEffect(() => {
    const closeSubjectMenu = (event) => {
      if (!event.target.closest(".question-subject-menu") && !event.target.closest(".question-subject-title > button")) {
        setOpenSubjectMenu(null);
      }
    };

    document.addEventListener("mousedown", closeSubjectMenu);
    return () => document.removeEventListener("mousedown", closeSubjectMenu);
  }, []);
  const visibleSubjects = subjectFilter === "Tất cả nhóm ngành" ? subjects : subjects.filter((subject) => subject.name === subjectFilter);
  const showMessage = (text) => { setMessage(text); window.setTimeout(() => setMessage(""), 2200); };
  const handleCreate = (event) => {
    event.preventDefault();
    if (!newQuestion.title.trim()) { showMessage("Vui lòng nhập nội dung câu hỏi."); return; }
    setCreateOpen(false);
    setNewQuestion({ title: "", category: "Công nghệ thông tin", type: "Trắc nghiệm" });
    showMessage("Câu hỏi đã được tạo và đang chờ duyệt.");
  };

  return (
    <div className="question-dashboard">
      <main className="question-main">
        <div className="question-content">
          <div className="question-heading-row">
            <div><h1>Ngân hàng câu hỏi</h1><p>Quản lý và theo dõi chất lượng câu hỏi trong hệ thống</p></div>
            <div className="question-heading-tools"><select className="question-date-filter" value={range} onChange={(event) => setRange(event.target.value)}><option>01/09/2025 đến 07/10/2025</option><option>01/10/2025 đến 31/10/2025</option><option>7 ngày gần nhất</option></select><button className="question-primary-button" onClick={() => setCreateOpen(true)}><Plus size={16} />Tạo câu hỏi</button></div>
          </div>

          <section className="question-stat-grid">{questionStats.map((stat) => <StatCard key={stat.label} {...stat} />)}</section>

          <section className="question-analytics-grid">
            <article className="question-panel question-trend-panel"><div className="question-panel-heading"><div><h2>Tỷ lệ câu hỏi hợp lệ</h2><p>Thống kê câu hỏi theo thời gian</p></div><button onClick={() => showMessage("Biểu đồ đang hiển thị dữ liệu theo thời gian đã chọn.")} aria-label="Tùy chọn biểu đồ"><MoreHorizontal size={18} /></button></div><div className="question-chart-legend"><span><i className="dot blue" /> Đúng</span><span><i className="dot red" /> Sai</span></div><QuestionTrendChart /></article>
            <article className="question-panel question-quality-panel"><div className="question-panel-heading"><div><h2>Phân bố độ khó</h2><p>Phân loại câu hỏi</p></div><button onClick={() => showMessage("Phân bố gồm câu hỏi Dễ, Trung bình và Khó.")} aria-label="Tùy chọn phân bố"><MoreHorizontal size={18} /></button></div><QuestionQualityDonut /></article>
            <article className="question-panel question-recent-panel"><div className="question-panel-heading"><div><h2>Câu hỏi gần đây</h2><p>Các câu hỏi mới được cập nhật</p></div><button className="question-link-button" onClick={() => showMessage("Đang hiển thị 5 câu hỏi gần đây.")}>Xem tất cả</button></div><div className="question-recent-list">{recentQuestions.map((question) => <div className="question-recent-item" key={question.title}><span className={`question-recent-icon ${question.color}`}><FileQuestion size={15} /></span><div><strong>{question.title}</strong><small>{question.category} · {question.time}</small></div><span className={`question-status ${question.color}`}>{question.status}</span></div>)}</div></article>
          </section>

          <section className="question-subject-section"><div className="question-section-heading"><div><h2>Theo nhóm ngành</h2><p>Phân bổ câu hỏi theo từng nhóm ngành</p></div><label className="question-filter-button"><Filter size={14} /><select value={subjectFilter} onChange={(event) => setSubjectFilter(event.target.value)} aria-label="Lọc nhóm ngành"><option>Tất cả nhóm ngành</option>{[...new Set(subjects.map((subject) => subject.name))].map((subject) => <option key={subject}>{subject}</option>)}</select><ChevronDown size={14} /></label></div><div className="question-subject-grid">{visibleSubjects.map((subject, index) => { const menuId = `${subject.name}-${index}`; return <article className="question-subject-card" key={menuId}><div className="question-subject-title"><span className="question-subject-icon" style={{ backgroundColor: `${subject.color}18`, color: subject.color }}><BookOpen size={15} /></span><strong>{subject.name}</strong><button aria-label={`Tùy chọn nhóm ${subject.name}`} onClick={() => setOpenSubjectMenu(openSubjectMenu === menuId ? null : menuId)}><MoreHorizontal size={16} /></button>{openSubjectMenu === menuId && <div className="question-subject-menu" role="menu"><button onClick={() => { showMessage(`Đang mở danh sách câu hỏi nhóm ${subject.name}.`); setOpenSubjectMenu(null); }}>Xem câu hỏi</button><button onClick={() => { setNewQuestion({ title: "", category: subject.name, type: "Trắc nghiệm" }); setCreateOpen(true); setOpenSubjectMenu(null); }}>Tạo câu hỏi cho nhóm</button><button onClick={() => { showMessage(`Báo cáo nhóm ${subject.name} đã sẵn sàng.`); setOpenSubjectMenu(null); }}>Xuất báo cáo</button></div>}</div><div className="question-subject-meta"><span>{subject.questions} câu hỏi</span><b>{subject.percent}%</b></div><div className="question-progress"><span style={{ width: `${subject.percent}%`, backgroundColor: subject.color }} /></div><div className="question-subject-footer"><span><CheckCircle2 size={12} /> Đã duyệt</span><span><Clock3 size={12} /> Chờ duyệt</span></div></article>; })}</div></section>
          {createOpen && <div className="question-modal-backdrop" onClick={() => setCreateOpen(false)}><form className="question-modal" onSubmit={handleCreate} onClick={(event) => event.stopPropagation()}><div className="question-modal-heading"><div><h2>Tạo câu hỏi</h2><p>Thêm câu hỏi mới vào ngân hàng để chờ duyệt.</p></div><button type="button" onClick={() => setCreateOpen(false)} aria-label="Đóng">×</button></div><label>Nội dung câu hỏi<input autoFocus value={newQuestion.title} onChange={(event) => setNewQuestion({ ...newQuestion, title: event.target.value })} placeholder="Nhập nội dung câu hỏi..." /></label><label>Nhóm ngành<select value={newQuestion.category} onChange={(event) => setNewQuestion({ ...newQuestion, category: event.target.value })}>{[...new Set(subjects.map((subject) => subject.name))].map((subject) => <option key={subject}>{subject}</option>)}</select></label><label>Loại câu hỏi<select value={newQuestion.type} onChange={(event) => setNewQuestion({ ...newQuestion, type: event.target.value })}><option>Trắc nghiệm</option><option>Đúng / Sai</option><option>Điền khuyết</option></select></label><div className="question-modal-actions"><button type="button" onClick={() => setCreateOpen(false)}>Hủy</button><button type="submit">Tạo câu hỏi</button></div></form></div>}
          {message && <div className="question-message" role="status">{message}</div>}
        </div>
      </main>
    </div>
  );
}
