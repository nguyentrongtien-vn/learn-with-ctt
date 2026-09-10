import React from 'react';
import { useApp } from '../../../context/AppContext';
import Icon from '../../../components/ui/Icon';

export default function AgendaListView({ onSelectSession }) {
  const { calendarSchedule, calendarOptimized } = useApp();

  return (
    <div className="flex flex-col gap-4">
      {calendarSchedule.map((dayItem, idx) => {
        const isToday = dayItem.isToday;

        return (
          <div
            key={idx}
            className={`p-4 rounded-2xl border transition-all ${
              isToday
                ? 'bg-primary/5 border-primary/30 ring-1 ring-primary/20'
                : 'bg-surface-container-low/50 border-surface-container-high/30'
            }`}
          >
            {/* Day Title Header */}
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-surface-container-high/30">
              <div className="flex items-center gap-2">
                <span className={`text-[14px] font-bold ${isToday ? 'text-primary' : 'text-on-surface'}`}>
                  {dayItem.day} ({dayItem.date})
                </span>
                {isToday && (
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-primary text-on-primary">
                    Hôm nay
                  </span>
                )}
              </div>

              <span className="text-[12px] text-on-surface-variant font-medium">
                {dayItem.events.length} phiên
              </span>
            </div>

            {/* Events List */}
            {dayItem.events.length > 0 ? (
              <div className="flex flex-col gap-2.5">
                {dayItem.events.map((evt, eIdx) => {
                  const isAi = evt.type === 'ai-scheduled';
                  const isExam = evt.type === 'exam';

                  return (
                    <div
                      key={eIdx}
                      onClick={() => onSelectSession(evt)}
                      className="p-3 rounded-xl bg-surface-container-lowest hover:bg-surface-container border border-surface-container-high/40 cursor-pointer transition-all flex items-center justify-between gap-3 group shadow-2xs"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-1.5 h-10 rounded-full shrink-0 ${
                            isExam
                              ? 'bg-error'
                              : isAi
                              ? 'bg-primary'
                              : 'bg-secondary'
                          }`}
                        />

                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-bold text-primary">
                              {evt.code}
                            </span>
                            {isAi && (
                              <span className="text-[10px] font-semibold text-primary px-1.5 py-0.2 rounded bg-primary/10 flex items-center gap-1">
                                <Icon name="auto_awesome" size={11} />
                                AI Slot
                              </span>
                            )}
                            {isExam && (
                              <span className="text-[10px] font-bold text-error px-1.5 py-0.2 rounded bg-error-container/60">
                                Bài kiểm tra
                              </span>
                            )}
                          </div>

                          <h4 className="text-[13px] font-semibold text-on-surface group-hover:text-primary transition-colors truncate">
                            {evt.title}
                          </h4>

                          <span className="text-[11px] text-on-surface-variant">
                            {evt.time} · {evt.room}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface-variant group-hover:text-primary transition-colors shrink-0"
                      >
                        <Icon name="chevron_right" size={16} />
                      </button>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="py-4 text-center text-[12px] text-on-surface-variant flex items-center justify-center gap-1.5">
                <Icon name="event_available" size={16} />
                <span>Không có tiết học chính khóa (ngày tự học tự do)</span>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
