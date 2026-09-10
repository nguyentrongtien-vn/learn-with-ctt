import React from 'react';
import { useApp } from '../../context/AppContext';
import Icon from '../ui/Icon';

export default function MobileNav({ isDrawerOpen, onCloseDrawer }) {
  const { activeTab, setActiveTab, setSettingsModalOpen, user } = useApp();

  const navTabs = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'courses', label: 'Khóa học', icon: 'menu_book', matchTabs: ['courses', 'course-detail'] },
    { id: 'quiz', label: 'Quiz', icon: 'quiz' },
    { id: 'study-calendar', label: 'Lịch học', icon: 'calendar_month' },
    { id: 'ai-companion', label: 'AI Mentor', icon: 'psychology' }
  ];

  const isCurrentActive = (item) => {
    if (item.matchTabs) {
      return item.matchTabs.includes(activeTab);
    }
    return activeTab === item.id;
  };

  return (
    <>
      {/* Mobile Bottom Navigation Bar (Phone & Tablet) */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-surface-container-lowest/95 backdrop-blur-lg border-t border-surface-container-high/60 flex items-center justify-around px-2 z-40 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        {navTabs.map((tab) => {
          const active = isCurrentActive(tab);
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
                active
                  ? 'text-primary font-bold'
                  : 'text-on-surface-variant hover:text-on-surface'
              }`}
            >
              <div
                className={`p-1 rounded-lg ${
                  active ? 'bg-primary-container/15 text-primary' : ''
                }`}
              >
                <Icon name={tab.icon} size={20} fill={active} />
              </div>
              <span className="text-[10px] tracking-tight mt-0.5">{tab.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Mobile Drawer (Slide out from left) */}
      {isDrawerOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-on-surface/40 backdrop-blur-sm transition-opacity"
            onClick={onCloseDrawer}
          />

          {/* Drawer content */}
          <div className="relative w-72 max-w-[80vw] h-full bg-surface-container-lowest flex flex-col justify-between p-4 shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-surface-container-high/60">
                <div className="flex items-center gap-2">
                  <img
                    alt="Học Cùng CTT"
                    className="h-7 w-auto object-contain"
                    src={user.logoUrl}
                  />
                  <span className="font-title text-title text-on-surface font-bold">
                    HỌC CÙNG CTT
                  </span>
                </div>
                <button
                  onClick={onCloseDrawer}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container"
                >
                  <Icon name="close" size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-1">
                {navTabs.map((item) => {
                  const active = isCurrentActive(item);
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setActiveTab(item.id);
                        onCloseDrawer();
                      }}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all ${
                        active
                          ? 'bg-primary-container text-on-primary font-semibold'
                          : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'
                      }`}
                    >
                      <Icon name={item.icon} size={20} />
                      <span className="font-label-md text-label-md">{item.label}</span>
                    </button>
                  );
                })}

                <div className="h-px bg-surface-container-high my-2" />

                <button
                  onClick={() => {
                    setSettingsModalOpen(true);
                    onCloseDrawer();
                  }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                >
                  <Icon name="settings" size={20} />
                  <span className="font-label-md text-label-md">Cài đặt hệ thống</span>
                </button>
              </div>
            </div>

            {/* User tag */}
            <div className="p-3 rounded-xl bg-surface-container-low flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-bold">
                <Icon name="person" size={18} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-label-md font-bold text-on-surface truncate">
                  {user.name}
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant truncate">
                  {user.role}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
