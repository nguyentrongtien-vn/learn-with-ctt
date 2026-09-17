import React, { useRef, useEffect } from 'react';
import { useApp } from '../../../context/AppContext';
import Icon from '../../../components/ui/Icon';

export default function ChatStream({ onSelectChip }) {
  const { chatMessages, isAiTyping, user } = useApp();
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatMessages, isAiTyping]);

  return (
    <div className="relative z-10 flex-1 min-h-0 flex flex-col gap-3 py-2 overflow-y-auto pr-1">
      {chatMessages.map((msg) => {
        const isUser = msg.sender === 'user';

        if (isUser) {
          return (
            <div key={msg.id} className="flex items-start gap-2.5 justify-end">
              <div className="max-w-[85%] sm:max-w-[76%] rounded-2xl rounded-tr-xs bg-primary text-on-primary px-4 py-3 shadow-sm">
                <div className="flex items-center justify-between gap-4 mb-1 opacity-80 text-label-sm">
                  <span className="font-bold">{msg.senderName || user.name}</span>
                  <span className="text-[11px]">{msg.timestamp}</span>
                </div>
                <p className="font-body-md text-body-md text-on-primary font-medium leading-relaxed whitespace-pre-wrap">
                  {msg.content}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0 mt-1 shadow-xs">
                <Icon name="person" size={16} />
              </div>
            </div>
          );
        }

        // AI message
        return (
          <div key={msg.id} className="flex items-start gap-2.5 justify-start">
            <div className="w-8 h-8 rounded-xl bg-primary-container text-on-primary flex items-center justify-center flex-shrink-0 mt-1 shadow-sm">
              <Icon name="psychology" size={18} />
            </div>

            <div className="max-w-[94%] sm:max-w-[88%] rounded-3xl rounded-tl-xs bg-surface-container-low/80 px-4.5 py-4 shadow-sm text-on-surface border border-surface-container-high/40">
              <div className="flex items-center justify-between gap-3 mb-2 text-on-surface-variant flex-wrap">
                <div className="flex items-center gap-2">
                  <span className="font-label-md text-label-md text-primary font-extrabold">
                    {msg.senderName || 'CTT Socratic Engine'}
                  </span>
                  {msg.badge && (
                    <span className="font-label-sm text-[11px] bg-surface-container px-2 py-0.2 rounded-full text-on-surface-variant font-bold border border-surface-container-high/40">
                      {msg.badge}
                    </span>
                  )}
                </div>
                <span className="text-[11px] text-on-surface-variant font-medium">{msg.timestamp}</span>
              </div>

              {/* Message Content with basic Markdown formatting */}
              <div className="font-body-md text-body-md text-on-surface leading-relaxed whitespace-pre-wrap">
                {msg.content}
              </div>

              {/* Diagnostic points if any */}
              {msg.diagnosticPoints && (
                <div className="space-y-1.5 font-body-sm text-body-sm text-on-surface mt-3">
                  {msg.diagnosticPoints.map((pt, pIdx) => (
                    <div
                      key={pIdx}
                      className={`flex items-start gap-2.5 p-2.5 rounded-xl border ${
                        pt.type === 'error'
                          ? 'bg-surface-container-lowest border-surface-container-high/40'
                          : 'bg-error-container/30 text-on-error-container border-error/20'
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                          pt.type === 'error' ? 'bg-error' : 'bg-on-tertiary-container'
                        }`}
                      />
                      <span>{pt.text}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Suggestion Chips */}
              {msg.chips && msg.chips.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3.5 pt-2.5 border-t border-surface-container-high/40">
                  {msg.chips.map((chip, cIdx) => (
                    <button
                      key={cIdx}
                      type="button"
                      onClick={() => onSelectChip(chip)}
                      className="px-3 py-1 rounded-full bg-surface-container-lowest hover:bg-primary-container hover:text-on-primary text-primary border border-primary/30 font-label-sm text-[12px] font-bold transition-all active:scale-95 shadow-2xs"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Typing indicator */}
      {isAiTyping && (
        <div className="flex items-center gap-2 text-on-surface-variant font-label-sm p-3 animate-pulse">
          <div className="w-7 h-7 rounded-xl bg-primary-container/20 text-primary flex items-center justify-center">
            <Icon name="smart_toy" size={16} />
          </div>
          <span className="font-semibold text-[12px]">CTT Socratic AI đang phân tích rào cản nhận thức...</span>
        </div>
      )}

      <div ref={messagesEndRef} />
    </div>
  );
}
