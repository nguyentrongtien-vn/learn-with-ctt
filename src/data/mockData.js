export const currentUser = {
  name: "Nguyễn Trọng Tiến",
  role: "CS K65 EIU",
  school: "Đại học Bách Khoa Hà Nội",
  cohort: "K65 CNTT",
  semester: "HK1 2024–2025",
  academicWeek: "Tuần 7/15",
  streakDays: 12,
  rank: "Top 5% EIU K65",
  overallMastery: 68,
  passedObjectives: 28,
  totalObjectives: 40,
  avatar: null,
  logoUrl: "https://lh3.googleusercontent.com/aida/AEtjO1UmFkSZfqWzs-75PVohlWXJ9kW-fgFGDi_adF0sCUvOR2I4OTEbTmzbY3u_TNhs9_6iHBT76FxgkI8cCjA9axnJwj1r4CQUN1Wum6C5afdR2sjGv9DyKueIWpN-Y72PKrEkbcTmwhWNYgTj8_MCEBpQWgz5n3wBp9JX5sK1aD_96Hl2ksPZ-ICiobWw7GxOaBvQymODmpiHo5IEHwaq5J5taMjVnzQVqlgdlWmG6xLXHdH_sH7ewDjyLjmP"
};

export const coursesList = [
  {
    id: "cs201",
    code: "CS201",
    title: "Cấu trúc Dữ liệu & Giải thuật",
    credits: 3,
    lecturer: "PGS. TS. Trần Tuấn Anh",
    progressWeek: "Tuần 11/16",
    mastery: 68,
    targetMastery: 75,
    passedObjectives: 28,
    totalObjectives: 40,
    labCount: 14,
    colorAccent: "primary-container",
    statusBadge: "Đang học",
    weakConcept: {
      topic: "Tree Traversal: Preorder, Inorder & Postorder recursion",
      mastery: 32,
      severity: "critical",
      label: "Điểm yếu cần bù đắp (32% hiểu rõ)"
    },
    nextSession: {
      title: "Tree Traversal: Preorder & Inorder",
      duration: "15p"
    }
  },
  {
    id: "ma110",
    code: "MA110",
    title: "Toán rời rạc ứng dụng CNTT",
    credits: 3,
    lecturer: "TS. Lê Bá Cường",
    progressWeek: "Tuần 11/16",
    mastery: 54,
    targetMastery: 70,
    passedObjectives: 19,
    totalObjectives: 35,
    labCount: 8,
    colorAccent: "tertiary-container",
    statusBadge: "Cần cải thiện",
    weakConcept: {
      topic: "Quan hệ tương đương & Hàm sinh đại số",
      mastery: 45,
      severity: "moderate",
      label: "Cần luyện thêm (45% hiểu rõ)"
    },
    nextSession: {
      title: "Đồ thị Euler & Hamilton",
      duration: "20p"
    }
  },
  {
    id: "cs202",
    code: "CS202",
    title: "Lập trình Hướng đối tượng (Java/C++)",
    credits: 3,
    lecturer: "ThS. Vũ Thị Hương",
    progressWeek: "Tuần 11/16",
    mastery: 82,
    targetMastery: 85,
    passedObjectives: 34,
    totalObjectives: 40,
    labCount: 12,
    colorAccent: "secondary-container",
    statusBadge: "Nắm vững",
    weakConcept: {
      topic: "Design Patterns: Factory & Observer Pattern",
      mastery: 72,
      severity: "low",
      label: "Củng cố nâng cao (72% hiểu rõ)"
    },
    nextSession: {
      title: "Java Streams & Lambda Refactor",
      duration: "10p"
    }
  }
];

export const weakConceptsRanked = [
  {
    id: "tree-traversal",
    rank: "01",
    name: "Tree Traversal",
    vietnamese: "Duyệt Cây Nhị Phân",
    course: "CS201",
    mastery: 32,
    severity: "critical",
    levelBadge: "🔴 Cấp thiết",
    detail: "Làm sai 4/6 câu hỏi gần đây (In-order & Post-order recursion stack)."
  },
  {
    id: "queue-layout",
    rank: "02",
    name: "Queue Layout & Circular Buffer",
    vietnamese: "Bộ đệm hàng đợi vòng",
    course: "CS201",
    mastery: 45,
    severity: "moderate",
    levelBadge: "🟠 Trung bình",
    detail: "Nhầm lẫn điều kiện tràn hàng đợi (front == (rear + 1) % MAX)."
  },
  {
    id: "recursion-depth",
    rank: "03",
    name: "Recursion & Stack Depth",
    vietnamese: "Ngăn xếp đệ quy & Điều kiện dừng",
    course: "MA110",
    mastery: 62,
    severity: "reinforce",
    levelBadge: "🟡 Cần củng cố",
    detail: "Cần tối ưu bài toán Tháp Hà Nội & Fibonacci có bộ nhớ đệm (Memoization)."
  }
];

