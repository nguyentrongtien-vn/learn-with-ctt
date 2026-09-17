import React, { useState } from "react";
import "./DocumentDashboard.css";

/* ----------------------------- Sample data ----------------------------- */

const STATS = [
  {
    label: "Tổng tài liệu",
    value: 18,
    sub: "+12% so với tuần trước",
    unit: "Tài liệu",
  },
  { label: "Đang xử lý", value: 3, sub: "Chờ duyệt", unit: "Tài liệu" },
  { label: "Đã ký", value: 15, sub: "Hoàn tất", unit: "Tài liệu" },
];

const FILE_TYPE_STATS = [
  { label: "PDF", value: 10, color: "#2f6fed" },
  { label: "DOCX", value: 5, color: "#e14a6d" },
  { label: "Khác", value: 3, color: "#f2a53c" },
];

const RECENT_FILES = [
  { name: "QDT_Chuy3.pdf", meta: "3 phút trước" },
  { name: "DataStructure.docx", meta: "15 phút trước" },
  { name: "SQL.pdf", meta: "1 giờ trước" },
  { name: "JavaScript.pdf", meta: "2 giờ trước" },
  { name: "ComputerNetworks.docx", meta: "1 ngày trước" },
];

const DOCUMENTS = [
  {
    id: 1,
    name: "QDT_Chuy3.pdf",
    size: "2.1 MB",
    owner: "Nguyễn Văn A",
    type: "PDF",
    date: "10/09/2025 10:24",
    status: "verified",
    views: 25,
  },
  {
    id: 2,
    name: "DataStructure.docx",
    size: "1.8 MB",
    owner: "Trần Thị B",
    type: "DOC",
    date: "09/09/2025 09:10",
    status: "verified",
    views: 18,
  },
  {
    id: 3,
    name: "SQL.pdf",
    size: "3.4 MB",
    owner: "Lê Văn C",
    type: "PDF",
    date: "08/09/2025 16:42",
    status: "pending",
    views: 6,
  },
  {
    id: 4,
    name: "JavaScript.pdf",
    size: "1.2 MB",
    owner: "Phạm D",
    type: "PDF",
    date: "12/09/2025 08:15",
    status: "verified",
    views: 30,
  },
  {
    id: 5,
    name: "ComputerNetworks.docx",
    size: "2.6 MB",
    owner: "Mai N",
    type: "DOC",
    date: "13/09/2025 20:03",
    status: "rejected",
    views: 4,
  },
  {
    id: 6,
    name: "Database.pdf",
    size: "4.0 MB",
    owner: "Nguyễn Văn A",
    type: "PDF",
    date: "11/09/2025 14:52",
    status: "verified",
    views: 12,
  },
  {
    id: 7,
    name: "WebDevelopment.pptx",
    size: "5.3 MB",
    owner: "Hoàng E",
    type: "PPT",
    date: "10/09/2025 07:30",
    status: "verified",
    views: 9,
  },
  {
    id: 8,
    name: "Algorithm.pdf",
    size: "1.9 MB",
    owner: "Lê Văn C",
    type: "PDF",
    date: "14/09/2025 15:42",
    status: "pending",
    views: 3,
  },
];

const STATUS_LABEL = {
  verified: "Đã xác nhận",
  pending: "Đang xử lý",
  rejected: "Từ chối",
};

/* --------------------------------- Icons --------------------------------- */

