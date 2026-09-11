import React from "react";
import { useApp } from "../../context/AppContext";
import CourseCard from "./components/CourseCard";
import SyncSISModal from "./components/SyncSISModal";
import AddCourseModal from "./components/AddCourseModal";
import Icon from "../../components/ui/Icon";

export default function CoursesPage() {
  const {
    courses,
    setCourses,
    syncModalOpen,
    setSyncModalOpen,
    addCourseModalOpen,
    setAddCourseModalOpen,
  } = useApp();

  const handleAddCourse = (newCourse) => {
    setCourses((prev) => [...prev, newCourse]);
  };

  return (
    <div className="flex flex-col gap-6 select-none max-w-6xl mx-auto py-2">
      {/* Top Meta & Title Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-surface-container-high/40">
        <div className="flex flex-col">
          <div className="flex items-center gap-2.5 flex-wrap">
            <h1 className="text-xl sm:text-2xl font-bold text-on-surface tracking-tight">
              Khóa học của bạn
            </h1>
            <span className="text-[12px] font-semibold text-primary px-2.5 py-0.5 rounded-full bg-primary/10">
              Học kỳ 2024.2 · EIU
            </span>
          </div>
          <p className="text-[13px] text-on-surface-variant mt-1">
            {courses.length} môn học chính khóa · K14 Kỹ Thuật Phần Mềm · Đại
            học quốc tế Miền Đông
          </p>
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            type="button"
            onClick={() => setSyncModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface text-[13px] font-semibold border border-surface-container-high/50 transition-colors flex items-center gap-2 shadow-2xs"
          >
            <Icon name="sync" size={17} className="text-primary" />
            <span>Đồng bộ từ QAA / SIS</span>
          </button>

          <button
            type="button"
            onClick={() => setAddCourseModalOpen(true)}
            className="px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 text-on-primary text-[13px] font-semibold transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
          >
            <Icon name="add" size={18} />
            <span>Thêm môn học mới</span>
          </button>
        </div>
      </div>

      {/* Primary Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Modals */}
      <SyncSISModal
        isOpen={syncModalOpen}
        onClose={() => setSyncModalOpen(false)}
      />
      <AddCourseModal
        isOpen={addCourseModalOpen}
        onClose={() => setAddCourseModalOpen(false)}
        onAddCourse={handleAddCourse}
      />
    </div>
  );
}
