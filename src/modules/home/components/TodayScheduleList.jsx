import React from 'react';
import { useApp } from '../../../context/AppContext';
import Icon from '../../../components/ui/Icon';

export default function TodayScheduleList() {
  const { setActiveTab } = useApp();

  const schedule = [
    {
      id: 's1',
      time: '09:30 - 11:30',
      title: 'Lập trình OOP Java',
      room: 'TC-203 · Giảng đường',
      status: 'completed',
      statusText: 'Đã học',
      icon: 'school'
    },
    {
      id: 's2',
      time: '18:00 - 18:20',
      title: 'Duyệt cây nhị phân (AI Slot)',
      room: '20p Spaced Repetition',
      status: 'action',
      statusText: 'Bắt đầu',
      icon: 'auto_awesome'
    },
    {
      id: 's3',
      time: '20:30 - 21:15',
      title: 'Đọc slide Toán rời rạc MA110',
      room: 'Hàm sinh & Đệ quy',
      status: 'upcoming',
      statusText: 'Sắp tới',
      icon: 'menu_book'
    }
  ];

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-[15px] font-bold text-on-surface">
          Lịch học hôm nay
        </h3>
        <button
          onClick={() => setActiveTab('study-calendar')}
          className="text-[12px] font-medium text-primary hover:underline flex items-center gap-1"
        >
          <span>Xem cả tuần</span>
          <Icon name="chevron_right" size={14} />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        {schedule.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low border border-surface-container-high/30 transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0">
                <Icon
                  name={item.icon}
                  size={17}
                  className={item.status === 'action' ? 'text-primary' : 'text-on-surface-variant'}
                />
              </div>

              <div className="flex flex-col min-w-0">
                <span className="text-[13px] font-semibold text-on-surface truncate">
                  {item.title}
                </span>
                <span className="text-[11px] text-on-surface-variant truncate">
                  {item.time} · {item.room}
                </span>
              </div>
            </div>

            <div className="shrink-0">
              {item.status === 'completed' && (
                <span className="inline-flex items-center gap-1 text-[11px] font-medium text-secondary bg-secondary-container/30 px-2 py-0.5 rounded-full">
                  <Icon name="check" size={12} />
                  {item.statusText}
                </span>
              )}

              {item.status === 'action' && (
                <button
                  type="button"
                  onClick={() => setActiveTab('quiz')}
                  className="px-3 py-1 rounded-lg bg-primary text-on-primary text-[11px] font-semibold hover:bg-primary/90 transition-colors shadow-2xs"
                >
                  {item.statusText}
                </button>
              )}

              {item.status === 'upcoming' && (
                <span className="text-[11px] font-medium text-on-surface-variant bg-surface-container px-2 py-0.5 rounded-full">
                  {item.statusText}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
