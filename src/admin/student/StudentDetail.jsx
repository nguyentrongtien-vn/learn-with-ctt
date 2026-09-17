import React, { useState } from "react";
import "./Students.css";
import { IconArrowLeft, IconFile, IconQuestion } from "./icons";
import { students, studentDetails } from "./mockData";

function ActivityLine({ values }) {
  const width = 620;
  const height = 220;
  const chartLeft = 52;
  const chartRight = 605;
  const chartTop = 18;
  const chartBottom = 174;
  const maxValue = Math.max(...values, 1);
  const yMax = Math.max(20, Math.ceil(maxValue / 20) * 20);
  const stepX = (chartRight - chartLeft) / Math.max(values.length - 1, 1);
  const xLabels =
    values.length === 7
      ? ["T2", "T3", "T4", "T5", "T6", "T7", "CN"]
      : values.map((_, index) => `Ngày ${index + 1}`);

  const points = values.map((value, index) => {
    const x = chartLeft + index * stepX;
    const y = chartBottom - (value / yMax) * (chartBottom - chartTop);
    return [x, y];
  });

  const path = points
    .map((point, index) => `${index === 0 ? "M" : "L"}${point[0]},${point[1]}`)
    .join(" ");
  const area = `${path} L${points[points.length - 1][0]},${chartBottom} L${points[0][0]},${chartBottom} Z`;
  const yTicks = [yMax, yMax * 0.75, yMax * 0.5, yMax * 0.25, 0].map((tick) =>
    Math.round(tick),
  );

  return (
    <svg
      className="su-activity-chart"
      width="100%"
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      role="img"
      aria-label="Biểu đồ hoạt động học tập theo thời gian"
    >
      <defs>
        <linearGradient id="su-area-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--su-primary)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--su-primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <text
        className="su-chart-axis-title su-chart-axis-title-y"
        x="13"
        y="100"
        transform="rotate(-90 13 100)"
      >
        Số hoạt động
      </text>
      <text className="su-chart-axis-title" x="326" y="213" textAnchor="middle">
        Thời gian
      </text>
      {yTicks.map((tick, index) => {
        const y = chartTop + (index / 4) * (chartBottom - chartTop);
        return (
          <g key={tick}>
            <line
              className="su-chart-grid"
              x1={chartLeft}
              x2={chartRight}
              y1={y}
              y2={y}
            />
            <text className="su-chart-label" x="43" y={y + 3} textAnchor="end">
              {tick}
            </text>
          </g>
        );
      })}
      <line
        className="su-chart-axis"
        x1={chartLeft}
        x2={chartLeft}
        y1={chartTop}
        y2={chartBottom}
      />
      <line
        className="su-chart-axis"
        x1={chartLeft}
        x2={chartRight}
        y1={chartBottom}
        y2={chartBottom}
      />
      <path d={area} fill="url(#su-area-fill)" />
      <path
        d={path}
        fill="none"
        stroke="var(--su-primary)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {points.map((point, index) => (
        <g key={index}>
          <circle
            cx={point[0]}
            cy={point[1]}
            r="3.5"
            fill="#fff"
            stroke="var(--su-primary)"
            strokeWidth="2"
          />
          <text
            className="su-chart-value"
            x={point[0]}
            y={point[1] - 9}
            textAnchor="middle"
          >
            {values[index]}
          </text>
          <text
            className="su-chart-label"
            x={point[0]}
            y="190"
            textAnchor="middle"
          >
            {xLabels[index]}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default function StudentDetail({ studentId, onBack }) {
  const student = students.find((item) => item.id === studentId) || students[0];
  const detail = studentDetails[student.id] || studentDetails.sv001;
  const [range, setRange] = useState("7ngay");

  const miniStats = [
    {
      label: "Tài liệu đã tải lên",
      value: detail.documents.length,
      icon: <IconFile />,
    },
    {
      label: "Câu hỏi đã tạo",
      value: detail.questionBank.reduce((total, item) => total + item.count, 0),
      icon: <IconQuestion />,
    },
    {
      label: "Bài luyện tập đã hoàn thành",
      value: detail.recentQuizzes.length,
      icon: <IconFile />,
    },
    {
      label: "Tỷ lệ hoàn thành",
      value: `${detail.quizCompletionRate}%`,
      icon: <IconQuestion />,
    },
  ];

  return (
    <div className="su-root">
      <div className="su-page">
        <button className="su-detail-back" onClick={onBack}>
          <IconArrowLeft /> Quay lại
        </button>

        <div className="su-detail-head">
          <div className="su-detail-who">
            <div
              className="su-avatar su-avatar-lg"
              style={{ background: student.color }}
            >
              {student.initials}
            </div>
            <div>
              <div className="su-detail-name">
                {student.name}
                <span className="su-badge su-badge--dot su-badge--active">
                  Hoạt động
                </span>
              </div>
              <div className="su-detail-meta">
                MSSV: {student.mssv} &nbsp;·&nbsp; Email: {student.email}{" "}
                &nbsp;·&nbsp; Tham gia: {detail.joinedAt}
              </div>
            </div>
          </div>
          <button
            className="su-btn-primary"
            onClick={() =>
              window.alert(
                "Tính năng nhắn tin sẽ được bổ sung trong phiên bản tiếp theo.",
              )
            }
          >
            Nhắn tin
          </button>
        </div>

        <div className="su-mini-stats">
          {miniStats.map((item) => (
            <div className="su-mini-card" key={item.label}>
              <div className="su-stat-icon su-stat-icon--blue">{item.icon}</div>
              <div>
                <div className="su-mini-value">{item.value}</div>
                <div className="su-mini-label">{item.label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="su-detail-grid">
          <div className="su-card">
            <div className="su-card-head">
              <h3>Hoạt động học tập</h3>
              <div className="su-range-toggle">
                {[
                  ["7ngay", "7 ngày"],
                  ["30ngay", "30 ngày"],
                  ["90ngay", "90 ngày"],
                ].map(([key, label]) => (
                  <button
                    key={key}
                    className={range === key ? "active" : ""}
                    onClick={() => setRange(key)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="su-activity-chart-wrap">
              <ActivityLine values={detail.activitySeries[range]} />
            </div>
          </div>

          <div className="su-card">
            <div className="su-card-head">
              <h3>Tài liệu đã tải lên</h3>
              <button className="su-link">Xem tất cả</button>
            </div>
            <div className="su-list">
              {detail.documents.map((doc) => (
                <div className="su-list-row" key={doc.name}>
                  <div className="su-list-left">
                    <div className="su-list-icon">
                      <IconFile />
                    </div>
                    <div>
                      <div className="su-list-title">{doc.name}</div>
                      <div className="su-list-sub">{doc.views} lượt xem</div>
                    </div>
                  </div>
                  <div className="su-list-right">{doc.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="su-detail-grid-2">
          <div className="su-card">
            <div className="su-card-head">
              <h3>Ngân hàng câu hỏi</h3>
              <button className="su-link">Xem chi tiết</button>
            </div>
            <div className="su-list">
              {detail.questionBank.map((question) => (
                <div className="su-list-row" key={question.subject}>
                  <div className="su-list-left">
                    <div
                      className="su-list-icon"
                      style={{
                        background: "var(--su-purple-soft)",
                        color: "var(--su-purple)",
                      }}
                    >
                      <IconQuestion />
                    </div>
                    <div className="su-list-title">{question.subject}</div>
                  </div>
                  <div className="su-list-right">{question.count} câu hỏi</div>
                </div>
              ))}
            </div>
          </div>

          <div className="su-card">
            <div className="su-card-head">
              <h3>Kết quả luyện tập gần đây</h3>
              <button className="su-link">Xem tất cả</button>
            </div>
            <div className="su-list">
              {detail.recentQuizzes.map((quiz, index) => (
                <div className="su-quiz-row" key={index}>
                  <div>
                    <div className="su-list-title">{quiz.subject}</div>
                    <div className="su-list-sub">{quiz.date}</div>
                  </div>
                  <div
                    className={`su-quiz-score su-quiz-score--${quiz.status}`}
                  >
                    {quiz.score}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
