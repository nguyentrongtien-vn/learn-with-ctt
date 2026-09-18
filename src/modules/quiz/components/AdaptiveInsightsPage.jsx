import React, { useState } from "react";
import { useApp } from "../../../context/AppContext";
import Icon from "../../../components/ui/Icon";

const WEAK_SUBJECTS = [
  {
    id: "cs201",
    code: "CS201",
    name: "Cấu trúc dữ liệu",
    mastery: 32,
    correct: [35, 42, 32, 48, 55, 62],
    incorrect: [65, 58, 68, 52, 45, 38],
  },
  {
    id: "ma110",
    code: "MA110",
    name: "Toán rời rạc",
    mastery: 45,
    correct: [48, 42, 50, 55, 45, 58],
    incorrect: [52, 58, 50, 45, 55, 42],
  },
  {
    id: "cs202",
    code: "CS202",
    name: "Lập trình hướng đối tượng",
    mastery: 52,
    correct: [55, 48, 58, 52, 62, 56],
    incorrect: [45, 52, 42, 48, 38, 44],
  },
  {
    id: "ee101",
    code: "EE101",
    name: "Mạch điện cơ bản",
    mastery: 58,
    correct: [62, 55, 60, 64, 58, 66],
    incorrect: [38, 45, 40, 36, 42, 34],
  },
  {
    id: "db301",
    code: "DB301",
    name: "Cơ sở dữ liệu",
    mastery: 61,
    correct: [60, 64, 58, 68, 65, 70],
    incorrect: [40, 36, 42, 32, 35, 30],
  },
];

const chartWidth = 720;
const chartHeight = 280;
const chartPadding = { top: 20, right: 18, bottom: 42, left: 42 };

function chartPoints(values) {
  const innerWidth = chartWidth - chartPadding.left - chartPadding.right;
  const innerHeight = chartHeight - chartPadding.top - chartPadding.bottom;
  return values.map((value, index) => {
    const x = chartPadding.left + (index / (values.length - 1)) * innerWidth;
    const y = chartPadding.top + ((100 - value) / 100) * innerHeight;
    return [x, y];
  });
}

function linePath(points) {
  return points.map(([x, y], index) => `${index ? "L" : "M"}${x},${y}`).join(" ");
}

function areaPath(points) {
  const baseline = chartHeight - chartPadding.bottom;
  return `${linePath(points)} L${points[points.length - 1][0]},${baseline} L${points[0][0]},${baseline} Z`;
}

