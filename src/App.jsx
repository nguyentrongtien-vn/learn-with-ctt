import React from "react";
import { useApp } from "./context/AppContext";
import Layout from "./components/layout/Layout";
import HomePage from "./modules/home/HomePage";
import CoursesPage from "./modules/courses/CoursesPage";
import CourseDetailPage from "./modules/courses/CourseDetailPage";
import QuizPage from "./modules/quiz/QuizPage";
import AICompanionPage from "./modules/ai-companion/AICompanionPage";
import StudyCalendarPage from "./modules/calendar/StudyCalendarPage";
import SettingsModal from "./modules/settings/SettingsModal";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Feedback from "./components/Feedback";
import Admin from "./Admin/Admin";

export default function App() {
  const {
    activeTab,
    quizMode,
    settingsModalOpen,
    setSettingsModalOpen,
  } = useApp();
  const path = window.location.pathname;

  if (path === "/admin" || path === "/admin/") {
    return <Admin />;
  }

  if (path === "/login" || path === "/login/") {
    return <Login />;
  }

  if (path === "/create-account" || path === "/create-account/") {
    return <CreateAccount />;
  }

  if (path === "/Feedback" || path === "/Feedback/") {
    return <Feedback />;
  }

  if (sessionStorage.getItem("ctt-authenticated") !== "true") {
    return <Login />;
  }

  if (activeTab === "quiz" && quizMode === "exam") {
    return <QuizPage />;
  }

  const renderActiveView = () => {
    switch (activeTab) {
      case "home":
        return <HomePage />;
      case "courses":
        return <CoursesPage />;
      case "course-detail":
        return <CourseDetailPage />;
      case "quiz":
        return <QuizPage />;
      case "ai-companion":
        return <AICompanionPage />;
      case "study-calendar":
        return <StudyCalendarPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <Layout>
      {renderActiveView()}

      {/* Global Settings Modal */}
      <SettingsModal
        isOpen={settingsModalOpen}
        onClose={() => setSettingsModalOpen(false)}
      />
    </Layout>
  );
}
