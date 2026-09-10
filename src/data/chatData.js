export const initialChatMessages = [
  {
    id: "msg-1",
    sender: "user",
    senderName: "Nguyễn Trọng Tiến",
    timestamp: "14:24",
    content: "Tại sao mình cứ làm sai các câu hỏi về Tree Traversal vậy?"
  },
  {
    id: "msg-2",
    sender: "ai",
    senderName: "CTT Diagnostic Engine",
    badge: "Tree-DSP-v2",
    timestamp: "14:25",
    content: "Chào Tiến, mình đã phân tích **6 lần làm quiz gần nhất** của bạn:\n\n* Bạn làm đúng **2/6 câu** về Tree Traversal (tỉ lệ sai **66.7%**).\n* Sai sót chủ yếu: bạn nhầm lẫn giữa **Preorder (Root → Left → Right)** và **Inorder (Left → Root → Right)** khi hình dung ngăn xếp đệ quy (Call Stack).\n\n🤔 **Câu hỏi gợi mở Socratic:**\nTrong hàm đệ quy của duyệt **Preorder**, bạn thực hiện in/xử lý giá trị của `root` **TRƯỚC** hay **SAU** khi thực hiện lời gọi đệ quy `traverse(root->left)`?",
    diagnosticPoints: [
      {
        type: "error",
        text: "Bạn làm đúng 2/6 câu về Tree Traversal (tỉ lệ sai 66.7%)."
      },
      {
        type: "warning",
        text: "Lỗi phổ biến nhất: Xác định sai nút được thăm đầu tiên trong cây con trái/phải."
      }
    ],
    chips: [
      "Giải thích trực quan Call Stack",
      "Xem ví dụ C++ đệ quy",
      "Làm 1 câu trắc nghiệm nhanh kiểm tra lại"
    ]
  }
];

export const aiKnowledgeContext = {
  course: "CS201 · Cấu trúc Dữ liệu & Giải thuật",
  activeTopic: "Tree Traversal (Duyệt Cây)",
  mastery: "32% Mastery",
  recentMistakes: "4/6 câu trắc nghiệm gần đây chưa chính xác",
  connectedDocuments: [
    {
      name: "Lecture_06_Binary_Trees.pdf",
      page: "Trang 14: Preorder, Inorder, Postorder Definition",
      status: "Verified citation"
    },
    {
      name: "Lecture_06_Binary_Trees.pdf",
      page: "Trang 18: Stack Frames in Recursive Tree Traversal",
      status: "Verified citation"
    }
  ]
};
