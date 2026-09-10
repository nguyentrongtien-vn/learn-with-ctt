export const initialQuizQuestions = [
  {
    id: 1,
    topic: "BST Search Order",
    difficulty: "Cơ bản",
    questionEn: "In a Binary Search Tree (BST), what property holds for the left child of a node with key K?",
    questionVi: "Trong Cây tìm kiếm nhị phân (BST), tính chất nào đúng với nút con bên trái của nút có khóa K?",
    options: [
      { key: "A", text: "Key < K", viText: "Khóa luôn nhỏ hơn K" },
      { key: "B", text: "Key > K", viText: "Khóa luôn lớn hơn K" },
      { key: "C", text: "Key == K", viText: "Khóa luôn bằng K" },
      { key: "D", text: "No relationship", viText: "Không có mối quan hệ xác định" }
    ],
    correctAnswer: "A",
    selectedAnswer: "A",
    isAnswered: true,
    isCorrect: true,
    explanation: "Định nghĩa BST chuẩn: Mọi nút thuộc cây con bên trái đều có giá trị nhỏ hơn nút cha (Key < K)."
  },
  {
    id: 2,
    topic: "Inorder Property",
    difficulty: "Cơ bản",
    questionEn: "Which tree traversal visited nodes in strictly ascending order when applied to a valid BST?",
    questionVi: "Thuật toán duyệt cây nào cho ra dãy các khóa theo thứ tự tăng dần đối với cây BST hợp lệ?",
    options: [
      { key: "A", text: "Preorder", viText: "Tiền thứ tự (Root → Left → Right)" },
      { key: "B", text: "Postorder", viText: "Hậu thứ tự (Left → Right → Root)" },
      { key: "C", text: "Inorder", viText: "Trung thứ tự (Left → Root → Right)" },
      { key: "D", text: "Level-order", viText: "Duyệt theo mức (Breadth-First Search)" }
    ],
    correctAnswer: "C",
    selectedAnswer: "A",
    isAnswered: true,
    isCorrect: false,
    explanation: "Bạn đã chọn Preorder (thăm Root trước). Với BST, phép duyệt Inorder (Left → Root → Right) mới luôn tạo ra dãy khóa tăng dần."
  },
  {
    id: 3,
    topic: "Preorder Visit Order",
    difficulty: "Cơ bản",
    questionEn: "What does Preorder Traversal visit first?",
    questionVi: "Trong thuật toán duyệt cây tiền thứ tự (Preorder), nút nào được thăm đầu tiên?",
    options: [
      { key: "A", text: "Left subtree", viText: "Cây con bên trái" },
      { key: "B", text: "Right subtree", viText: "Cây con bên phải" },
      { key: "C", text: "Root", viText: "Nút gốc" },
      { key: "D", text: "Leaf nodes", viText: "Các nút lá" }
    ],
    correctAnswer: "C",
    selectedAnswer: "A",
    isAnswered: true,
    isCorrect: false,
    explanation: "Thuật toán Preorder luôn duyệt theo quy tắc: Root → Left Subtree → Right Subtree. Lựa chọn 'Left subtree' tương ứng với Inorder hoặc Postorder."
  },
  {
    id: 4,
    topic: "Postorder Traversal",
    difficulty: "Trung bình",
    questionEn: "In Postorder traversal of a binary tree, when is the Root node processed?",
    questionVi: "Trong phép duyệt hậu thứ tự (Postorder), khi nào nút Gốc (Root) mới được xử lý?",
    options: [
      { key: "A", text: "Before both subtrees", viText: "Trước khi duyệt 2 cây con" },
      { key: "B", text: "Between left and right subtrees", viText: "Ở giữa cây con trái và phải" },
      { key: "C", text: "After both left and right subtrees", viText: "Sau khi cả 2 cây con trái và phải đã duyệt xong" },
      { key: "D", text: "At random time", viText: "Tại thời điểm ngẫu nhiên" }
    ],
    correctAnswer: "C",
    selectedAnswer: null,
    isAnswered: false,
    isCorrect: null,
    explanation: "Postorder thực hiện: Left → Right → Root. Nút gốc luôn được thăm cuối cùng sau khi cả hai cây con đã hoàn tất."
  },
  {
    id: 5,
    topic: "Level Order BFS",
    difficulty: "Trung bình",
    questionEn: "What data structure is fundamentally used to implement Level-order traversal iteratively?",
    questionVi: "Cấu trúc dữ liệu nào được sử dụng chủ yếu để cài đặt thuật toán duyệt theo mức (Level-order)?",
    options: [
      { key: "A", text: "Stack", viText: "Ngăn xếp (LIFO)" },
      { key: "B", text: "Queue", viText: "Hàng đợi (FIFO)" },
      { key: "C", text: "Priority Queue", viText: "Hàng đợi ưu tiên (Heap)" },
      { key: "D", text: "Hash Table", viText: "Bảng băm" }
    ],
    correctAnswer: "B",
    selectedAnswer: null,
    isAnswered: false,
    isCorrect: null,
    explanation: "Duyệt theo mức (BFS) dùng Queue (FIFO) để lần lượt đưa các nút ở mức hiện tại vào và lấy ra theo thứ tự mức tăng dần."
  },
  {
    id: 6,
    topic: "Recursion Stack Complexity",
    difficulty: "Trung bình",
    questionEn: "What is the worst-case space complexity of recursive tree traversal on a skewed binary tree of N nodes?",
    questionVi: "Độ phức tạp không gian (call stack) trường hợp xấu nhất của duyệt cây đệ quy trên cây lệch có N nút là gì?",
    options: [
      { key: "A", text: "O(1)", viText: "Bộ nhớ hằng số O(1)" },
      { key: "B", text: "O(log N)", viText: "O(log N)" },
      { key: "C", text: "O(N)", viText: "O(N) do stack sâu bằng số lượng nút" },
      { key: "D", text: "O(N^2)", viText: "O(N^2)" }
    ],
    correctAnswer: "C",
    selectedAnswer: null,
    isAnswered: false,
    isCorrect: null,
    explanation: "Khi cây bị suy biến thành danh sách liên kết lệch một bên, độ sâu đệ quy đạt N, call stack chiếm O(N) bộ nhớ."
  },
  {
    id: 7,
    topic: "Binary Tree Height & Nodes",
    difficulty: "Cơ bản",
    questionEn: "What is the maximum number of nodes at level L of a binary tree (root at level 0)?",
    questionVi: "Số lượng nút tối đa ở mức L của một cây nhị phân (gốc ở mức 0) là bao nhiêu?",
    options: [
      { key: "A", text: "2^L", viText: "2 mũ L nút" },
      { key: "B", text: "2^(L-1)", viText: "2 mũ (L-1) nút" },
      { key: "C", text: "2*L", viText: "2 nhân L nút" },
      { key: "D", text: "L^2", viText: "L bình phương nút" }
    ],
    correctAnswer: "A",
    selectedAnswer: null,
    isAnswered: false,
    isCorrect: null,
    explanation: "Tại mức 0: 2^0 = 1 nút (gốc). Mức 1: tối đa 2 nút. Mức L: tối đa 2^L nút."
  },
  {
    id: 8,
    topic: "Expression Tree Evaluation",
    difficulty: "Nâng cao",
    questionEn: "Which traversal of an Expression Tree produces the Postfix (Reverse Polish) notation?",
    questionVi: "Phép duyệt nào trên Cây biểu thức (Expression Tree) sẽ sinh ra ký pháp Ba Lan ngược (Postfix)?",
    options: [
      { key: "A", text: "Inorder", viText: "Trung thứ tự" },
      { key: "B", text: "Preorder", viText: "Tiền thứ tự" },
      { key: "C", text: "Postorder", viText: "Hậu thứ tự" },
      { key: "D", text: "Level-order", viText: "Duyệt theo tầng" }
    ],
    correctAnswer: "C",
    selectedAnswer: null,
    isAnswered: false,
    isCorrect: null,
    explanation: "Duyệt Postorder hai toán hạng trước rồi tới toán tử, đúng chuẩn định dạng Postfix notation (VD: AB+)."
  },
  {
    id: 9,
    topic: "Complete vs Full Binary Tree",
    difficulty: "Trung bình",
    questionEn: "A Full Binary Tree is a tree where every node has either:",
    questionVi: "Một cây nhị phân đầy đủ (Full Binary Tree) là cây mà mỗi nút đều có:",
    options: [
      { key: "A", text: "0 or 1 child", viText: "0 hoặc 1 con" },
      { key: "B", text: "0 or 2 children", viText: "Đúng 0 hoặc đúng 2 con" },
      { key: "C", text: "Exactly 1 child", viText: "Đúng 1 con" },
      { key: "D", text: "Same number of left and right nodes", viText: "Số nút trái và phải bằng nhau" }
    ],
    correctAnswer: "B",
    selectedAnswer: null,
    isAnswered: false,
    isCorrect: null,
    explanation: "Định nghĩa: Full Binary Tree là cây nhị phân mà mọi nút hoặc là lá (0 con), hoặc có đủ cả 2 con."
  },
  {
    id: 10,
    topic: "Traversal Time Complexity",
    difficulty: "Cơ bản",
    questionEn: "What is the time complexity of visiting all N nodes in any standard binary tree traversal?",
    questionVi: "Độ phức tạp thời gian khi thăm toàn bộ N nút trong bất kỳ phép duyệt cây chuẩn nào là bao nhiêu?",
    options: [
      { key: "A", text: "O(log N)", viText: "O(log N)" },
      { key: "B", text: "O(N)", viText: "O(N) vì mỗi nút được thăm đúng 1 lần" },
      { key: "C", text: "O(N log N)", viText: "O(N log N)" },
      { key: "D", text: "O(N^2)", viText: "O(N^2)" }
    ],
    correctAnswer: "B",
    selectedAnswer: null,
    isAnswered: false,
    isCorrect: null,
    explanation: "Mỗi nút và liên kết được duyệt qua một số lần hữu hạn cố định O(1), do đó tổng thời gian là O(N)."
  }
];
