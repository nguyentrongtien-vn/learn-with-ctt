import React from "react";
import { useApp } from "../../../context/AppContext";
import Icon from "../../../components/ui/Icon";

export default function QuizNavigationFooter() {
  const {
    quizQuestions,
    activeQuestionIndex,
    handlePrevQuestion,
    handleNextQuestion,
    quizMode,
    handleAskCompanionFromQuiz,
  } = useApp();

  if (quizMode === "exam") {
    return (
      <div className="bg-surface-container-lowest rounded-2xl px-4 py-3 shadow-sm border border-surface-container-high/40 flex items-center justify-center gap-3 sm:gap-4 shrink-0 select-none">
        <button
          type="button"
          onClick={handlePrevQuestion}
          disabled={activeQuestionIndex === 0}
          className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-surface-container-low hover:bg-surface-container disabled:opacity-40 disabled:cursor-not-allowed text-on-surface font-label-md text-label-md font-bold transition-all active:scale-[0.98] border border-surface-container-high/40"
        >
          <Icon name="arrow_back" size={16} />
          <span>Chuyển sang câu trước</span>
        </button>

        <button
          type="button"
          onClick={handleNextQuestion}
          className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-extrabold transition-all shadow-sm active:scale-[0.98]"
        >
          <span>
            {activeQuestionIndex === quizQuestions.length - 1
              ? "Hoàn thành bài thi"
              : "Chuyển sang câu sau"}
          </span>
          <Icon name="arrow_forward" size={16} />
        </button>
      </div>
    );
  }

  const total = quizQuestions.length;
  const correctCount = quizQuestions.filter(
    (q) => q.isAnswered && q.isCorrect,
  ).length;
  const incorrectCount = quizQuestions.filter(
    (q) => q.isAnswered && !q.isCorrect,
  ).length;
  const unattemptedCount = total - correctCount - incorrectCount;
  const answeredPercent = Math.round(
    ((correctCount + incorrectCount) / total) * 100,
  );

  return (
    <div className="bg-surface-container-lowest rounded-2xl px-4 py-3 shadow-sm border border-surface-container-high/40 flex flex-col gap-2.5 shrink-0 select-none">
      <div className="flex items-center justify-between flex-wrap gap-2.5">
        <button
          type="button"
          onClick={handlePrevQuestion}
          disabled={activeQuestionIndex === 0}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-surface-container-low hover:bg-surface-container disabled:opacity-40 disabled:cursor-not-allowed text-on-surface font-label-md text-label-md font-bold transition-all active:scale-[0.98] border border-surface-container-high/40"
        >
          <Icon name="arrow_back" size={16} />
          <span>Câu trước</span>
        </button>

        {/* Bridge to Socratic AI Tutor */}
        <button
          type="button"
          onClick={handleAskCompanionFromQuiz}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-primary-container to-indigo-600 hover:from-primary hover:to-indigo-700 text-on-primary font-label-md text-label-md font-extrabold transition-all active:scale-[0.98] shadow-sm card-shadow-glow-primary"
        >
          <Icon name="smart_toy" size={18} />
          <span>Hỏi CTT Companion</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/20 uppercase font-bold">
            Socratic
          </span>
        </button>

        <button
          type="button"
          onClick={handleNextQuestion}
          className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-primary-container hover:bg-primary text-on-primary font-label-md text-label-md font-extrabold transition-all shadow-sm active:scale-[0.98]"
        >
          <span>
            {activeQuestionIndex === total - 1
              ? "Nộp bài thi"
              : "Câu tiếp theo"}
          </span>
          <Icon name="arrow_forward" size={16} />
        </button>
      </div>

      {/* Overview stats bar */}
      <div className="flex items-center justify-between pt-2 border-t border-surface-container-high/40 flex-wrap gap-2">
        <div className="flex items-center gap-2 text-label-sm">
          <span className="font-bold text-on-surface-variant uppercase tracking-wider text-[11px]">
            Tổng quan:
          </span>
          <span className="text-on-surface text-[12px] font-medium">
            {total} câu hỏi ·{" "}
            <span className="text-secondary font-bold">
              {correctCount} đúng
            </span>{" "}
            · <span className="text-error font-bold">{incorrectCount} sai</span>{" "}
            ·{" "}
            <span className="text-on-surface-variant font-medium">
              {unattemptedCount} chưa làm
            </span>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-28 bg-surface-container-highest h-2 rounded-full overflow-hidden">
            <div
              className="h-full bg-primary-container rounded-full transition-all duration-300"
              style={{ width: `${answeredPercent}%` }}
            />
          </div>
          <span className="font-label-sm text-[12px] text-on-surface font-extrabold">
            {correctCount + incorrectCount}/{total}
          </span>
        </div>
      </div>
    </div>
  );
}
