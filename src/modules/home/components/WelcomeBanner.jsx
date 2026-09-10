import React from 'react';
import { useApp } from '../../../context/AppContext';
import Icon from '../../../components/ui/Icon';
import Badge from '../../../components/ui/Badge';

export default function WelcomeBanner() {
  const { user } = useApp();

  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between px-1 gap-3 shrink-0">
      <div className="flex flex-col">
        <div className="flex items-center gap-2 flex-wrap">
          <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight font-bold">
            Chào {user.name.split(' ').pop()} <span className="inline-block animate-wave origin-[70%_70%]">👋</span>
          </h1>
          <Badge variant="secondary" size="md">
            {user.semester}
          </Badge>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant flex items-center gap-1.5 mt-0.5 flex-wrap">
          <span>Hôm nay bạn nên tập trung vào điều gì?</span>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-outline-variant"></span>
          <span className="font-title text-title text-primary font-medium">
            Thứ Ba, 22 Tháng 10 · {user.academicWeek}
          </span>
        </p>
      </div>

      {/* Quick Status Strip */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container-low shadow-sm">
          <Icon name="local_fire_department" size={18} className="text-primary" fill />
          <span className="font-label-md text-label-md text-on-surface font-semibold">
            {user.streakDays} ngày liên tiếp
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container-low shadow-sm">
          <Icon name="verified" size={18} className="text-secondary" />
          <span className="font-label-md text-label-md text-on-surface font-semibold">
            {user.rank}
          </span>
        </div>
      </div>
    </div>
  );
}