export const cs201Detail = {
  courseId: "cs201",
  code: "CS201",
  title: "DATA STRUCTURES & ALGORITHMS",
  vietnameseTitle: "Cấu trúc Dữ liệu & Giải thuật",
  credits: 3,
  mastery: 68,
  lecturesCount: 4,
  semester: "Học kỳ II · 2024",
  documents: [
    {
      id: "doc-1",
      filename: "Lecture_01_Arrays_and_Memory.pdf",
      coreConcepts: "12 khái niệm cốt lõi",
      status: "Đã kết nối",
      synced: true,
      size: "2.4 MB"
    },
    {
      id: "doc-2",
      filename: "Lecture_02_LinkedList_and_Pointers.pdf",
      coreConcepts: "9 khái niệm cốt lõi",
      status: "Đã kết nối",
      synced: true,
      size: "1.8 MB"
    },
    {
      id: "doc-3",
      filename: "Lecture_03_Stack_Queue_Recursion.pdf",
      coreConcepts: "15 khái niệm cốt lõi",
      status: "Đã kết nối",
      synced: true,
      size: "3.1 MB"
    },
    {
      id: "doc-4",
      filename: "Lecture_06_Binary_Trees.pdf",
      coreConcepts: "18 khái niệm cốt lõi",
      status: "Mới nạp · Cần đồng bộ",
      synced: false,
      size: "4.5 MB"
    }
  ],
  knowledgeTree: [
    {
      topic: "Tree Traversal (Preorder, Inorder, Postorder)",
      mastery: 32,
      status: "critical",
      totalQuestions: 18,
      correctQuestions: 6,
      subtopics: ["Pre-order (Root-L-R)", "In-order (L-Root-R)", "Post-order (L-R-Root)", "Call Stack Visualization"]
    },
    {
      topic: "Stack & Queue Data Structures",
      mastery: 45,
      status: "moderate",
      totalQuestions: 20,
      correctQuestions: 9,
      subtopics: ["LIFO Principle", "FIFO Queue", "Circular Array Implementation"]
    },
    {
      topic: "Linked Lists & Pointer Arithmetic",
      mastery: 85,
      status: "good",
      totalQuestions: 25,
      correctQuestions: 21,
      subtopics: ["Singly Linked List", "Doubly Linked List", "Cycle Detection (Floyd's)"]
    },
    {
      topic: "Arrays & Contiguous Memory Allocation",
      mastery: 92,
      status: "mastered",
      totalQuestions: 22,
      correctQuestions: 20,
      subtopics: ["Static Array", "Dynamic Vector Growth", "Cache Locality"]
    }
  ],
  aiDiagnostic: {
    summary: "Qua phân tích 18 bài đánh giá thích ứng gần nhất, hệ số sai lệch tập trung 66.7% ở nhánh Duyệt cây đệ quy. Bạn thường xác định nhầm nút được duyệt trước khi stack quay lui (backtrack).",
    recommendation: "Làm đề trắc nghiệm thích ứng 10 câu với thuật toán chẩn đoán CTT để nhận diện rào cản nhận thức (cognitive bottleneck) và nhận hướng dẫn Socratic tương tác.",
    targetTopic: "Tree Traversal",
    estimatedTime: "12 phút"
  }
};

export const calendarSchedule = [
  {
    day: "Thứ 2",
    date: "21/10",
    events: [
      { time: "07:30 - 11:30", code: "CS201", title: "Cấu trúc Dữ liệu & Giải thuật", room: "D9-401", type: "lecture" },
      { time: "14:00 - 16:30", code: "SELF", title: "Tự học Thư viện Tạ Quang Bửu", room: "Phòng 302", type: "study" }
    ]
  },
  {
    day: "Thứ 3",
    date: "22/10",
    isToday: true,
    events: [
      { time: "09:30 - 11:30", code: "CS202", title: "Lập trình OOP Java", room: "TC-203", type: "lecture" },
      { time: "18:00 - 18:20", code: "AI-REVIEW", title: "Tree Traversal Review (Spaced Repetition)", room: "CTT AI Companion", type: "ai-scheduled", highlight: true }
    ]
  },
  {
    day: "Thứ 4",
    date: "23/10",
    events: [
      { time: "07:30 - 11:30", code: "CS201", title: "Thực hành DSA Lab", room: "C9-301", type: "lab" },
      { time: "14:00 - 16:30", code: "MA110", title: "Toán rời rạc", room: "D3-201", type: "lecture" }
    ]
  },
  {
    day: "Thứ 5",
    date: "24/10",
    events: [
      { time: "09:00 - 10:00", code: "AI-REVIEW", title: "Ôn tập Queue & Buffer Layout", room: "CTT App", type: "ai-scheduled" },
      { time: "15:30 - 17:30", code: "SPORT", title: "Bóng rổ CLB Bách Khoa", room: "Sân vận động", type: "activity" }
    ]
  },
  {
    day: "Thứ 6",
    date: "25/10",
    events: [
      { time: "09:30 - 11:30", code: "MA110", title: "Toán rời rạc", room: "TC-405", type: "lecture" },
      { time: "18:00 - 18:30", code: "AI-REVIEW", title: "Pre-Exam Diagnostic Check", room: "CTT AI", type: "ai-scheduled" }
    ]
  },
  {
    day: "Thứ 7",
    date: "26/10",
    events: [
      { time: "09:00 - 11:00", code: "EXAM", title: "MINI-TEST DSA Lab (Chương 1–5)", room: "Phòng máy C9-301", type: "exam" }
    ]
  },
  {
    day: "Chủ Nhật",
    date: "27/10",
    events: [
      { time: "19:00 - 20:00", code: "RECAP", title: "Tổng kết tuần & Kế hoạch tuần 8", room: "CTT App", type: "study" }
    ]
  }
];