function WeakSubjectsChart({ subjects, selectedId, onSelect }) {
  const chartBarWidth = 45;
  const gap = 12;
  const width = subjects.length * (chartBarWidth + gap) + 60;
  const height = 220;
  const baseline = 174;
  const scale = 1.8;

  return (
    <div className="pb-1">
      <svg viewBox={`0 0 ${width} ${height}`} className="h-auto w-full" role="img" aria-label="Năm môn có tỷ lệ yếu nhất">
        {[0, 25, 50, 75, 100].map((tick) => {
          const y = baseline - (tick / 100) * 200;
          return (
            <g key={tick}>
              <line x1="36" x2={width - 12} y1={y} y2={y} stroke="currentColor" className="text-surface-container-high" strokeDasharray="3 5" />
              <text x="28" y={y + 4} textAnchor="end" className="fill-on-surface-variant text-[11px]">{tick}%</text>
            </g>
          );
        })}
        <line x1="36" x2={width - 12} y1={baseline} y2={baseline} stroke="currentColor" className="text-outline-variant" />
        {subjects.map((subject, index) => {
          const x = 54 + index * (chartBarWidth + gap);
          const barHeight = subject.mastery * scale;
          const isSelected = subject.id === selectedId;
          return (
            <g key={subject.id} onClick={() => onSelect(subject.id)} className="cursor-pointer">
              <rect x={x - 8} y="15" width={chartBarWidth + 16} height="180" rx="12" className="fill-transparent" />
              <rect x={x} y={baseline - barHeight} width={chartBarWidth} height={barHeight} rx="9" className={isSelected ? "fill-primary" : "fill-primary/35"} />
              <text x={x + chartBarWidth / 2} y={baseline - barHeight - 10} textAnchor="middle" className={isSelected ? "fill-primary text-[12px] font-bold" : "fill-on-surface-variant text-[12px] font-semibold"}>{subject.mastery}%</text>
              <text x={x + chartBarWidth / 2} y="198" textAnchor="middle" className={isSelected ? "fill-primary text-[10px] font-bold" : "fill-on-surface text-[10px] font-semibold"}>{subject.code}</text>
              {isSelected && <circle cx={x + chartBarWidth / 2} cy="212" r="3" className="fill-primary" />}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function AccuracyPieChart({ subject }) {
  const average = (values) => Math.round(values.reduce((sum, value) => sum + value, 0) / values.length);
  const correct = average(subject.correct);
  const incorrect = average(subject.incorrect);
  const radius = 78;
  const circumference = 2 * Math.PI * radius;
  const correctLength = (correct / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
      <svg viewBox="0 0 220 220" className="h-48 w-48 shrink-0" role="img" aria-label={`Tỷ lệ câu đúng và sai của ${subject.name}`}>
        <circle cx="110" cy="110" r={radius} fill="none" stroke="#b91c1c" strokeWidth="28" />
        <circle cx="110" cy="110" r={radius} fill="none" stroke="#16a34a" strokeWidth="28" strokeDasharray={`${correctLength} ${circumference - correctLength}`} strokeLinecap="butt" transform="rotate(-90 110 110)" />
        <text x="110" y="106" textAnchor="middle" className="fill-on-surface text-[24px] font-bold">{correct}%</text>
        <text x="110" y="125" textAnchor="middle" className="fill-on-surface-variant text-[11px] font-semibold">câu đúng</text>
      </svg>
      <div className="flex flex-col gap-3 text-[12px] font-semibold text-on-surface-variant">
        <span className="flex items-center justify-between gap-8"><span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-green-600" />Câu đúng</span><strong className="text-secondary">{correct}%</strong></span>
        <span className="flex items-center justify-between gap-8"><span className="flex items-center gap-2"><span className="h-2.5 w-2.5 rounded-full bg-red-700" />Câu sai</span><strong className="text-error">{incorrect}%</strong></span>
      </div>
    </div>
  );
}

export default function AdaptiveInsightsPage({ onBack }) {
  const { setActiveTab, setActiveCourseId } = useApp();
  const [selectedId, setSelectedId] = useState(WEAK_SUBJECTS[0].id);
  const selectedSubject = WEAK_SUBJECTS.find((subject) => subject.id === selectedId) || WEAK_SUBJECTS[0];

  const handleAdvancedPractice = () => {
    setActiveCourseId(selectedSubject.id === "ee101" || selectedSubject.id === "db301" ? "cs201" : selectedSubject.id);
    setActiveTab("course-detail");
  };

  return (
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 py-1">
      <div className="flex flex-col gap-2 border-b border-surface-container-high/40 pb-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <button type="button" onClick={onBack} className="flex h-9 w-9 items-center justify-center rounded-full text-on-surface-variant transition hover:bg-surface-container hover:text-on-surface" aria-label="Quay lại luyện tập">
            <Icon name="arrow_back" size={20} />
          </button>
          <div><p className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary">Luyện tập thích ứng</p><h1 className="text-2xl font-bold tracking-tight text-on-surface">Phân tích năng lực theo môn</h1><p className="mt-1 text-[13px] text-on-surface-variant">Chọn một cột để xem diễn biến tỷ lệ câu đúng và sai của môn đó.</p></div>
        </div>
        <span className="inline-flex w-fit items-center gap-2 rounded-full bg-error-container px-3 py-1.5 text-[12px] font-bold text-on-error-container"><Icon name="insights" size={16} />5 môn cần tập trung</span>
      </div>

      <div className="grid gap-3 lg:grid-cols-2">
      <section className="rounded-2xl border border-surface-container-high/50 bg-surface-container-lowest p-3 shadow-sm sm:p-4">
        <div className="mb-2 flex flex-wrap items-end justify-between gap-2"><div><h2 className="text-[16px] font-bold text-on-surface">5 môn có tỷ lệ yếu nhất</h2><p className="mt-1 text-[12px] text-on-surface-variant">Tỷ lệ năng lực hiện tại · bấm vào cột để xem chi tiết</p></div><span className="text-[12px] font-semibold text-primary">Đang chọn: {selectedSubject.code}</span></div>
        <WeakSubjectsChart subjects={WEAK_SUBJECTS} selectedId={selectedId} onSelect={setSelectedId} />
      </section>

      <section className="rounded-2xl border border-surface-container-high/50 bg-surface-container-lowest p-3 shadow-sm sm:p-4">
        <div className="mb-2"><h2 className="text-[16px] font-bold text-on-surface">Tỷ lệ đúng và sai</h2><p className="mt-1 text-[12px] text-on-surface-variant">{selectedSubject.code} · {selectedSubject.name}</p></div>
        <AccuracyPieChart subject={selectedSubject} />
      </section>
      </div>
      <div className="-mt-2 flex justify-end">
        <button type="button" onClick={handleAdvancedPractice} className="inline-flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-[13px] font-bold text-on-primary shadow-md transition hover:bg-primary/90 hover:shadow-lg active:scale-95">
          <Icon name="fitness_center" size={18} />
          <span>Rèn luyện nâng cao</span>
          <Icon name="arrow_forward" size={17} />
        </button>
      </div>
    </div>
  );
}
