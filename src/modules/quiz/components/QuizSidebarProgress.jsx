import React from "react";
import { useApp } from "../../../context/AppContext";
import Icon from "../../../components/ui/Icon";

const conceptDetails = {
  "BST Search Order": {
    title: "Tính chất cây tìm kiếm nhị phân",
    body: "Trong BST, các nút bên trái nhỏ hơn nút hiện tại và các nút bên phải lớn hơn nút hiện tại.",
    related: "Left < Root < Right",
  },
  "Inorder Property": {
    title: "Duyệt Inorder trên BST",
    body: "Inorder đi theo thứ tự Left → Root → Right và tạo ra dãy khóa tăng dần trong một BST hợp lệ.",
    related: "Left → Root → Right",
  },
  "Preorder Visit Order": {
    title: "Duyệt Preorder",
    body: "Preorder luôn thăm nút gốc trước, sau đó đi vào cây con trái rồi cây con phải.",
    related: "Root → Left → Right",
  },
  "Postorder Traversal": {
    title: "Duyệt Postorder",
    body: "Postorder xử lý hai cây con trước và chỉ xử lý nút gốc sau cùng.",
    related: "Left → Right → Root",
  },
  "Level Order BFS": {
    title: "Duyệt theo mức bằng BFS",
    body: "Level-order xử lý cây theo từng tầng từ trên xuống dưới và thường sử dụng Queue để lưu các nút chờ xử lý.",
    related: "Queue · FIFO",
  },
};

