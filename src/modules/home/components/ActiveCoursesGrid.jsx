import React from 'react';
import { useApp } from '../../../context/AppContext';
import { coursesList } from '../../../data/mockData';
import Icon from '../../../components/ui/Icon';

export default function ActiveCoursesGrid() {
  const { setActiveTab, setActiveCourseId } = useApp();

  const handleOpenCourse = (courseId) => {
    setActiveCourseId(courseId);
    setActiveTab('course-detail');
  };

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <h3 className="text-[15px] font-bold text-on-surface">
          Khóa học của bạn
        </h3>
        <button
          onClick={() => setActiveTab('courses')}
          className="text-[12px] font-medium text-primary hover:underline flex items-center gap-1"
        >
          <span>Tất cả môn</span>
          <Icon name="chevron_right" size={14} />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {coursesList.map((course) => (
          <div
            key={course.id}
            onClick={() => handleOpenCourse(course.id)}
            className="p-4 rounded-xl bg-surface-container-low/60 hover:bg-surface-container-low border border-surface-container-high/30 hover:border-surface-container-high/60 cursor-pointer transition-all flex flex-col justify-between gap-3 group shadow-2xs"
          >
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold text-primary px-2 py-0.5 rounded-md bg-primary/10">
                  {course.code}
                </span>
                <span className="text-[11px] font-semibold text-on-surface-variant">
                  {course.progress}%
                </span>
              </div>

              <h4 className="text-[14px] font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-1">
                {course.name}
              </h4>

              <p className="text-[11px] text-on-surface-variant">
                {course.lecturer} · {course.credits} tín chỉ
              </p>
            </div>

            {/* Subtle progress bar */}
            <div className="flex flex-col gap-1">
              <div className="w-full h-1 rounded-full bg-surface-container overflow-hidden">
                <div
                  className="h-full bg-primary rounded-full transition-all duration-300"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[10px] text-on-surface-variant pt-0.5">
                <span>{course.documentsCount} tài liệu</span>
                <span className="text-secondary font-medium">EIU</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
