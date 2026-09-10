import React from 'react';
import { useApp } from '../../../context/AppContext';
import Icon from '../../../components/ui/Icon';
import ProgressBar from '../../../components/ui/ProgressBar';

export default function CourseCard({ course }) {
  const { setActiveTab, setActiveCourseId } = useApp();

  const handleOpenCourse = () => {
    setActiveCourseId(course.id);
    setActiveTab('course-detail');
  };

  const getAccentColor = (id) => {
    switch (id) {
      case 'cs201':
        return {
          bar: 'bg-gradient-to-r from-primary to-primary-container',
          iconBg: 'bg-primary-container/10 border-primary/20',
          iconText: 'text-primary',
          icon: 'account_tree',
          progressVariant: 'primary'
        };
      case 'ma110':
        return {
          bar: 'bg-gradient-to-r from-tertiary-container to-amber-500',
          iconBg: 'bg-tertiary-fixed/30 border-amber-500/20',
          iconText: 'text-tertiary',
          icon: 'functions',
          progressVariant: 'warning'
        };
      default:
        return {
          bar: 'bg-gradient-to-r from-secondary to-teal-400',
          iconBg: 'bg-secondary-fixed/30 border-secondary/20',
          iconText: 'text-secondary',
          icon: 'code',
          progressVariant: 'secondary'
        };
    }
  };

  const theme = getAccentColor(course.id);

  return (
    <div className="group relative flex flex-col justify-between bg-surface-container-lowest rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition-all overflow-hidden border border-surface-container-high/50 hover:border-primary/40">
      {/* Top Accent Color Bar */}
      <div className={`absolute top-0 left-0 right-0 h-1.5 ${theme.bar}`} />

      <div className="flex flex-col gap-4">
        {/* Course Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col min-w-0">
            <span className="text-[12px] text-primary font-bold tracking-wider uppercase">
              {course.code} · {course.credits} TÍN CHỈ
            </span>
            <h2 className="text-lg sm:text-xl text-on-surface font-bold mt-1 leading-snug group-hover:text-primary transition-colors">
              {course.title}
            </h2>
          </div>
          <div
            className={`w-12 h-12 rounded-2xl ${theme.iconBg} ${theme.iconText} border flex items-center justify-center flex-shrink-0 shadow-2xs group-hover:scale-105 transition-transform`}
          >
            <Icon name={theme.icon} size={26} />
          </div>
        </div>

        {/* Lecturer & Semester Week */}
        <div className="flex items-center gap-2 text-on-surface-variant text-[13px] font-medium">
          <Icon name="school" size={17} className="text-on-surface-variant/80" />
          <span className="truncate">
            {course.lecturer} · {course.progressWeek}
          </span>
        </div>

        {/* Metric & Progress Gauge */}
        <div className="bg-surface-container-low/80 rounded-xl p-4 flex flex-col gap-2.5 border border-surface-container-high/40">
          <div className="flex items-center justify-between">
            <span className="text-[13px] text-on-surface font-bold">
              Độ vững kiến thức
            </span>
            <span className="text-lg text-primary font-extrabold">
              {course.mastery}%
            </span>
          </div>

          <ProgressBar
            value={course.mastery}
            max={100}
            variant={theme.progressVariant}
            height="h-2"
          />

          <div className="flex justify-between items-center text-[12px] text-on-surface-variant pt-0.5">
            <span>
              {course.passedObjectives}/{course.totalObjectives} mục tiêu đạt chuẩn
            </span>
            <span className="font-semibold text-on-surface">Mục tiêu: {course.targetMastery}%</span>
          </div>
        </div>

        {/* Diagnostics Alert: Weak Concept */}
        {course.weakConcept && (
          <div className="rounded-xl bg-error-container/25 border border-error/25 p-3 flex items-start gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-error mt-1 flex-shrink-0" />
            <div className="flex flex-col min-w-0">
              <span className="text-[12px] text-error font-bold">
                {course.weakConcept.label}
              </span>
              <p className="text-[12px] text-on-surface truncate mt-0.5 font-medium">
                {course.weakConcept.topic}
              </p>
            </div>
          </div>
        )}

        {/* Target Milestone */}
        {course.nextSession && (
          <div className="rounded-xl bg-surface-container-low/60 border border-surface-container-high/40 p-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <Icon name="play_circle" size={19} className="text-primary shrink-0" />
              <div className="flex flex-col min-w-0">
                <span className="text-[11px] text-on-surface-variant font-medium">
                  Bài ôn luyện kế tiếp:
                </span>
                <span className="text-[13px] text-on-surface font-bold truncate">
                  {course.nextSession.title}
                </span>
              </div>
            </div>
            <span className="text-[12px] text-on-surface-variant bg-surface-container px-2.5 py-0.5 rounded-full font-bold shrink-0">
              {course.nextSession.duration}
            </span>
          </div>
        )}
      </div>

      {/* Action Footer */}
      <div className="pt-4 mt-4 flex items-center justify-between border-t border-surface-container-high/40">
        <span className="text-[12px] text-on-surface-variant flex items-center gap-1.5 font-medium">
          <Icon name="verified" size={17} className="text-secondary" />
          <span>{course.labCount} bài tập lab</span>
        </span>
        <button
          type="button"
          onClick={handleOpenCourse}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 text-on-primary text-[13px] font-bold shadow-2xs group-hover:scale-[1.02] transition-all active:scale-95"
        >
          <span>Mở môn học</span>
          <Icon name="arrow_forward" size={16} />
        </button>
      </div>
    </div>
  );
}
