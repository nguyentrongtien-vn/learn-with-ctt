import React, { useState } from "react";
import StudentsPage from "./StudentsPage";
import StudentDetail from "./StudentDetail";

/**
 * Component gốc cho mục "Sinh viên" — dùng cái này trong route /students.
 * Tự quản lý việc chuyển giữa danh sách và trang chi tiết bằng state nội bộ;
 * nếu bạn dùng react-router, thay setSelectedId bằng navigate(`/students/${id}`)
 * và đọc :id từ useParams() trong StudentDetail thay vì props.
 */
export default function StudentModule() {
  const [selectedId, setSelectedId] = useState(null);

  if (selectedId) {
    return (
      <StudentDetail
        studentId={selectedId}
        onBack={() => setSelectedId(null)}
      />
    );
  }

  return <StudentsPage onOpenStudent={setSelectedId} />;
}
