import React from 'react';
import { useApp } from '../../context/AppContext';
import ModernHeroFocus from './components/ModernHeroFocus';
import QuickActionPills from './components/QuickActionPills';
import TodayScheduleList from './components/TodayScheduleList';
import ActiveCoursesGrid from './components/ActiveCoursesGrid';
import ReviewTopicsStrip from './components/ReviewTopicsStrip';
import Icon from '../../components/ui/Icon';

export default function HomePage() {
  const { user } = useApp();

  return (
    <div className="flex flex-col gap-6 select-none max-w-4xl mx-auto py-2">
      {/* 1. Welcoming & Status Line */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col">
          <h1 className="text-xl sm:text-2xl font-bold text-on-surface tracking-tight">
            Chào {user.name.split(' ').pop()} 👋
          </h1>
          <p className="text-[13px] text-on-surface-variant mt-0.5">
            Sẵn sàng cho buổi học hôm nay? Bạn đã duy trì chuỗi {user.streakDays} ngày liên tiếp.
          </p>
        </div>

        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-[12px] font-semibold">
          <Icon name="local_fire_department" size={16} fill />
          <span>{user.streakDays} ngày streak</span>
        </div>
      </div>

      {/* 2. Hero Focus: Primary Action */}
      <ModernHeroFocus />

      {/* 3. Quick Action Shortcuts */}
      <QuickActionPills />

      {/* 4. Schedule & Review Split */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-1">
        <TodayScheduleList />
        <ReviewTopicsStrip />
      </div>

      {/* 5. Active Courses Grid */}
      <div className="pt-2">
        <ActiveCoursesGrid />
      </div>
    </div>
  );
}

