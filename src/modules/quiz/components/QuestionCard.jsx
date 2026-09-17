import React from "react";
import { useApp } from "../../../context/AppContext";
import Icon from "../../../components/ui/Icon";

export default function QuestionCard() {
  const {
    quizQuestions,
    activeQuestionIndex,
    handleSelectQuizAnswer,
    quizMode,
    toggleQuestionReviewMark,
  } = useApp();
  const q = quizQuestions[activeQuestionIndex];
  const isExamMode = quizMode === "exam";

  if (!q) return null;

  return (
    <div className="flex flex-col gap-4 select-none">
      {/* Question Statement Box */}
      <section className="bg-surface-container-lowest rounded-2xl p-5 sm:p-6 shadow-sm border border-surface-container-high/40 relative overflow-hidden shrink-0">
        <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
        <div className="flex items-start justify-between gap-4 pl-2">
          <div className="flex flex-col gap-2 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-3 py-0.5 rounded-full bg-primary/10 text-primary font-bold text-[12px] uppercase tracking-wider">
                CÂU HỎI {String(q.id).padStart(2, "0")}
              </span>
              <span className="text-outline text-xs">·</span>
              <span className="text-[13px] text-on-surface-variant font-medium">
                Độ khó: {q.difficulty}
              </span>
            </div>

            <h2 className="text-lg sm:text-xl text-on-surface font-bold tracking-tight mt-0.5 leading-snug">
              {q.questionEn}
            </h2>

            <p className="text-[14px] text-on-surface-variant leading-relaxed">
              {q.questionVi}
            </p>
          </div>

          {isExamMode ? (
            <button
              type="button"
              onClick={() => toggleQuestionReviewMark(activeQuestionIndex)}
              className={`shrink-0 w-11 h-11 rounded-2xl flex items-center justify-center border shadow-2xs transition-colors ${
                q.isMarkedForReview
                  ? "bg-amber-100 text-amber-500 border-amber-300"
                  : "bg-surface-container-low text-primary border-surface-container-high/40 hover:bg-amber-50 hover:text-amber-500"
              }`}
              aria-label={
                q.isMarkedForReview
                  ? "Bỏ đánh dấu câu hỏi"
                  : "Đánh dấu câu hỏi để xem lại"
              }
              title={
                q.isMarkedForReview
                  ? "Bỏ đánh dấu câu hỏi"
                  : "Đánh dấu câu hỏi để xem lại"
              }
            >
              <Icon name="star" size={22} fill={q.isMarkedForReview} />
            </button>
          ) : (
            <div className="shrink-0 w-11 h-11 rounded-2xl bg-surface-container-low flex items-center justify-center text-primary border border-surface-container-high/40 shadow-2xs">
              <Icon name="quiz" size={22} />
            </div>
          )}
        </div>
      </section>

      {/* Options Grid (2x2) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 shrink-0">
        {q.options.map((opt) => {
          const isSelected = q.selectedAnswer === opt.key;
          const isCorrect =
            !isExamMode && q.isAnswered && opt.key === q.correctAnswer;
          const isWrong =
            !isExamMode && q.isAnswered && isSelected && !q.isCorrect;

          let borderStrip = null;
          let badge = null;
          let letterBg = "bg-surface-container text-on-surface-variant";
          let ringStyle =
            "border-surface-container-high/50 hover:bg-surface-container-low/70 hover:border-primary/40";

          if (isExamMode) {
            if (isSelected) {
              borderStrip = (
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-amber-500 rounded-l-2xl" />
              );
              ringStyle =
                "border-amber-400/70 bg-amber-50 ring-2 ring-amber-300/60";
              letterBg = "bg-amber-500 text-white";
            }
          } else if (q.isAnswered) {
            if (isCorrect) {
              borderStrip = (
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-secondary rounded-l-2xl" />
              );
              letterBg = "bg-secondary text-white";
              ringStyle =
                "border-secondary/50 bg-secondary-container/20 ring-2 ring-secondary/30";
              badge = (
                <span className="inline-flex items-center gap-1 text-[12px] font-bold text-on-secondary-container bg-secondary-container px-3 py-0.5 rounded-full whitespace-nowrap">
                  <Icon name="check" size={14} />
                  Đáp án chính xác
                </span>
              );
            } else if (isWrong) {
              borderStrip = (
                <div className="absolute left-0 top-0 bottom-0 w-2 bg-error rounded-l-2xl" />
              );
              letterBg = "bg-error text-white";
              ringStyle =
                "border-error/50 bg-error-container/20 ring-2 ring-error/30";
              badge = (
                <span className="inline-flex items-center gap-1 text-[12px] font-bold text-on-error-container bg-error-container px-3 py-0.5 rounded-full whitespace-nowrap">
                  <Icon name="close" size={14} />
                  Bạn đã chọn
                </span>
              );
            }
          } else if (isSelected) {
            ringStyle = "border-primary bg-primary/10 ring-2 ring-primary/40";
            letterBg = "bg-primary text-white";
          }

          return (
            <button
              key={opt.key}
              type="button"
              onClick={() =>
                handleSelectQuizAnswer(activeQuestionIndex, opt.key)
              }
              className={`relative bg-surface-container-lowest rounded-2xl p-4 sm:p-5 shadow-2xs border flex flex-col justify-between text-left transition-all active:scale-[0.99] ${ringStyle}`}
            >
              {borderStrip}
              <div className="flex items-start justify-between gap-2 pl-2">
                <div className="flex items-center gap-3">
                  <span
                    className={`w-8 h-8 rounded-xl text-[14px] flex items-center justify-center font-extrabold shadow-2xs shrink-0 ${letterBg}`}
                  >
                    {opt.key}
                  </span>
                  <span className="text-[14px] sm:text-[15px] font-bold text-on-surface">
                    {opt.text}
                  </span>
                </div>
                {!isExamMode && badge}
              </div>

              <p className="text-[13px] text-on-surface-variant pl-2 mt-2 leading-snug">
                {opt.viText}
              </p>
            </button>
          );
        })}
      </div>

      {/* Socratic Diagnostic Feedback Panel */}
      {q.isAnswered && !isExamMode && (
        <section className="bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-surface-container-high/40 flex flex-col gap-3 shrink-0 animate-in fade-in duration-200">
          <div className="flex items-center justify-between pb-2.5 border-b border-surface-container-high/40">
            <div className="flex items-center gap-2">
              {q.isCorrect ? (
                <span className="w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container flex items-center justify-center shrink-0">
                  <Icon name="check" size={17} />
                </span>
              ) : (
                <span className="w-7 h-7 rounded-full bg-error-container text-on-error-container flex items-center justify-center shrink-0">
                  <Icon name="close" size={17} />
                </span>
              )}
              <span className="text-[14px] font-bold text-on-surface">
                {q.isCorrect
                  ? "Chính xác · Phân tích khái niệm"
                  : "Chưa chính xác · Phân tích nguyên nhân"}
              </span>
            </div>

            <div className="flex items-center gap-1 text-primary font-bold text-[13px]">
              <Icon name="psychology" size={18} />
              <span>CTT AI Diagnostic</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center text-left">
            <div className="md:col-span-8 flex flex-col gap-1">
              <p className="text-[13px] sm:text-[14px] text-on-surface leading-relaxed">
                {q.explanation}
              </p>
            </div>

            <div className="md:col-span-4 bg-surface-container-low/80 rounded-xl p-3.5 flex flex-col gap-2 border border-surface-container-high/30">
              <div className="flex items-center justify-between">
                <span className="text-[12px] text-on-surface-variant font-semibold">
                  Năng lực chủ đề
                </span>
                <span
                  className={`text-[13px] font-extrabold ${q.isCorrect ? "text-secondary" : "text-primary"}`}
                >
                  {q.isCorrect ? "+5%" : "+3%"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-secondary rounded-full transition-all duration-700"
                    style={{ width: `${q.isCorrect ? 40 : 35}%` }}
                  />
                </div>
                <span className="text-[12px] text-on-surface font-extrabold">
                  {q.isCorrect ? "40%" : "35%"}
                </span>
              </div>

              <span className="text-[11px] text-on-surface-variant truncate font-medium">
                Tree Traversal (CS201)
              </span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
