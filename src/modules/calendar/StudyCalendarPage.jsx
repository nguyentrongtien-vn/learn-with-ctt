import React, { useState } from "react";
import CalendarHeader from "./components/CalendarHeader";
import WeeklyGrid from "./components/WeeklyGrid";
import AgendaListView from "./components/AgendaListView";
import SessionDetailModal from "./components/SessionDetailModal";
import AddStudySchedulePage from "./components/AddStudySchedulePage";
import Icon from "../../components/ui/Icon";

export default function StudyCalendarPage() {
  const [selectedSession, setSelectedSession] = useState(null);
  const [activeView, setActiveView] = useState("grid"); // 'grid' | 'list'
  const [showAddSchedule, setShowAddSchedule] = useState(false);

  const handleJumpToday = () => {
    setActiveView("grid");
  };

  if (showAddSchedule) {
    return <AddStudySchedulePage onBack={() => setShowAddSchedule(false)} />;
  }

  return (
    <div className="calendar-page flex flex-col gap-4 max-[640px]:gap-2 select-none w-full max-w-[1440px] mx-auto py-1">
      {/* 1. Header with Month, Navigation & Toggles */}
      <CalendarHeader
        activeView={activeView}
        setActiveView={setActiveView}
        onJumpToday={handleJumpToday}
        onAddStudySchedule={() => setShowAddSchedule(true)}
      />

      {/* 2. Main Calendar: Weekly Grid (Google Calendar layout) or Agenda List */}
      {activeView === "grid" ? (
        <WeeklyGrid onSelectSession={setSelectedSession} />
      ) : (
        <AgendaListView onSelectSession={setSelectedSession} />
      )}

      {/* 3. Color Categories Legend */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-2 text-[13px] text-on-surface-variant pt-2">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="flex items-center gap-2 font-medium">
            <span className="w-3 h-3 rounded-sm bg-blue-600 shadow-xs" />
            Lý thuyết (Chính khóa)
          </span>
          <span className="flex items-center gap-2 font-medium">
            <span className="w-3 h-3 rounded-sm bg-teal-600 shadow-xs" />
            Thực hành Lab (C9-301)
          </span>
          <span className="flex items-center gap-2 font-medium">
            <span className="w-3 h-3 rounded-sm bg-purple-600 shadow-xs" />
            Ôn tập AI (Spaced Repetition)
          </span>
          <span className="flex items-center gap-2 font-medium">
            <span className="w-3 h-3 rounded-sm bg-rose-600 shadow-xs" />
            Bài thi / Mini-test
          </span>
          <span className="flex items-center gap-2 font-medium">
            <span className="w-3 h-3 rounded-sm bg-amber-600 shadow-xs" />
            Tự học / Hoạt động
          </span>
        </div>

        <div className="flex items-center gap-1.5 text-primary font-semibold text-[12px]">
          <Icon name="verified" size={16} />
          <span>Đồng bộ tự động với không gian EIU</span>
        </div>
      </div>

      {/* 4. Event Detail Modal */}
      <SessionDetailModal
        session={selectedSession}
        onClose={() => setSelectedSession(null)}
      />
    </div>
  );
}
