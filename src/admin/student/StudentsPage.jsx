import React, { useMemo, useState } from "react";
import "./Students.css";
import {
  IconSearch,
  IconUsers,
  IconActivity,
  IconSpark,
  IconBell,
  IconDot,
  IconFile,
  IconQuestion,
  IconMail,
} from "./icons";
import {
  studentStats,
  students,
  recentActivity,
  activityByDept,
} from "./mockData";

const STAT_ICON = {
  users: IconUsers,
  activity: IconActivity,
  spark: IconSpark,
  bell: IconBell,
};

const FEED_ICON = {
  file: IconFile,
  quiz: IconSpark,
  question: IconQuestion,
  login: IconMail,
};

const FEED_COLOR = {
  file: { bg: "var(--su-blue-soft)", fg: "var(--su-blue)" },
  quiz: { bg: "var(--su-green-soft)", fg: "var(--su-green)" },
  question: { bg: "var(--su-purple-soft)", fg: "var(--su-purple)" },
  login: { bg: "var(--su-red-soft)", fg: "var(--su-red)" },
};

const PAGE_SIZE = 5;

function ActivityDonut({ data, total }) {
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="su-donut-wrap">
      <div className="su-donut">
        <svg width="120" height="120" viewBox="0 0 120 120">
          {data.map((item, index) => {
            const dash = (item.pct / 100) * circumference;
            const element = (
              <circle
                key={index}
                cx="60"
                cy="60"
                r={radius}
                fill="none"
                stroke={item.color}
                strokeWidth="14"
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offset}
                transform="rotate(-90 60 60)"
              />
            );
            offset += dash;
            return element;
          })}
        </svg>
        <div className="su-donut-center">
          <div className="su-donut-value">{total}</div>
          <div className="su-donut-label">Sinh viên</div>
        </div>
      </div>
      <div className="su-legend">
        {data.map((item) => (
          <div className="su-legend-item" key={item.name}>
            <span className="su-legend-dot" style={{ background: item.color }} />
            <span className="su-legend-name">{item.name}</span>
            <span className="su-legend-pct">{item.pct}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatCard({ stat }) {
  const Icon = STAT_ICON[stat.icon];

  return (
    <div className="su-stat-card">
      <div className="su-stat-top">
        <div className={`su-stat-icon su-stat-icon--${stat.color}`}>
          <Icon />
        </div>
      </div>
      <div className="su-stat-value">{stat.value}</div>
      <div className="su-stat-label">{stat.label}</div>
      <div className={`su-stat-delta su-stat-delta--${stat.deltaDir}`}>
        {stat.deltaDir === "up" ? "▲" : "▼"} {stat.delta}
        <span className="su-stat-delta-note">{stat.note}</span>
      </div>
    </div>
  );
}

export default function StudentsPage({ onOpenStudent }) {
  const [query, setQuery] = useState("");
  const [khoaFilter, setKhoaFilter] = useState("Tất cả khoa");
  const [statusFilter, setStatusFilter] = useState("Tất cả trạng thái");
  const [page, setPage] = useState(1);

  const khoaOptions = useMemo(
    () => ["Tất cả khoa", ...Array.from(new Set(students.map((student) => student.khoa)))],
    [],
  );

  const filtered = useMemo(() => {
    return students.filter((student) => {
      const matchQuery =
        !query ||
        student.name.toLowerCase().includes(query.toLowerCase()) ||
        student.mssv.includes(query) ||
        student.email.toLowerCase().includes(query.toLowerCase());

      const matchKhoa = khoaFilter === "Tất cả khoa" || student.khoa === khoaFilter;
      const matchStatus =
        statusFilter === "Tất cả trạng thái" ||
        (statusFilter === "Hoạt động" && student.trangThai === "active") ||
        (statusFilter === "Ngừng hoạt động" && student.trangThai === "inactive");

      return matchQuery && matchKhoa && matchStatus;
    });
  }, [query, khoaFilter, statusFilter]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageRows = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const today = new Date().toLocaleDateString("vi-VN", {
    weekday: "long",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  return (
    <div className="su-root">
      <div className="su-page">
        <div className="su-header">
          <div>
            <h1 className="su-title">Sinh viên</h1>
            <p className="su-subtitle">Quản lý và theo dõi hoạt động học tập của sinh viên</p>
          </div>
          <div className="su-header-right">{today}</div>
        </div>

        <div className="su-stats">
          {studentStats.map((stat) => (
            <StatCard stat={stat} key={stat.key} />
          ))}
        </div>

        <div className="su-grid">
          <div className="su-main-col">
            <div className="su-card">
              <div className="su-toolbar" style={{ paddingTop: 18 }}>
                <div className="su-search">
                  <IconSearch />
                  <input
                    placeholder="Tìm kiếm sinh viên, MSSV, email..."
                    value={query}
                    onChange={(event) => {
                      setQuery(event.target.value);
                      setPage(1);
                    }}
                  />
                </div>

                <select
                  className="su-select"
                  value={khoaFilter}
                  onChange={(event) => {
                    setKhoaFilter(event.target.value);
                    setPage(1);
                  }}
                >
                  {khoaOptions.map((option) => (
                    <option key={option}>{option}</option>
                  ))}
                </select>

                <select
                  className="su-select"
                  value={statusFilter}
                  onChange={(event) => {
                    setStatusFilter(event.target.value);
                    setPage(1);
                  }}
                >
                  <option>Tất cả trạng thái</option>
                  <option>Hoạt động</option>
                  <option>Ngừng hoạt động</option>
                </select>
              </div>

              <div className="su-table-wrap">
                <table className="su-table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Sinh viên</th>
                      <th>MSSV</th>
                      <th>Email</th>
                      <th>Khoa</th>
                      <th>Tài liệu</th>
                      <th>Câu hỏi</th>
                      <th>Kết quả luyện tập</th>
                      <th>Hoạt động gần đây</th>
                      <th>Trạng thái</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    {pageRows.map((student, index) => (
                      <tr key={student.id} onClick={() => onOpenStudent && onOpenStudent(student.id)}>
                        <td>{(page - 1) * PAGE_SIZE + index + 1}</td>
                        <td>
                          <div className="su-student-cell">
                            <div className="su-avatar" style={{ background: student.color }}>
                              {student.initials}
                            </div>
                            <span className="su-student-name">{student.name}</span>
                          </div>
                        </td>
                        <td>{student.mssv}</td>
                        <td>{student.email}</td>
                        <td>{student.khoa}</td>
                        <td>{student.taiLieu}</td>
                        <td>{student.cauHoi}</td>
                        <td>{student.quizHoanThanh}</td>
                        <td>{student.hoatDong}</td>
                        <td>
                          <span
                            className={`su-badge su-badge--dot ${student.trangThai === "active" ? "su-badge--active" : "su-badge--inactive"}`}
                          >
                            {student.trangThai === "active" ? "Hoạt động" : "Ngừng hoạt động"}
                          </span>
                        </td>
                        <td>
                          <button className="su-row-btn" onClick={(event) => event.stopPropagation()}>
                            <IconDot />
                          </button>
                        </td>
                      </tr>
                    ))}
                    {pageRows.length === 0 && (
                      <tr>
                        <td colSpan={11} style={{ textAlign: "center", color: "var(--su-text-muted)", padding: 24 }}>
                          Không tìm thấy sinh viên phù hợp
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              <div className="su-table-foot">
                <span>
                  Hiển thị {pageRows.length ? (page - 1) * PAGE_SIZE + 1 : 0}–{(page - 1) * PAGE_SIZE + pageRows.length} trong {filtered.length} sinh viên
                </span>
                <div className="su-pager">
                  <button onClick={() => setPage((value) => Math.max(1, value - 1))}>‹</button>
                  {Array.from({ length: totalPages }).slice(0, 5).map((_, index) => (
                    <button
                      key={index}
                      className={page === index + 1 ? "active" : ""}
                      onClick={() => setPage(index + 1)}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button onClick={() => setPage((value) => Math.min(totalPages, value + 1))}>›</button>
                </div>
              </div>
            </div>
          </div>

          <div className="su-side-col">
            <div className="su-card">
              <div className="su-card-head">
                <h3>Hoạt động gần đây</h3>
                <button className="su-link">Xem tất cả</button>
              </div>
              <div className="su-feed">
                {recentActivity.map((activity) => {
                  const Icon = FEED_ICON[activity.type];
                  const palette = FEED_COLOR[activity.type];
                  return (
                    <div className="su-feed-item" key={activity.id}>
                      <div className="su-feed-icon" style={{ background: palette.bg, color: palette.fg }}>
                        <Icon />
                      </div>
                      <div>
                        <div className="su-feed-text">{activity.text}</div>
                        <div className="su-feed-time">{activity.time}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="su-card">
              <div className="su-card-head">
                <h3>Tỷ lệ hoạt động theo khoa</h3>
              </div>
              <ActivityDonut data={activityByDept} total={studentStats[0].value} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
