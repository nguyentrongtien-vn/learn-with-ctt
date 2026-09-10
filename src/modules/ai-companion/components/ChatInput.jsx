import React, { useState } from 'react';
import Icon from '../../../components/ui/Icon';

export default function ChatInput({ onSendMessage }) {
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;
    onSendMessage(inputText);
    setInputText('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const quickPrompts = [
    'Giải thích trực quan Call Stack',
    'Cho ví dụ mẫu C++',
    'Tạo câu hỏi kiểm tra lại'
  ];

  return (
    <div className="relative z-10 pt-2 border-t border-surface-container-high/40 flex flex-col gap-2 shrink-0">
      {/* Quick Prompt Chips */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-label-sm">
        <span className="text-on-surface-variant font-semibold text-[11px] shrink-0">
          Gợi ý nhanh:
        </span>
        {quickPrompts.map((prompt, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => onSendMessage(prompt)}
            className="px-2.5 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface text-[11px] font-medium shrink-0 transition-colors"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Input area */}
      <div className="flex items-center gap-2 bg-surface-container-low p-1.5 rounded-2xl border border-surface-container-high/60 focus-within:ring-2 focus-within:ring-primary focus-within:bg-surface-container-lowest transition-all">
        <textarea
          rows={1}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Hỏi CTT Companion về khái niệm hoặc nhờ giải thích câu sai..."
          className="flex-1 bg-transparent px-3 py-1.5 text-on-surface placeholder:text-on-surface-variant focus:outline-none resize-none font-body-md text-body-md max-h-24"
        />

        <button
          type="button"
          onClick={handleSend}
          disabled={!inputText.trim()}
          className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-primary shadow-xs transition-all active:scale-95 shrink-0"
          aria-label="Gửi tin nhắn"
        >
          <Icon name="send" size={18} />
        </button>
      </div>
    </div>
  );
}
