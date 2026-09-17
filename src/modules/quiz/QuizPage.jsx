import React from "react";
import { useApp } from "../../context/AppContext";
import QuizHeader from "./components/QuizHeader";
import QuestionCard from "./components/QuestionCard";
import QuizNavigationFooter from "./components/QuizNavigationFooter";
import QuizSidebarProgress from "./components/QuizSidebarProgress";
import QuizSummaryModal from "./components/QuizSummaryModal";

export default function QuizPage() {
  const {
    quizQuestions,
    quizCompletedModalOpen,
    setQuizCompletedModalOpen,
    setActiveTab,
    handleJumpToQuestion,
    setQuizMode,
    quizMode,
    resetQuiz,
  } = useApp();

  const total = quizQuestions.length;
  const correct = quizQuestions.filter(
    (q) => q.isAnswered && q.isCorrect,
  ).length;
  const incorrect = quizQuestions.filter(
    (q) => q.isAnswered && !q.isCorrect,
  ).length;
  const unattempted = total - correct - incorrect;
  const percentage = Math.round((correct / total) * 100);

  const handleRestartQuiz = () => {
    resetQuiz();
  };

  const handleGoHome = () => {
    setQuizCompletedModalOpen(false);
    setQuizMode("practice");
    setActiveTab("home");
  };

  return (
    <div
      className={`flex flex-col lg:flex-row w-full gap-5 select-none max-w-6xl mx-auto py-1 ${
        quizMode === "exam"
          ? "min-h-screen bg-background p-3 sm:p-5 lg:p-6"
          : ""
      }`}
    >
      {/* Left Workspace: Header + Question Card + Footer */}
      <div className="flex-1 flex flex-col justify-start min-w-0 gap-4">
        <QuizHeader />
        <QuestionCard />
        <QuizNavigationFooter />
      </div>

      {/* Progress and history stay available in regular practice only. */}
      {quizMode !== "exam" && <QuizSidebarProgress />}

      {/* Summary Modal */}
      <QuizSummaryModal
        isOpen={quizCompletedModalOpen}
        onClose={() => setQuizCompletedModalOpen(false)}
        onRestart={handleRestartQuiz}
        onGoHome={handleGoHome}
        stats={{ total, correct, incorrect, unattempted, percentage }}
      />
    </div>
  );
}