const Icon = {
  Search: (p) => (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...p}
    >
      <circle cx="11" cy="11" r="7" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  ),
  Chevron: (p) => (
    <svg
      viewBox="0 0 24 24"
      width="14"
      height="14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...p}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  ),
  Eye: (p) => (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...p}
    >
      <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  Download: (p) => (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...p}
    >
      <path d="M12 3v12" />
      <polyline points="7 10 12 15 17 10" />
      <path d="M5 21h14" />
    </svg>
  ),
  More: (p) => (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" {...p}>
      <circle cx="5" cy="12" r="1.6" />
      <circle cx="12" cy="12" r="1.6" />
      <circle cx="19" cy="12" r="1.6" />
    </svg>
  ),
  Upload: (p) => (
    <svg
      viewBox="0 0 24 24"
      width="16"
      height="16"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...p}
    >
      <path d="M12 21V9" />
      <polyline points="7 14 12 9 17 14" />
      <path d="M5 3h14" />
    </svg>
  ),
  Sparkle: (p) => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...p}>
      <path d="M12 2l1.8 5.6L19 9l-5.2 1.4L12 16l-1.8-5.6L5 9l5.2-1.4L12 2z" />
    </svg>
  ),
};

const FILE_BADGE = {
  PDF: { bg: "#fdeceb", fg: "#e14a3a", label: "PDF" },
  DOC: { bg: "#eaf0ff", fg: "#3a5fe1", label: "DOC" },
  PPT: { bg: "#fff2e2", fg: "#e08a2b", label: "PPT" },
};

/* ------------------------------- Sub parts ------------------------------- */

function StatCard({ label, value, sub, unit }) {
  return (
    <div className="stat-card">
      <div className="stat-card__top">
        <span className="stat-card__label">{label}</span>
        <span
          className={`stat-card__badge ${label === "Đang xử lý" ? "stat-card__badge--pending" : ""}`}
        >
          {sub}
        </span>
      </div>
      <div className="stat-card__value">{value}</div>
      <div className="stat-card__unit">{unit}</div>
    </div>
  );
}

function StatusPill({ status }) {
  return (
    <span className={`document-status-pill document-status-pill--${status}`}>
      {STATUS_LABEL[status] ?? "Không xác định"}
    </span>
  );
}

function FileTypeBadge({ type }) {
  const cfg = FILE_BADGE[type] ?? FILE_BADGE.PDF;
  return (
    <span className="file-badge" style={{ background: cfg.bg, color: cfg.fg }}>
      {cfg.label}
    </span>
  );
}

function DonutChart({ data, size = 132, thickness = 18 }) {
  const total = data.reduce((sum, d) => sum + d.value, 0);
  const radius = (size - thickness) / 2;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div className="donut">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
          {data.map((d) => {
            const fraction = d.value / total;
            const dash = fraction * circumference;
            const circle = (
              <circle
                key={d.label}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={d.color}
                strokeWidth={thickness}
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={-offset}
                strokeLinecap="butt"
              />
            );
            offset += dash;
            return circle;
          })}
        </g>
      </svg>
      <div className="donut__center">
        <span className="donut__value">{total}</span>
        <span className="donut__label">File</span>
      </div>
    </div>
  );
}

/* -------------------------------- Main ---------------------------------- */

