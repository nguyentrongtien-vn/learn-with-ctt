import React from 'react';
import { useApp } from '../../../context/AppContext';
import Icon from '../../../components/ui/Icon';

export default function WeeklyGrid({ onSelectSession }) {
  const { calendarSchedule, calendarOptimized } = useApp();

  const timeSlots = [
    '07:00',
    '08:00',
    '09:00',
    '10:00',
    '11:00',
    '12:00',
    '13:00',
    '14:00',
    '15:00',
    '16:00',
    '17:00',
    '18:00',
    '19:00',
    '20:00'
  ];

  const getEventBadge = (type) => {
    switch (type) {
      case 'exam':
        return { label: 'BÀI THI / MINI-TEST', bg: 'bg-rose-600 dark:bg-rose-700', text: 'text-white', border: 'border-rose-700' };
      case 'ai-scheduled':
        return { label: 'AI REVIEW', bg: 'bg-purple-600 dark:bg-purple-700', text: 'text-white', border: 'border-purple-700' };
      case 'lab':
        return { label: 'THỰC HÀNH LAB', bg: 'bg-teal-600 dark:bg-teal-700', text: 'text-white', border: 'border-teal-700' };
      case 'lecture':
        return { label: 'LÝ THUYẾT', bg: 'bg-blue-600 dark:bg-blue-700', text: 'text-white', border: 'border-blue-700' };
      default:
        return { label: 'TỰ HỌC', bg: 'bg-amber-600 dark:bg-amber-700', text: 'text-white', border: 'border-amber-700' };
    }
  };

  return (
    <div className="w-full bg-surface-container-lowest rounded-2xl border border-surface-container-high/60 shadow-sm overflow-hidden flex flex-col select-none">
      {/* 1. Google Calendar Sticky Day Headers */}
      <div className="grid grid-cols-[60px_repeat(7,1fr)] sm:grid-cols-[72px_repeat(7,1fr)] border-b border-surface-container-high/60 bg-surface-container-low/40">
        {/* Timezone / GMT+7 corner */}
        <div className="flex items-center justify-center border-r border-surface-container-high/40 text-[11px] font-semibold text-on-surface-variant/80">
          GMT+7
        </div>

        {/* 7 Days Columns */}
        {calendarSchedule.map((dayItem, idx) => {
          const isToday = dayItem.isToday;
          const dayShort = dayItem.day.replace('Thứ ', 'T').replace('Chủ Nhật', 'CN');

          return (
            <div
              key={idx}
              className={`flex flex-col items-center py-3 border-r border-surface-container-high/30 last:border-r-0 transition-colors ${
                isToday ? 'bg-primary/5' : ''
              }`}
            >
              <span className={`text-[12px] font-bold tracking-wider uppercase ${isToday ? 'text-primary' : 'text-on-surface-variant'}`}>
                {dayShort}
              </span>

              {/* Big Circular Date (Google Calendar iconic circle) */}
              <div
                className={`mt-1 w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold text-lg sm:text-xl transition-transform hover:scale-105 ${
                  isToday
                    ? 'bg-primary text-white shadow-md'
                    : 'text-on-surface hover:bg-surface-container'
                }`}
              >
                {dayItem.date.split('/')[0]}
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. Main Calendar Body with Time Guide & Event Blocks */}
      <div className="overflow-x-auto">
        <div className="grid grid-cols-[60px_repeat(7,1fr)] sm:grid-cols-[72px_repeat(7,1fr)] min-w-[880px] relative">
          {/* Left Column: Time Axis Labels */}
          <div className="flex flex-col border-r border-surface-container-high/40 bg-surface-container-low/20">
            {timeSlots.map((time, tIdx) => (
              <div
                key={tIdx}
                className="h-24 sm:h-28 pr-2 pt-1 text-right text-[11px] sm:text-[12px] font-semibold text-on-surface-variant border-b border-surface-container-high/30"
              >
                {time}
              </div>
            ))}
          </div>

          {/* 7 Day Columns containing Events */}
          {calendarSchedule.map((dayItem, dIdx) => {
            const isToday = dayItem.isToday;

            return (
              <div
                key={dIdx}
                className={`relative flex flex-col border-r border-surface-container-high/30 last:border-r-0 ${
                  isToday ? 'bg-primary/5' : ''
                }`}
              >
                {/* Horizontal hour lines background */}
                <div className="absolute inset-0 flex flex-col pointer-events-none">
                  {timeSlots.map((_, lIdx) => (
                    <div
                      key={lIdx}
                      className="h-24 sm:h-28 border-b border-surface-container-high/25 w-full"
                    />
                  ))}
                </div>

                {/* Google Calendar Current Time Red Line (For Today) */}
                {isToday && (
                  <div className="absolute top-[48%] left-0 right-0 z-20 flex items-center pointer-events-none">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500 -ml-1.5 shadow-sm" />
                    <div className="h-[2px] bg-red-500 flex-1 shadow-sm" />
                  </div>
                )}

                {/* Events Container */}
                <div className="relative z-10 p-1.5 sm:p-2 flex flex-col gap-2.5 flex-1 min-h-[600px]">
                  {dayItem.events.map((evt, eIdx) => {
                    const badge = getEventBadge(evt.type);
                    const isAi = evt.type === 'ai-scheduled';

                    return (
                      <div
                        key={eIdx}
                        onClick={() => onSelectSession(evt)}
                        className={`p-3 rounded-xl cursor-pointer transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-98 flex flex-col justify-between gap-2 border-l-4 ${badge.bg} ${badge.text} ${badge.border}`}
                      >
                        {/* Top: Code & Tag */}
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-[11px] font-extrabold tracking-wider uppercase opacity-95">
                            {evt.code}
                          </span>
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-black/20 text-white flex items-center gap-1">
                            {isAi && <Icon name="auto_awesome" size={12} />}
                            {badge.label}
                          </span>
                        </div>

                        {/* Title: Big, clear & bold */}
                        <div className="text-[13px] sm:text-[14px] font-bold leading-snug line-clamp-2 drop-shadow-2xs">
                          {evt.title}
                        </div>

                        {/* Bottom: Time & Room with icons */}
                        <div className="flex items-center justify-between text-[11px] sm:text-[12px] opacity-95 font-medium pt-1 border-t border-white/20">
                          <span className="flex items-center gap-1">
                            <Icon name="schedule" size={13} />
                            <span>{evt.time}</span>
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="location_on" size={13} />
                            <span>{evt.room}</span>
                          </span>
                        </div>
                      </div>
                    );
                  })}

                  {/* Empty day free-slot hint when AI optimized */}
                  {calendarOptimized && dayItem.events.length === 0 && (
                    <div className="border-2 border-dashed border-primary/30 rounded-xl p-4 text-center my-auto flex flex-col items-center justify-center gap-1.5 bg-primary/5 text-primary">
                      <Icon name="event_available" size={22} />
                      <span className="text-[13px] font-bold">Giờ tự học tự do</span>
                      <span className="text-[11px] text-on-surface-variant">CTT AI đã tối ưu</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
