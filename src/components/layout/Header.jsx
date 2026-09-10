import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import Icon from '../ui/Icon';

export default function Header({ onToggleMobileMenu }) {
  const {
    user,
    setSettingsModalOpen,
    activeTab,
    setActiveTab,
    isDarkMode,
    toggleDarkMode,
    handleJumpToQuestion
  } = useApp();

  const [searchFocused, setSearchFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [notificationOpen, setNotificationOpen] = useState(false);

  const getPageTitle = () => {
    switch (activeTab) {
      case 'home':
        return 'Tổng quan học tập';
      case 'courses':
        return 'Khóa học của bạn';
      case 'course-detail':
        return 'Chi tiết môn học CS201';
      case 'quiz':
        return 'Trắc nghiệm thích ứng';
      case 'study-calendar':
        return 'Thời khóa biểu thông minh';
      case 'ai-companion':
        return 'CTT Socratic AI Mentor';
      default:
        return 'HỌC CÙNG CTT';
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const query = searchValue.toLowerCase();
    if (query.includes('tree') || query.includes('cây') || query.includes('traversal')) {
      handleJumpToQuestion(2);
      setActiveTab('quiz');
      setSearchValue('');
    } else if (query.includes('toán') || query.includes('ma110')) {
      setActiveTab('courses');
      setSearchValue('');
    } else if (query.includes('lịch') || query.includes('tkb')) {
      setActiveTab('study-calendar');
      setSearchValue('');
    } else if (query.includes('ai') || query.includes('mentor') || query.includes('hỏi')) {
      setActiveTab('ai-companion');
      setSearchValue('');
    } else {
      setActiveTab('courses');
      setSearchValue('');
    }
  };

  return (
    <header className="h-14 flex-shrink-0 bg-surface-container-lowest/60 backdrop-blur-md flex items-center justify-between px-4 lg:px-7 border-b border-surface-container-high/30 z-20 select-none">
      {/* Left: Mobile Toggle & Page Title */}
      <div className="flex items-center gap-3 min-w-0">
        <button
          onClick={onToggleMobileMenu}
          className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors"
          aria-label="Mở menu"
        >
          <Icon name="menu" size={20} />
        </button>

        <div className="flex items-center gap-2 min-w-0">
          <h1 className="text-[15px] font-bold text-on-surface truncate">
            {getPageTitle()}
          </h1>
        </div>
      </div>

      {/* Center: Global Search Bar (Linear / Raycast pill) */}
      <div className="hidden md:flex flex-1 max-w-sm mx-6">
        <form onSubmit={handleSearchSubmit} className="relative w-full">
          <div
            className={`flex items-center gap-2 w-full px-3 py-1.5 rounded-lg bg-surface-container-low/60 border transition-all ${
              searchFocused
                ? 'border-primary/50 bg-surface-container-lowest shadow-2xs'
                : 'border-surface-container-high/30 hover:border-surface-container-high/60'
            }`}
          >
            <Icon name="search" size={16} className="text-on-surface-variant/80 shrink-0" />
            <input
              type="text"
              placeholder="Tìm kiếm nhanh... (Tree Traversal, CS201)"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
              className="w-full bg-transparent text-on-surface text-[13px] placeholder:text-on-surface-variant/60 focus:outline-none"
            />
            <kbd className="hidden lg:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-on-surface-variant/70 bg-surface-container/60 rounded border border-surface-container-high/30 shrink-0">
              ⌘K
            </kbd>
          </div>
        </form>
      </div>

      {/* Right side: Week Indicator, Theme Switcher & Notification */}
      <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
        <span className="hidden sm:inline-block text-[12px] font-medium text-on-surface-variant mr-1">
          {user.academicWeek}
        </span>

        {/* Notifications Button & Dropdown */}
        <div className="relative">
          <button
            onClick={() => setNotificationOpen(!notificationOpen)}
            className="w-8 h-8 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low flex items-center justify-center transition-colors relative"
            aria-label="Thông báo"
          >
            <Icon name="notifications" size={18} />
            <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-error" />
          </button>

          {notificationOpen && (
            <div className="absolute right-0 mt-2 w-76 bg-surface-container-lowest rounded-xl shadow-lg border border-surface-container-high/60 p-3 z-50 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-surface-container-high/40 text-[12px] font-semibold text-on-surface">
                <span>Thông báo</span>
                <span className="text-[10px] text-error font-medium">1 bài ôn tập</span>
              </div>

              <div
                onClick={() => {
                  handleJumpToQuestion(2);
                  setActiveTab('quiz');
                  setNotificationOpen(false);
                }}
                className="p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer flex flex-col gap-1"
              >
                <div className="flex items-center justify-between text-[11px] font-medium text-primary">
                  <span>Tree Traversal · CS201</span>
                  <span>10 phút</span>
                </div>
                <p className="text-[11px] text-on-surface-variant leading-relaxed">
                  Luyện tập 5 câu hỏi nhanh để củng cố kiến thức Call Stack.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Theme Toggle Button */}
        <button
          onClick={toggleDarkMode}
          className="w-8 h-8 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low flex items-center justify-center transition-colors"
          title={isDarkMode ? 'Giao diện sáng' : 'Giao diện tối'}
          aria-label="Đổi giao diện"
        >
          <Icon name={isDarkMode ? 'light_mode' : 'dark_mode'} size={18} />
        </button>
      </div>
    </header>
  );
}
