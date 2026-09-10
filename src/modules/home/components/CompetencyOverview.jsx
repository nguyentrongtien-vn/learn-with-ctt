import React from 'react';
import { useApp } from '../../../context/AppContext';
import Icon from '../../../components/ui/Icon';
import ProgressBar from '../../../components/ui/ProgressBar';

export default function CompetencyOverview() {
  const { user, setActiveTab } = useApp();

  return (
    <div className="flex flex-col justify-between rounded-3xl bg-surface-container-lowest p-5 shadow-sm border border-surface-container-high/40 hover:border-primary/30 transition-all min-h-[380px] lg:min-h-0">
      <div className="flex flex-col gap-3.5 min-h-0">
        {/* Header */}
        <div className="flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-primary-container/10 flex items-center justify-center text-primary border border-primary/15">
              <Icon name="analytics" size={20} />
            </div>
            <div>
              <h3 className="font-title text-title text-on-surface font-extrabold leading-none">
                Tổng quan năng lực
              </h3>
              <p className="font-label-sm text-[11px] text-on-surface-variant mt-1">
                Dựa trên 18 bài đánh giá thích ứng
              </p>
            </div>
          </div>
          <span className="px-2.5 py-0.5 rounded-full bg-secondary-fixed/50 text-on-secondary-fixed-variant font-label-sm text-[11px] font-bold">
            {user.academicWeek}
          </span>
        </div>

        {/* Visual Metric with SVG Ring */}
        <div className="flex items-center justify-between p-3.5 rounded-2xl bg-surface-container-low/70 border border-surface-container-high/30 shrink-0">
          <div className="flex items-center gap-3.5">
            {/* SVG Circular Progress */}
            <div className="relative w-16 h-16 flex items-center justify-center shrink-0">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                <defs>
                  <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#4338ca" />
                    <stop offset="100%" stopColor="#0d9488" />
                  </linearGradient>
                </defs>
                <path
                  className="text-surface-container-highest"
                  strokeWidth="3.2"
                  stroke="currentColor"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  stroke="url(#scoreGrad)"
                  strokeDasharray="68, 100"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  fill="none"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className="font-headline-sm text-lg font-extrabold text-on-surface leading-none">
                  {user.overallMastery}%
                </span>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-title text-label-md text-on-surface font-bold leading-snug">
                Năng lực kiến thức
              </span>
              <span className="font-label-sm text-[11px] text-secondary font-bold flex items-center gap-1 mt-0.5">
                <Icon name="trending_up" size={14} />
                +4.2% so với tuần trước
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <span className="px-2.5 py-1 rounded-xl bg-surface-container-lowest text-primary font-title text-label-md font-extrabold shadow-xs border border-surface-container-high/40">
              B+
            </span>
            <span className="text-[10px] text-on-surface-variant mt-0.5">Xếp loại</span>
          </div>
        </div>

        {/* Detailed Metrics */}
        <div className="flex flex-col gap-2.5 min-h-0 pt-1">
          <div>
            <div className="flex justify-between items-center text-label-sm text-on-surface-variant font-semibold mb-1">
              <span>Mục tiêu đạt chuẩn ({user.passedObjectives}/{user.totalObjectives})</span>
              <span className="text-on-surface font-bold">70%</span>
            </div>
            <ProgressBar value={user.passedObjectives} max={user.totalObjectives} variant="primary" height="h-2" />
          </div>

          <div>
            <div className="flex justify-between items-center text-label-sm text-on-surface-variant font-semibold mb-1">
              <span>Sẵn sàng thi giữa kỳ</span>
              <span className="text-secondary font-bold">74%</span>
            </div>
            <ProgressBar value={74} max={100} variant="secondary" height="h-2" />
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-xl bg-surface-container-low/50 text-label-sm text-on-surface-variant border border-surface-container-high/30">
            <span className="flex items-center gap-1.5 font-medium">
              <Icon name="speed" size={16} className="text-primary" />
              Tốc độ phản xạ trung bình:
            </span>
            <span className="font-extrabold text-on-surface">42s / câu</span>
          </div>
        </div>
      </div>

      {/* Card Action Footer */}
      <div className="pt-3 border-t border-surface-container-high/40 shrink-0">
        <button
          type="button"
          onClick={() => setActiveTab('courses')}
          className="w-full py-2 rounded-xl bg-surface-container-low hover:bg-surface-container text-primary font-label-md text-label-md font-bold flex items-center justify-center gap-1.5 transition-all active:scale-98 border border-surface-container-high/40"
        >
          <span>Chi tiết lộ trình cá nhân</span>
          <Icon name="chevron_right" size={16} />
        </button>
      </div>
    </div>
  );
}