export default function QuizSidebarProgress() {
  const { quizQuestions, activeQuestionIndex, handleJumpToQuestion } = useApp();
  const currentQ = quizQuestions[activeQuestionIndex];
  const [isConceptVisible, setIsConceptVisible] = React.useState(true);
  const concept = conceptDetails[currentQ?.topic] ?? {
    title: currentQ?.topic || "Khái niệm liên quan",
    body:
      currentQ?.explanation ||
      "Ôn lại định nghĩa và quy tắc cốt lõi liên quan đến câu hỏi này.",
    related: "Tree Traversal · CS201",
  };

  return (
    <aside className="w-full lg:w-80 h-auto lg:self-stretch lg:min-h-0 flex flex-col gap-3 shrink-0 overflow-y-auto lg:overflow-hidden select-none">
      {/* Box 1: YOUR PROGRESS */}
      <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-surface-container-high/40 flex flex-col gap-2.5 shrink-0">
        <div className="flex items-center justify-between">
          <span className="font-label-md text-label-md font-extrabold text-on-surface flex items-center gap-1.5">
            <Icon name="insights" size={18} className="text-primary" />
            TIẾN ĐỘ NĂNG LỰC
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-error-container text-error font-label-sm text-[11px] font-bold border border-error/20">
            🔴 Ưu tiên cao
          </span>
        </div>

        <div className="flex flex-col gap-2 bg-surface-container-low/70 rounded-xl p-3 border border-surface-container-high/30">
          <div className="flex items-center justify-between">
            <span className="font-label-md text-label-md font-bold text-on-surface">
              Tree Traversal
            </span>
            <span className="font-label-md text-label-md font-extrabold text-primary">
              35% Mastery
            </span>
          </div>
          <div className="w-full bg-surface-container-highest h-2 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full w-[35%] transition-all duration-500" />
          </div>
          <p className="font-body-sm text-[11px] text-error flex items-center gap-1 mt-0.5 font-medium">
            <Icon name="warning" size={14} />
            4/6 câu trắc nghiệm gần đây chưa chính xác
          </p>
        </div>
      </div>

      {/* Box 2: AI FEEDBACK */}
      <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-surface-container-high/40 flex flex-col gap-2.5 shrink-0">
        <div className="flex items-center justify-between">
          <span className="font-label-md text-label-md font-extrabold text-on-surface flex items-center gap-1.5">
            <Icon name="error_outline" size={18} className="text-error" />
            AI PHẢN HỒI
          </span>
          <span className="text-[11px] font-bold px-2 py-0.2 rounded-full bg-surface-container text-on-surface-variant">
            Câu {currentQ?.id}
          </span>
        </div>

        <div className="p-3 bg-error-container/30 rounded-xl flex flex-col gap-1.5 border-l-3 border-error">
          <div className="flex items-center gap-1.5 text-error font-label-md font-bold">
            <Icon name="cancel" size={16} />
            <span>
              {currentQ?.isCorrect ? "Đã nắm đúng" : "Lưu ý trọng tâm"}
            </span>
          </div>
          <p className="font-body-sm text-[12px] text-on-surface leading-snug">
            <strong className="text-primary">Preorder:</strong> Root → Left →
            Right
          </p>
          <div className="flex items-center justify-between font-label-sm text-[11px] pt-1.5 border-t border-surface-container-high/40">
            <span className="text-error font-medium truncate max-w-[130px]">
              Bạn chọn:{" "}
              {currentQ?.selectedAnswer
                ? `${currentQ.selectedAnswer}`
                : "Chưa chọn"}
            </span>
            <span className="text-secondary font-bold">
              Đúng: {currentQ?.correctAnswer}
            </span>
          </div>
        </div>
      </div>

      {/* Box 3: CONCEPT */}
      <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-surface-container-high/40 flex flex-col gap-2.5 shrink-0">
        <div className="flex items-center justify-between gap-2">
          <span className="font-label-md text-label-md font-extrabold text-on-surface flex items-center gap-1.5">
            <Icon name="lightbulb" size={18} className="text-primary" />
            CONCEPT
          </span>
          <button
            type="button"
            onClick={() => setIsConceptVisible((visible) => !visible)}
            className="inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-bold text-primary hover:bg-primary/10 transition-colors"
            aria-expanded={isConceptVisible}
          >
            <Icon
              name={isConceptVisible ? "visibility_off" : "visibility"}
              size={15}
            />
            {isConceptVisible ? "Ẩn" : "Hiện"}
          </button>
        </div>

        {isConceptVisible && (
          <div className="flex flex-col gap-2 rounded-xl bg-primary/5 border border-primary/15 p-3">
            <div className="flex items-start gap-2">
              <Icon
                name="account_tree"
                size={17}
                className="mt-0.5 shrink-0 text-primary"
              />
              <p className="text-[12px] font-bold leading-snug text-on-surface">
                {concept.title}
              </p>
            </div>
            <p className="text-[11px] leading-relaxed text-on-surface-variant">
              {concept.body}
            </p>
            <span className="border-t border-primary/15 pt-2 text-[10px] font-bold text-primary">
              {concept.related}
            </span>
          </div>
        )}
      </div>

      {/* Box 4: QUESTION HISTORY */}
      <div className="bg-surface-container-lowest rounded-2xl p-4 shadow-sm border border-surface-container-high/40 flex flex-col gap-2.5 h-[340px] shrink-0 overflow-hidden">
        <div className="flex items-center justify-between shrink-0">
          <span className="font-label-md text-label-md font-extrabold text-on-surface flex items-center gap-1.5">
            <Icon name="history" size={18} className="text-primary" />
            LỊCH SỬ CÂU HỎI
          </span>
          <span className="font-label-sm text-[11px] text-on-surface-variant font-bold">
            {quizQuestions.length} câu
          </span>
        </div>

        <div className="flex flex-col gap-1.5 min-h-0 overflow-y-auto flex-1 pr-0.5">
          {quizQuestions.map((item, idx) => {
            const isActive = idx === activeQuestionIndex;
            let statusBadge = (
              <span className="text-[11px] text-on-surface-variant font-medium">
                ○ Chưa làm
              </span>
            );

            if (isActive) {
              statusBadge = (
                <span className="inline-flex items-center gap-0.5 text-[11px] font-bold text-primary">
                  ● Đang làm
                </span>
              );
            } else if (item.isAnswered) {
              if (item.isCorrect) {
                statusBadge = (
                  <span className="inline-flex items-center gap-0.5 text-[11px] font-bold text-secondary">
                    <Icon name="check" size={13} />
                    Đúng
                  </span>
                );
              } else {
                statusBadge = (
                  <span className="inline-flex items-center gap-0.5 text-[11px] font-bold text-error">
                    <Icon name="close" size={13} />
                    Sai
                  </span>
                );
              }
            }

            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleJumpToQuestion(idx)}
                className={`flex items-center justify-between p-2.5 rounded-xl text-left transition-all active:scale-[0.99] ${
                  isActive
                    ? "bg-primary-container/15 ring-2 ring-primary/40 border border-primary/20"
                    : "bg-surface-container-low/60 hover:bg-surface-container border border-surface-container-high/30"
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span
                    className={`w-6 h-6 rounded-lg flex items-center justify-center font-extrabold text-[11px] shrink-0 ${
                      item.isAnswered && item.isCorrect
                        ? "bg-secondary/20 text-secondary"
                        : item.isAnswered && !item.isCorrect
                          ? "bg-error-container text-error"
                          : isActive
                            ? "bg-primary-container text-on-primary shadow-xs"
                            : "bg-surface-container text-on-surface-variant"
                    }`}
                  >
                    {String(item.id).padStart(2, "0")}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface font-semibold truncate">
                    {item.topic}
                  </span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {item.isMarkedForReview && (
                    <Icon
                      name="star"
                      size={16}
                      fill
                      className="text-amber-500"
                    />
                  )}
                  {statusBadge}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
