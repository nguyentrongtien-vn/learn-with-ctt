import React from 'react';
import { useApp } from '../../context/AppContext';
import Icon from '../ui/Icon';

export default function Sidebar() {
  const { activeTab, setActiveTab, setSettingsModalOpen, user } = useApp();

  const navItems = [
    { id: 'home', label: 'Trang chủ', icon: 'home', matchTabs: ['home'] },
    { id: 'courses', label: 'Khóa học', icon: 'menu_book', count: '3', matchTabs: ['courses', 'course-detail'] },
    { id: 'study-calendar', label: 'Thời khóa biểu', icon: 'calendar_today', matchTabs: ['study-calendar'] },
    { id: 'quiz', label: 'Luyện tập thích ứng', icon: 'quiz', dot: true, matchTabs: ['quiz'] },
    { id: 'ai-companion', label: 'Trợ lý CTT AI', icon: 'smart_toy', matchTabs: ['ai-companion'] }
  ];

  const isCurrentActive = (item) => {
    return item.matchTabs.includes(activeTab);
  };

  return (
    <aside className="hidden lg:flex w-64 h-screen flex-shrink-0 bg-surface-container-lowest/80 backdrop-blur-md flex-col justify-between p-3.5 z-30 border-r border-surface-container-high/40 select-none">
      {/* Brand & Workspace Switcher */}
      <div className="flex flex-col gap-6">
        <button
          onClick={() => setActiveTab('home')}
          className="flex items-center gap-3 px-2.5 py-1.5 rounded-xl hover:bg-surface-container-low/80 text-left transition-all group"
        >
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 group-hover:scale-105 transition-transform">
            <img
              alt="Học Cùng CTT"
              className="h-6 w-auto object-contain"
              src={user.logoUrl}
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-title text-[15px] text-on-surface font-bold tracking-tight truncate">
              Học Cùng CTT
            </span>
            <span className="text-[11px] text-on-surface-variant font-medium">
              EIU
            </span>
          </div>
        </button>

        {/* Minimal Navigation List */}
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const active = isCurrentActive(item);

            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                aria-current={active ? 'page' : undefined}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all ${active
                    ? 'bg-primary-container/15 text-primary font-semibold shadow-2xs'
                    : 'text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface font-medium'
                  }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Icon
                    name={item.icon}
                    size={20}
                    fill={active}
                    className={active ? 'text-primary' : 'text-on-surface-variant'}
                  />
                  <span className="text-[14px] truncate">
                    {item.label}
                  </span>
                </div>

                {item.count && (
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${active
                        ? 'bg-primary/10 text-primary'
                        : 'bg-surface-container text-on-surface-variant'
                      }`}
                  >
                    {item.count}
                  </span>
                )}

                {item.dot && !active && (
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/70" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Minimal User & Settings Bar */}
      <div className="pt-3 border-t border-surface-container-high/40 flex items-center justify-between px-1">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-primary-container/20 border border-primary/20 shrink-0">
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[13px] font-semibold text-on-surface truncate">
              {user.name}
            </span>
            <span className="text-[10px] text-on-surface-variant truncate">
              {user.studentId}
            </span>
          </div>
        </div>

        <button
          onClick={() => setSettingsModalOpen(true)}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors"
          aria-label="Cài đặt"
        >
          <Icon name="settings" size={18} />
        </button>
      </div>
    </aside>
  );
}
