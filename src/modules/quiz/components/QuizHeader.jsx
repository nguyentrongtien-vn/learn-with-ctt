import React from "react";
import { useApp } from "../../../context/AppContext";
import Icon from "../../../components/ui/Icon";

export default function QuizHeader() {
  const {
    quizQuestions,
    activeQuestionIndex,
    quizTimeLeft,
    handleJumpToQuestion,
    setActiveTab,
    quizMode,
    setQuizMode,
  } = useApp();

  const minutes = Math.floor(quizTimeLeft / 60);
  const seconds = quizTimeLeft % 60;
  const timeFormatted = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

  const currentQ = quizQuestions[activeQuestionIndex];

  return (
    <header className="bg-surface-container-lowest rounded-2xl p-4 sm:p-5 shadow-sm border border-surface-container-high/40 flex flex-col gap-3.5 shrink-0 select-none">
      {/* Top row */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 border border-primary/20">
            <Icon name="account_tree" size={20} />
          </div>
          <div className="flex items-center gap-2 truncate">
            <span className="text-[13px] text-primary font-bold">CS201</span>
            <span className="text-outline text-xs">/</span>
            <span className="text-[14px] sm:text-[15px] text-on-surface font-bold truncate">
              {currentQ?.topic || "Tree Traversal"}
            </span>
            <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[12px] font-bold">
              Câu {activeQuestionIndex + 1}/{quizQuestions.length}
            </span>
          </div>
        </div>

        {/* Timer & Exit */}
        <div className="flex items-center gap-3 shrink-0">
          <div
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl font-mono text-sm sm:text-base font-bold tracking-tight shadow-2xs border ${
              quizTimeLeft < 60
                ? "bg-error-container text-error border-error/30 animate-pulse"
                : "bg-surface-container-low text-primary border-surface-container-high/50"
            }`}
          >
            <Icon name="timer" size={18} />
            <span>{timeFormatted}</span>
          </div>

          {quizMode !== "exam" && (
            <button
              onClick={() => {
                setQuizMode("practice");
                setActiveTab("course-detail");
              }}
              className="flex items-center gap-1.5 px-3 py-1.5 text-on-surface-variant hover:text-error hover:bg-error-container/30 rounded-xl transition-colors text-[13px] font-semibold border border-surface-container-high/30"
              type="button"
            >
              <Icon name="logout" size={17} />
              <span className="hidden sm:inline">Thoát</span>
            </button>
          )}
        </div>
      </div>

      {/* Bottom row: Question Navigator 1 to 10 */}
      <div className="flex items-center justify-between pt-3 border-t border-surface-container-high/40 overflow-x-auto gap-3">
        <span className="text-[12px] text-on-surface-variant font-bold uppercase tracking-wider shrink-0">
          Điều hướng:
        </span>
        <div className="flex items-center gap-2 overflow-x-auto py-1">
          {quizQuestions.map((q, idx) => {
            const isActive = idx === activeQuestionIndex;
            let btnClass =
              "bg-surface-container-low text-on-surface-variant hover:bg-surface-container border border-surface-container-high/40";
            let iconOrDot = null;

            if (isActive) {
              btnClass =
                "bg-primary text-white font-extrabold shadow-sm ring-2 ring-primary/40 ring-offset-2 border-transparent scale-105";
              iconOrDot = <span className="text-[10px] ml-0.5">●</span>;
            } else if (q.isAnswered && quizMode !== "exam") {
              if (q.isCorrect) {
                btnClass =
                  "bg-secondary/15 text-secondary font-bold hover:ring-1 hover:ring-secondary border-secondary/30";
                iconOrDot = <Icon name="check" size={13} />;
              } else {
                btnClass =
                  "bg-error-container/60 text-error font-bold hover:ring-1 hover:ring-error border-error/30";
                iconOrDot = <Icon name="close" size={13} />;
              }
            }

            return (
              <button
                key={q.id}
                onClick={() => handleJumpToQuestion(idx)}
                type="button"
                title={`Câu ${q.id}: ${q.topic}`}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl text-[13px] font-bold flex items-center justify-center gap-0.5 transition-all shrink-0 active:scale-95 ${btnClass}`}
              >
                <span>{q.id}</span>
                {iconOrDot}
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
}
