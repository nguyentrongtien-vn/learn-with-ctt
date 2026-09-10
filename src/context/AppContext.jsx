import React, { createContext, useContext, useState, useEffect } from 'react';
import { currentUser as initialUser, coursesList as initialCourses, cs201Detail, calendarSchedule } from '../data/mockData';
import { initialQuizQuestions } from '../data/quizData';
import { initialChatMessages, aiKnowledgeContext } from '../data/chatData';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Navigation
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'courses' | 'course-detail' | 'quiz' | 'study-calendar' | 'ai-companion'
  const [activeCourseId, setActiveCourseId] = useState('cs201');
  const [settingsModalOpen, setSettingsModalOpen] = useState(false);
  const [syncModalOpen, setSyncModalOpen] = useState(false);
  const [addCourseModalOpen, setAddCourseModalOpen] = useState(false);

  // User & Courses
  const [user, setUser] = useState(initialUser);
  const [courses, setCourses] = useState(initialCourses);

  // Quiz state
  const [quizQuestions, setQuizQuestions] = useState(initialQuizQuestions);
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(2); // Question 3 (0-indexed 2)
  const [quizTimeLeft, setQuizTimeLeft] = useState(135); // 02:15
  const [isQuizTimerRunning, setIsQuizTimerRunning] = useState(true);
  const [quizCompletedModalOpen, setQuizCompletedModalOpen] = useState(false);

  // Timer countdown
  useEffect(() => {
    let timer;
    if (activeTab === 'quiz' && isQuizTimerRunning && quizTimeLeft > 0) {
      timer = setInterval(() => {
        setQuizTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [activeTab, isQuizTimerRunning, quizTimeLeft]);

  // AI Chat state
  const [chatMessages, setChatMessages] = useState(initialChatMessages);
  const [isAiTyping, setIsAiTyping] = useState(false);

  // Calendar State
  const [calendarOptimized, setCalendarOptimized] = useState(false);
  const [calendarLocked, setCalendarLocked] = useState(false);
  const [calendarViewMode, setCalendarViewMode] = useState('week'); // 'month' | 'week' | 'day'

  // Dark Mode State
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('ctt-theme') : null;
    if (saved) return saved === 'dark';
    return typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ctt-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ctt-theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Quiz Actions
  const handleSelectQuizAnswer = (qIndex, answerKey) => {
    setQuizQuestions((prev) => {
      const updated = [...prev];
      const q = updated[qIndex];
      const isCorrect = answerKey === q.correctAnswer;
      updated[qIndex] = {
        ...q,
        selectedAnswer: answerKey,
        isAnswered: true,
        isCorrect: isCorrect
      };
      return updated;
    });
  };

  const handleNextQuestion = () => {
    if (activeQuestionIndex < quizQuestions.length - 1) {
      setActiveQuestionIndex(activeQuestionIndex + 1);
    } else {
      setQuizCompletedModalOpen(true);
    }
  };

  const handlePrevQuestion = () => {
    if (activeQuestionIndex > 0) {
      setActiveQuestionIndex(activeQuestionIndex - 1);
    }
  };

  const handleJumpToQuestion = (index) => {
    if (index >= 0 && index < quizQuestions.length) {
      setActiveQuestionIndex(index);
    }
  };

  // Switch to AI Companion directly with quiz context
  const handleAskCompanionFromQuiz = () => {
    const currQ = quizQuestions[activeQuestionIndex];
    const userPrompt = `Mình đang làm câu ${currQ.id}: "${currQ.questionVi}". Tại sao chọn ${currQ.selectedAnswer || 'A'} lại chưa chính xác?`;
    
    setChatMessages((prev) => [
      ...prev,
      {
        id: `msg-${Date.now()}`,
        sender: 'user',
        senderName: user.name,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        content: userPrompt
      }
    ]);

    setActiveTab('ai-companion');

    // Socratic AI replies after brief delay
    setIsAiTyping(true);
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          id: `msg-${Date.now() + 1}`,
          sender: 'ai',
          senderName: 'CTT Companion (Socratic)',
          badge: 'Live-Tutor',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          content: `Trong câu hỏi này: **"${currQ.questionVi}"**, thuật toán đang khảo sát là **Preorder (Tiền thứ tự)**.\n\nNhắc lại quy ước:\n- **Pre-order:** Root được thăm trước nhất.\n- **In-order:** Left subtree được duyệt trước rồi mới đến Root.\n- **Post-order:** Cả hai cây con trái & phải được duyệt xong rồi mới tới Root.\n\nBạn có nhận thấy điểm khác biệt mấu chốt giữa thời điểm thực hiện thao tác trên nút gốc của 3 phương pháp này không?`,
          chips: [
            "Hiểu rồi, mình nhầm với Inorder",
            "Cho mình xem code minh họa",
            "Quay lại làm tiếp bài trắc nghiệm"
          ]
        }
      ]);
      setIsAiTyping(false);
    }, 900);
  };

  // Send message in AI Companion
  const handleSendMessage = (text) => {
    if (!text.trim()) return;

    const newMsg = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      senderName: user.name,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      content: text
    };

    setChatMessages((prev) => [...prev, newMsg]);
    setIsAiTyping(true);

    setTimeout(() => {
      let replyContent = "Mình đã ghi nhận câu hỏi của bạn. Cùng xem xét từng bước nhé: theo phương pháp Socratic, hãy thử nhớ lại cấu trúc bộ nhớ của ngăn xếp (Stack Frame). Khi hàm đệ quy được gọi, địa chỉ trở về được lưu ở đâu?";
      let chips = ["Lưu trên đỉnh Call Stack", "Lưu vào Heap", "Luyện tập bài tập liên quan"];

      if (text.includes("Call Stack") || text.includes("ngăn xếp")) {
        replyContent = "Chính xác! Mỗi lần gọi hàm `traverse(node)`, một frame mới được đẩy lên đỉnh Call Stack. Chỉ khi frame của cây con bên trái return, chương trình mới tiếp tục thực hiện câu lệnh kế tiếp.";
        chips = ["Vậy Preorder in giá trị khi nào?", "Xem sơ đồ cây", "Quay lại Quiz"];
      } else if (text.includes("C++") || text.includes("code")) {
        replyContent = "Dưới đây là khung hàm C++ chuẩn:\n```cpp\nvoid preorder(Node* root) {\n    if (!root) return;\n    cout << root->val << \" \"; // 1. Xử lý Root trước\n    preorder(root->left);     // 2. Đi sang Left\n    preorder(root->right);    // 3. Đi sang Right\n}\n```\nBạn thấy dòng `cout` nằm ở bước 1 chứ?";
        chips = ["Đã rõ ràng!", "Thế còn Inorder thì sao?", "Quay lại làm bài trắc nghiệm"];
      } else if (text.includes("Quiz") || text.includes("trắc nghiệm")) {
        setActiveTab('quiz');
        setIsAiTyping(false);
        return;
      }

      setChatMessages((prev) => [
        ...prev,
        {
          id: `msg-${Date.now() + 1}`,
          sender: 'ai',
          senderName: 'CTT Companion (Socratic)',
          badge: 'Socratic-AI',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
          content: replyContent,
          chips: chips
        }
      ]);
      setIsAiTyping(false);
    }, 1000);
  };

  const contextValue = {
    // Navigation
    activeTab,
    setActiveTab,
    activeCourseId,
    setActiveCourseId,
    settingsModalOpen,
    setSettingsModalOpen,
    syncModalOpen,
    setSyncModalOpen,
    addCourseModalOpen,
    setAddCourseModalOpen,
    // Data
    user,
    setUser,
    courses,
    setCourses,
    cs201Detail,
    calendarSchedule,
    aiKnowledgeContext,
    // Quiz
    quizQuestions,
    activeQuestionIndex,
    quizTimeLeft,
    isQuizTimerRunning,
    setIsQuizTimerRunning,
    quizCompletedModalOpen,
    setQuizCompletedModalOpen,
    handleSelectQuizAnswer,
    handleNextQuestion,
    handlePrevQuestion,
    handleJumpToQuestion,
    handleAskCompanionFromQuiz,
    // AI Chat
    chatMessages,
    isAiTyping,
    handleSendMessage,
    // Calendar
    calendarOptimized,
    setCalendarOptimized,
    calendarLocked,
    setCalendarLocked,
    calendarViewMode,
    setCalendarViewMode,
    // Theme
    isDarkMode,
    toggleDarkMode
  };

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