export default function DocumentDashboard() {
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(1);
  const [documents, setDocuments] = useState(DOCUMENTS);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [pageSize, setPageSize] = useState(8);
  const [openMenu, setOpenMenu] = useState(null);
  const [message, setMessage] = useState("");

  const filteredDocuments = documents.filter((doc) => {
    const matchesQuery =
      doc.name.toLowerCase().includes(query.toLowerCase()) ||
      doc.owner.toLowerCase().includes(query.toLowerCase());
    const matchesStatus = statusFilter === "all" || doc.status === statusFilter;
    const matchesType = typeFilter === "all" || doc.type === typeFilter;
    return matchesQuery && matchesStatus && matchesType;
  });
  const totalPages = Math.max(
    1,
    Math.ceil(filteredDocuments.length / pageSize),
  );
  const visibleDocuments = filteredDocuments.slice(
    (page - 1) * pageSize,
    page * pageSize,
  );

  const toggleRow = (id) =>
    setSelected((s) =>
      s.includes(id) ? s.filter((x) => x !== id) : [...s, id],
    );

  const allSelected =
    visibleDocuments.length > 0 &&
    visibleDocuments.every((doc) => selected.includes(doc.id));
  const toggleAll = () =>
    setSelected(
      allSelected
        ? selected.filter(
            (id) => !visibleDocuments.some((doc) => doc.id === id),
          )
        : [...new Set([...selected, ...visibleDocuments.map((doc) => doc.id)])],
    );

  const showMessage = (text) => {
    setMessage(text);
    window.setTimeout(() => setMessage(""), 2500);
  };

  const handleUpload = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const extension = file.name.split(".").pop().toLowerCase();
    const type =
      extension === "pdf"
        ? "PDF"
        : extension === "docx"
          ? "DOC"
          : extension === "pptx"
            ? "PPT"
            : null;
    if (!type) {
      showMessage("Chỉ hỗ trợ file PDF, DOCX hoặc PPTX.");
      event.target.value = "";
      return;
    }
    const newDocument = {
      id: Date.now(),
      name: file.name,
      size: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
      owner: "Admin",
      type,
      date: "Vừa xong",
      status: "pending",
      views: 0,
    };
    setDocuments((current) => [newDocument, ...current]);
    setPage(1);
    showMessage(`${file.name} đang được xử lý.`);
    event.target.value = "";
  };

  const handleDownload = (doc) => {
    const link = document.createElement("a");
    link.href = URL.createObjectURL(
      new Blob([`Bản mô phỏng tài liệu: ${doc.name}`], { type: "text/plain" }),
    );
    link.download = doc.name;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div className="doc-dashboard">
      <main className="doc-main">
        <header className="doc-header">
          <div>
            <h1>Tài liệu</h1>
            <p>
              Quản lý và theo dõi tất cả tài liệu đã tải lên, trạng thái xử lý
              và số liệu liên quan.
            </p>
          </div>
          <label className="btn-primary upload-trigger">
            <Icon.Upload />
            Tải lên tài liệu
            <input
              type="file"
              accept=".pdf,.docx,.pptx"
              onChange={handleUpload}
            />
          </label>
        </header>

        <section className="stat-grid">
          {STATS.map((s) => (
            <StatCard key={s.label} {...s} />
          ))}
        </section>

        <section className="toolbar">
          <div className="search-field">
            <Icon.Search className="search-field__icon" />
            <input
              type="text"
              placeholder="Tìm kiếm theo tên tài liệu..."
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setPage(1);
              }}
            />
          </div>
          <select
            className="select-field"
            value={statusFilter}
            onChange={(event) => {
              setStatusFilter(event.target.value);
              setPage(1);
            }}
          >
            <option value="all">Tất cả trạng thái</option>
            <option value="verified">Đã xác nhận</option>
            <option value="pending">Đang xử lý</option>
            <option value="rejected">Từ chối</option>
          </select>
          <select
            className="select-field"
            value={typeFilter}
            onChange={(event) => {
              setTypeFilter(event.target.value);
              setPage(1);
            }}
          >
            <option value="all">Tất cả định dạng</option>
            <option value="PDF">PDF</option>
            <option value="DOC">DOCX</option>
            <option value="PPT">PPTX</option>
          </select>
        </section>

        <section className="doc-table-card">
          <table className="doc-table">
            <thead>
              <tr>
                <th className="col-check">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={toggleAll}
                  />
                </th>
                <th>Tên tài liệu</th>
                <th>Sở hữu</th>
                <th>Loại file</th>
                <th>Ngày tải</th>
                <th>Trạng thái</th>
                <th>Số lượt xem</th>
                <th className="col-actions">Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {visibleDocuments.map((doc) => (
                <tr key={doc.id}>
                  <td className="col-check">
                    <input
                      type="checkbox"
                      checked={selected.includes(doc.id)}
                      onChange={() => toggleRow(doc.id)}
                    />
                  </td>
                  <td>
                    <div className="doc-name">
                      <FileTypeBadge type={doc.type} />
                      <div>
                        <div className="doc-name__title">{doc.name}</div>
                        <div className="doc-name__size">{doc.size}</div>
                      </div>
                    </div>
                  </td>
                  <td>{doc.owner}</td>
                  <td>
                    <span className="type-chip">{doc.type}</span>
                  </td>
                  <td>{doc.date}</td>
                  <td>
                    <StatusPill status={doc.status} />
                  </td>
                  <td>{doc.views}</td>
                  <td className="col-actions">
                    <button
                      className="icon-btn"
                      title="Xem"
                      onClick={() => showMessage(`Đang mở ${doc.name}.`)}
                    >
                      <Icon.Eye />
                    </button>
                    <button
                      className="icon-btn"
                      title="Tải xuống"
                      onClick={() => handleDownload(doc)}
                    >
                      <Icon.Download />
                    </button>
                    <button
                      className="icon-btn"
                      title="Thêm"
                      onClick={() =>
                        setOpenMenu(openMenu === doc.id ? null : doc.id)
                      }
                    >
                      <Icon.More />
                    </button>
                    {openMenu === doc.id && (
                      <div className="document-row-menu">
                        <button
                          onClick={() => {
                            setDocuments((current) =>
                              current.filter((item) => item.id !== doc.id),
                            );
                            setOpenMenu(null);
                            showMessage("Đã xóa tài liệu.");
                          }}
                        >
                          Xóa tài liệu
                        </button>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="table-footer">
            <span>
              Hiển thị {visibleDocuments.length ? (page - 1) * pageSize + 1 : 0}{" "}
              - {Math.min(page * pageSize, filteredDocuments.length)} trong tổng
              số {filteredDocuments.length}
            </span>
            <div className="pagination">
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (n) => (
                  <button
                    key={n}
                    className={`pagination__btn ${page === n ? "is-active" : ""}`}
                    onClick={() => setPage(n)}
                  >
                    {n}
                  </button>
                ),
              )}
              <select
                className="pagination__size"
                value={pageSize}
                onChange={(event) => {
                  setPageSize(Number(event.target.value));
                  setPage(1);
                }}
              >
                <option value="8">8 / trang</option>
                <option value="16">16 / trang</option>
                <option value="24">24 / trang</option>
              </select>
            </div>
          </div>
        </section>
        {message && (
          <div className="document-message" role="status">
            {message}
          </div>
        )}
      </main>

      <aside className="doc-sidebar">
        <div className="side-card">
          <h3>Thống kê theo loại file</h3>
          <div className="side-card__chart">
            <DonutChart data={FILE_TYPE_STATS} />
            <ul className="legend">
              {FILE_TYPE_STATS.map((d) => (
                <li key={d.label}>
                  <span
                    className="legend__dot"
                    style={{ background: d.color }}
                  />
                  <span className="legend__label">{d.label}</span>
                  <span className="legend__value">
                    {Math.round(
                      (d.value /
                        FILE_TYPE_STATS.reduce((s, x) => s + x.value, 0)) *
                        100,
                    )}
                    %
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="side-card">
          <h3>Tài liệu gần đây</h3>
          <ul className="recent-list">
            {RECENT_FILES.map((f) => (
              <li key={f.name}>
                <span className="recent-list__dot" />
                <div>
                  <div className="recent-list__name">{f.name}</div>
                  <div className="recent-list__meta">{f.meta}</div>
                </div>
              </li>
            ))}
          </ul>
          <button className="link-btn">Xem tất cả</button>
        </div>

        <div className="side-card side-card--ai">
          <div className="side-card__ai-icon">
            <Icon.Sparkle />
          </div>
          <h3>Tính năng AI</h3>
          <p>
            Hệ thống sẽ tự động phân tích nội dung tài liệu và gợi ý phân loại
            phù hợp.
          </p>
          <button className="link-btn">Tìm hiểu thêm</button>
        </div>
      </aside>
    </div>
  );
}
