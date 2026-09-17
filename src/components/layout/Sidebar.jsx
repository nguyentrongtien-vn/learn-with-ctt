import React from "react";
import { useApp } from "../../context/AppContext";
import Icon from "../ui/Icon";

export default function Sidebar() {
  const { activeTab, setActiveTab, setSettingsModalOpen, user } = useApp();

  const navItems = [
    { id: "home", label: "Trang chủ", icon: "home", matchTabs: ["home"] },
    {
      id: "courses",
      label: "Khóa học",
      icon: "menu_book",
      count: "3",
      matchTabs: ["courses", "course-detail"],
    },
    {
      id: "study-calendar",
      label: "Thời khóa biểu",
      icon: "calendar_today",
      matchTabs: ["study-calendar"],
    },
    {
      id: "quiz",
      label: "Luyện tập thích ứng",
      icon: "quiz",
      dot: true,
      matchTabs: ["quiz"],
    },
    {
      id: "ai-companion",
      label: "Trợ lý CTT AI",
      icon: "smart_toy",
      matchTabs: ["ai-companion"],
    },
  ];

  const isCurrentActive = (item) => {
    return item.matchTabs.includes(activeTab);
  };

  return (
    <aside className="relative hidden lg:flex w-64 h-screen flex-shrink-0 overflow-hidden bg-[#0b1733] flex-col justify-between p-3.5 z-30 border-r border-[#1d2b42] select-none">
      <div
        className="pointer-events-none absolute inset-0 opacity-90"
        style={{
          background:
            "linear-gradient(180deg, #0b1733 0%, #0d1b3b 55%, #101f46 100%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-[145%] rotate-[5deg] rounded-[50%_50%_0_0] bg-[#142b5b]/65 blur-[1px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-28 -left-16 h-52 w-[135%] -rotate-[4deg] rounded-[50%_50%_0_0] bg-[#0d1d40]/85 blur-[2px]"
        aria-hidden="true"
      />
      {/* Brand & Workspace Switcher */}
      <div className="relative z-10 flex flex-col gap-6">
        <button
          onClick={() => setActiveTab("home")}
          className="flex items-center gap-3 px-2.5 py-1.5 rounded-xl hover:bg-[#17263b] text-left transition-all group"
        >
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center border border-primary/20 shrink-0 group-hover:scale-105 transition-transform">
            <img
              alt="Học Cùng CTT"
              className="h-6 w-auto object-contain"
              src={user.logoUrl}
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-title text-[15px] text-white font-bold tracking-tight truncate">
              Học Cùng CTT
            </span>
            <span className="text-[11px] text-[#a8b4c7] font-medium">EIU</span>
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
                aria-current={active ? "page" : undefined}
                className={`flex items-center justify-between px-3 py-2 rounded-xl text-left transition-all ${
                  active
                    ? "bg-[#2563eb] text-white font-semibold shadow-2xs"
                    : "text-[#a8b4c7] hover:bg-[#17263b] hover:text-white font-medium"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Icon
                    name={item.icon}
                    size={20}
                    fill={active}
                    className={active ? "text-white" : "text-[#a8b4c7]"}
                  />
                  <span className="text-[14px] truncate">{item.label}</span>
                </div>

                {item.count && (
                  <span
                    className={`text-[11px] font-semibold px-2 py-0.5 rounded-md ${
                      active
                        ? "bg-blue-700/40 text-white"
                        : "bg-[#17263b] text-[#a8b4c7]"
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
      <div className="relative z-10 pt-3 border-t border-[#1d2b42] flex items-center justify-between px-1">
        <button
          type="button"
          onClick={() => setSettingsModalOpen(true)}
          className="flex items-center gap-2.5 min-w-0 rounded-lg px-1 py-1 text-left hover:bg-[#17263b] transition-colors"
          aria-label="Mở cài đặt hồ sơ"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden bg-primary-container/20 border border-primary/20 shrink-0">
            <img
              src={user.avatarUrl}
              alt={user.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[13px] font-semibold text-white truncate">
              {user.name}
            </span>
            <span className="text-[10px] text-[#a8b4c7] truncate">
              {user.studentId}
            </span>
          </div>
        </button>

        <button
          onClick={() => setSettingsModalOpen(true)}
          className="w-8 h-8 rounded-lg flex items-center justify-center text-[#a8b4c7] hover:text-white hover:bg-[#17263b] transition-colors"
          aria-label="Cài đặt"
        >
          <Icon name="settings" size={18} />
        </button>
      </div>
    </aside>
  );
}
