import React from 'react';
import { useApp } from '../../context/AppContext';
import ChatStream from './components/ChatStream';
import ChatInput from './components/ChatInput';
import ContextInspector from './components/ContextInspector';
import Icon from '../../components/ui/Icon';

export default function AICompanionPage() {
  const { handleSendMessage } = useApp();

  return (
    <div className="flex h-auto min-w-0 flex-col gap-4 select-none w-full max-w-6xl mx-auto py-1 lg:h-[calc(100vh-7.5rem)] lg:min-h-0 lg:flex-row lg:gap-5">
      {/* Left Main Socratic Chat Area */}
      <section className="flex h-[calc(100svh-8.5rem)] min-h-[420px] max-h-[620px] w-full min-w-0 flex-none flex-col overflow-hidden rounded-2xl border border-surface-container-high/40 bg-surface-container-lowest p-3 shadow-sm sm:p-5 lg:h-auto lg:min-h-0 lg:max-h-none lg:flex-1 lg:w-[68%]">
        {/* Chat Header */}
        <div className="relative z-10 flex items-center justify-between pb-3.5 border-b border-surface-container-high/40 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center shadow-xs shrink-0">
              <Icon name="smart_toy" size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-[16px] font-bold text-on-surface">
                  CTT Companion
                </h2>
                <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-bold">
                  Socratic AI Mentor
                </span>
              </div>
              <p className="text-[12px] text-on-surface-variant line-clamp-1 italic mt-0.5">
                “Không học thay bạn, học cùng bạn · Đồng bộ môn Cấu trúc Dữ liệu &amp; Giải thuật”
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low text-secondary text-[12px] font-semibold border border-surface-container-high/40">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" /> Live Sync
            </span>
          </div>
        </div>

        {/* Chat Stream */}
        <ChatStream onSelectChip={handleSendMessage} />

        {/* Chat Input */}
        <ChatInput onSendMessage={handleSendMessage} />
      </section>

      {/* Right Context Inspector */}
      <ContextInspector />
    </div>
  );
}
