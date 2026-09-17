import React from "react";
import { useApp } from "../../context/AppContext";
import Icon from "../ui/Icon";

export default function MobileNav({ isDrawerOpen, onCloseDrawer }) {
  const { activeTab, setActiveTab, setSettingsModalOpen, user } = useApp();

  const navTabs = [
    { id: "home", label: "Home", icon: "home" },
    {
      id: "courses",
      label: "Khóa học",
      icon: "menu_book",
      matchTabs: ["courses", "course-detail"],
    },
    { id: "quiz", label: "Quiz", icon: "quiz" },
    { id: "study-calendar", label: "Lịch học", icon: "calendar_month" },
    { id: "ai-companion", label: "AI Mentor", icon: "psychology" },
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
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 h-16 bg-[#0b1220] border-t border-[#1d2b42] flex items-center justify-around px-2 z-40 shadow-[0_-2px_10px_rgba(0,0,0,0.2)]">
        {navTabs.map((tab) => {
          const active = isCurrentActive(tab);
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center justify-center py-1 px-2 rounded-xl transition-all ${
                active
                  ? "text-white font-bold"
                  : "text-[#a8b4c7] hover:text-white"
              }`}
            >
              <div
                className={`p-1 rounded-lg ${
                  active ? "bg-[#2563eb] text-white" : ""
                }`}
              >
                <Icon name={tab.icon} size={20} fill={active} />
              </div>
              <span className="text-[10px] tracking-tight mt-0.5">
                {tab.label}
              </span>
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
          <div className="relative w-72 max-w-[80vw] h-full bg-[#0b1220] flex flex-col justify-between p-4 shadow-2xl z-10 animate-in slide-in-from-left duration-200">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#1d2b42]">
                <div className="flex items-center gap-2">
                  <img
                    alt="Học Cùng CTT"
                    className="h-7 w-auto object-contain"
                    src={user.logoUrl}
                  />
                  <span className="font-title text-title text-white font-bold">
                    HỌC CÙNG CTT
                  </span>
                </div>
                <button
                  onClick={onCloseDrawer}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[#a8b4c7] hover:bg-[#17263b] hover:text-white"
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
                          ? "bg-[#2563eb] text-white font-semibold"
                          : "text-[#a8b4c7] hover:bg-[#17263b] hover:text-white"
                      }`}
                    >
                      <Icon name={item.icon} size={20} />
                      <span className="font-label-md text-label-md">
                        {item.label}
                      </span>
                    </button>
                  );
                })}

                <div className="h-px bg-[#1d2b42] my-2" />

                <button
                  onClick={() => {
                    setSettingsModalOpen(true);
                    onCloseDrawer();
                  }}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-left text-[#a8b4c7] hover:bg-[#17263b] hover:text-white"
                >
                  <Icon name="settings" size={20} />
                  <span className="font-label-md text-label-md">
                    Cài đặt hệ thống
                  </span>
                </button>
              </div>
            </div>

            {/* User tag */}
            <button
              type="button"
              onClick={() => {
                setSettingsModalOpen(true);
                onCloseDrawer();
              }}
              className="w-full p-3 rounded-xl bg-[#17263b] flex items-center gap-3 text-left hover:bg-[#1d4ed8] transition-colors"
              aria-label="Mở cài đặt hồ sơ"
            >
              <div className="w-8 h-8 rounded-full bg-[#2563eb] text-white flex items-center justify-center font-bold">
                <Icon name="person" size={18} />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-label-md font-bold text-white truncate">
                  {user.name}
                </span>
                <span className="font-label-sm text-label-sm text-[#a8b4c7] truncate">
                  {user.role}
                </span>
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
