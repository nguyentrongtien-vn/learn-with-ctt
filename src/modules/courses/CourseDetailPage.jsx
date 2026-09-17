import React, { useState } from "react";
import { useApp } from "../../context/AppContext";
import Icon from "../../components/ui/Icon";
import ProgressBar from "../../components/ui/ProgressBar";
import Modal from "../../components/ui/Modal";

export default function CourseDetailPage() {
  const { setActiveTab, cs201Detail, handleJumpToQuestion, setQuizMode } =
    useApp();
  const [documents, setDocuments] = useState(cs201Detail.documents);
  const [activeFilter, setActiveFilter] = useState("all"); // 'all' | 'weak' | 'mastered'
  const [uploadNotice, setUploadNotice] = useState(null);
  const [practiceModeOpen, setPracticeModeOpen] = useState(false);

  const handleStartQuiz = () => {
    setPracticeModeOpen(true);
  };

  const handleSelectPracticeMode = (mode) => {
    setPracticeModeOpen(false);
    setQuizMode(mode);
    handleJumpToQuestion(2); // Jump to question 3
    setActiveTab("quiz");
  };

  const handleUploadFake = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const newDoc = {
        id: `doc-${Date.now()}`,
        filename: file.name,
        coreConcepts: "Đang phân tích vector embeddings...",
        status: "Đã nạp",
        synced: true,
        size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
      };
      setDocuments((prev) => [newDoc, ...prev]);
      setUploadNotice(`Đã nạp thành công ${file.name}`);
      setTimeout(() => setUploadNotice(null), 3000);
    }
  };

  const filteredKnowledge = cs201Detail.knowledgeTree.filter((item) => {
    if (activeFilter === "weak") return item.mastery < 60;
    if (activeFilter === "mastered") return item.mastery >= 60;
    return true;
  });

  return (
    <div className="flex flex-col gap-6 select-none max-w-6xl mx-auto py-2">
      {/* Top Command & Course Meta Bar */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-3 border-b border-surface-container-high/40">
        <div className="flex flex-col gap-1.5 min-w-0">
          <div className="flex items-center gap-2 text-on-surface-variant">
            <button
              onClick={() => setActiveTab("courses")}
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary hover:underline transition-all group"
            >
              <Icon
                name="arrow_back"
                size={17}
                className="group-hover:-translate-x-0.5 transition-transform"
              />
              <span>Quay lại Khóa học</span>
            </button>
            <span className="text-outline-variant font-medium">/</span>
            <span className="text-[12px] text-on-surface-variant font-semibold uppercase tracking-wider">
              {cs201Detail.semester}
            </span>
          </div>

          <div className="flex items-baseline gap-3 flex-wrap">
            <h1 className="text-xl sm:text-2xl font-bold text-on-surface tracking-tight">
              {cs201Detail.title}{" "}
              <span className="text-primary font-semibold">
                ({cs201Detail.code})
              </span>
            </h1>
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full">
              <span className="w-2 h-2 rounded-full bg-secondary" />
              <span className="text-[12px] font-bold">
                {cs201Detail.mastery}% Mastery · {documents.length} slide PDF đã
                kết nối
              </span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2.5 flex-wrap shrink-0">
          <label className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface text-[13px] font-semibold border border-surface-container-high/50 transition-all cursor-pointer shadow-2xs active:scale-95">
            <Icon name="upload_file" size={18} className="text-primary" />
            <span>Nạp tài liệu PDF</span>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              onChange={handleUploadFake}
            />
          </label>

          <button
            type="button"
            onClick={handleStartQuiz}
            className="px-4 py-2 rounded-xl bg-primary hover:bg-primary/90 text-on-primary text-[13px] font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95"
          >
            <Icon name="auto_awesome" size={18} />
            <span>Tạo đề thích ứng</span>
          </button>
        </div>
      </section>

      {uploadNotice && (
        <div className="p-3.5 rounded-xl bg-secondary-container/40 text-secondary border border-secondary/30 flex items-center gap-2.5 text-[13px] font-semibold animate-in fade-in duration-200">
          <Icon name="check_circle" size={20} />
          <span>{uploadNotice}</span>
        </div>
      )}

      {/* 3 Columns: Materials, Knowledge Tree, Socratic AI */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* COLUMN 1: Learning Materials */}
        <div className="flex flex-col bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-surface-container-high/40 justify-between gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b border-surface-container-high/40">
              <div className="flex items-center gap-2">
                <Icon name="folder_open" size={20} className="text-primary" />
                <h3 className="text-[15px] font-bold text-on-surface">
                  Tài liệu đã nạp
                </h3>
              </div>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                {documents.length} files
              </span>
            </div>

            {/* Material items */}
            <div className="flex flex-col gap-2.5">
              {documents.map((doc) => (
                <div
                  key={doc.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low/70 hover:bg-surface-container border border-surface-container-high/30 transition-all group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0 shadow-2xs group-hover:bg-primary group-hover:text-white transition-colors">
                      <Icon name="picture_as_pdf" size={20} />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <p className="text-[13px] font-semibold text-on-surface truncate">
                        {doc.filename}
                      </p>
                      <p className="text-[11px] text-on-surface-variant truncate">
                        {doc.coreConcepts}
                      </p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-secondary-container/50 text-secondary shrink-0">
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-3 border-t border-surface-container-high/40">
            <p className="text-[11px] text-on-surface-variant text-center font-medium">
              AI liên tục vector hóa tài liệu để sinh câu hỏi bám sát giáo trình
            </p>
          </div>
        </div>

        {/* COLUMN 2: Knowledge Structure & Mastery Map */}
        <div className="flex flex-col bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-surface-container-high/40 justify-between gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between pb-3 border-b border-surface-container-high/40">
              <div className="flex items-center gap-2">
                <Icon name="account_tree" size={20} className="text-primary" />
                <h3 className="text-[15px] font-bold text-on-surface">
                  Cây tri thức
                </h3>
              </div>
              <div className="flex items-center gap-1 bg-surface-container-low p-0.5 rounded-lg border border-surface-container-high/40 text-[11px] font-semibold">
                <button
                  type="button"
                  onClick={() => setActiveFilter("all")}
                  className={`px-2 py-0.5 rounded ${
                    activeFilter === "all"
                      ? "bg-primary text-white"
                      : "text-on-surface-variant"
                  }`}
                >
                  Tất cả
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFilter("weak")}
                  className={`px-2 py-0.5 rounded ${
                    activeFilter === "weak"
                      ? "bg-error text-white"
                      : "text-on-surface-variant"
                  }`}
                >
                  Cần ôn
                </button>
              </div>
            </div>

            {/* Knowledge Topics list */}
            <div className="flex flex-col gap-3">
              {filteredKnowledge.map((item, idx) => {
                const isCritical = item.mastery < 50;
                const isGood = item.mastery >= 80;

                return (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-surface-container-low/70 border border-surface-container-high/30 flex flex-col gap-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-[13px] font-bold text-on-surface truncate">
                        {item.topic}
                      </h4>
                      <span
                        className={`text-[12px] font-extrabold ${
                          isCritical
                            ? "text-error"
                            : isGood
                              ? "text-secondary"
                              : "text-primary"
                        }`}
                      >
                        {item.mastery}%
                      </span>
                    </div>

                    <ProgressBar
                      value={item.mastery}
                      max={100}
                      variant={
                        isCritical ? "error" : isGood ? "secondary" : "primary"
                      }
                      height="h-1.5"
                    />

                    <div className="flex items-center justify-between text-[11px] text-on-surface-variant pt-0.5">
                      <span>
                        Đúng {item.correctQuestions}/{item.totalQuestions} câu
                      </span>
                      {isCritical && (
                        <button
                          type="button"
                          onClick={handleStartQuiz}
                          className="text-error font-bold hover:underline flex items-center gap-0.5"
                        >
                          <span>Luyện ngay</span>
                          <Icon name="arrow_forward" size={13} />
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-3 border-t border-surface-container-high/40 flex items-center justify-between text-[12px] text-on-surface-variant font-medium">
            <span>Độ hoàn thành:</span>
            <span className="text-primary font-bold">68% / 100%</span>
          </div>
        </div>

        {/* COLUMN 3: AI Diagnostic & Targeted Practice */}
        <div className="flex flex-col bg-surface-container-lowest rounded-2xl p-5 shadow-sm border border-surface-container-high/40 justify-between gap-4">
          <div className="flex flex-col gap-3.5">
            <div className="flex items-center justify-between pb-3 border-b border-surface-container-high/40">
              <div className="flex items-center gap-2">
                <Icon name="psychology" size={20} className="text-primary" />
                <h3 className="text-[15px] font-bold text-on-surface">
                  Chẩn đoán CTT AI
                </h3>
              </div>
              <span className="text-[11px] font-bold text-error bg-error-container/60 px-2 py-0.5 rounded-full">
                Tree Traversal
              </span>
            </div>

            {/* Diagnostic Insight Box */}
            <div className="p-3.5 rounded-xl bg-error-container/20 border border-error/25 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-error font-bold text-[13px]">
                <Icon name="warning" size={18} />
                <span>Rào cản nhận thức phát hiện được</span>
              </div>
              <p className="text-[12px] text-on-surface leading-relaxed">
                {cs201Detail.aiDiagnostic.summary}
              </p>
            </div>

            {/* AI Recommendation */}
            <div className="p-3.5 rounded-xl bg-surface-container-low/70 border border-surface-container-high/30 flex flex-col gap-2">
              <div className="flex items-center gap-1.5 text-primary font-bold text-[13px]">
                <Icon name="lightbulb" size={18} />
                <span>Khuyến nghị phương pháp học</span>
              </div>
              <p className="text-[12px] text-on-surface-variant leading-relaxed">
                {cs201Detail.aiDiagnostic.recommendation}
              </p>
            </div>

            {/* Quick Drill Preview */}
            <div className="p-3 rounded-xl bg-surface-container-low/60 flex items-center justify-between text-[12px] border border-surface-container-high/30">
              <span className="text-on-surface-variant font-medium">
                Thời gian hoàn thành:
              </span>
              <span className="font-bold text-on-surface">
                {cs201Detail.aiDiagnostic.estimatedTime}
              </span>
            </div>
          </div>

          {/* Action CTA */}
          <div className="pt-3 border-t border-surface-container-high/40 flex flex-col gap-2.5">
            <button
              type="button"
              onClick={handleStartQuiz}
              className="w-full py-2.5 px-4 rounded-xl bg-primary hover:bg-primary/90 text-on-primary text-[13px] font-bold flex items-center justify-center gap-2 shadow-sm transition-all active:scale-95"
            >
              <span>Bắt đầu bài trắc nghiệm</span>
              <Icon name="arrow_forward" size={16} />
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("ai-companion")}
              className="text-center text-[12px] font-semibold text-primary hover:underline"
            >
              Hoặc thảo luận trực tiếp với AI Mentor
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={practiceModeOpen}
        onClose={() => setPracticeModeOpen(false)}
        title="Bạn muốn luyện tập chế độ nào?"
        icon="quiz"
        maxWidth="max-w-2xl"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <button
            type="button"
            onClick={() => handleSelectPracticeMode("practice")}
            className="group flex min-h-44 flex-col items-start justify-between rounded-2xl border border-secondary/30 bg-secondary-container/20 p-5 text-left transition-all hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary-container/40 hover:shadow-md"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary/15 text-secondary">
              <Icon name="self_improvement" size={24} />
            </span>
            <span className="mt-5 flex flex-col gap-1">
              <span className="text-[15px] font-bold text-on-surface">
                Chế độ luyện tập nhẹ nhàng
              </span>
              <span className="text-[12px] leading-relaxed text-on-surface-variant">
                Học theo nhịp độ thoải mái và nhận gợi ý trong quá trình làm
                bài.
              </span>
            </span>
          </button>

          <button
            type="button"
            onClick={() => handleSelectPracticeMode("exam")}
            className="group flex min-h-44 flex-col items-start justify-between rounded-2xl border border-primary/30 bg-primary/10 p-5 text-left transition-all hover:-translate-y-0.5 hover:border-primary hover:bg-primary/20 hover:shadow-md"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Icon name="timer" size={24} />
            </span>
            <span className="mt-5 flex flex-col gap-1">
              <span className="text-[15px] font-bold text-on-surface">
                Chế độ thi khắc nghiệt
              </span>
              <span className="text-[12px] leading-relaxed text-on-surface-variant">
                Làm bài như một kỳ thi thật với thời gian và áp lực cao hơn.
              </span>
            </span>
          </button>
        </div>
      </Modal>
    </div>
  );
}
