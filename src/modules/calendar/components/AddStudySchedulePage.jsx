import React, { useState } from "react";
import { useApp } from "../../../context/AppContext";
import Icon from "../../../components/ui/Icon";

const initialForm = {
  title: "",
  teacher: "",
  weekday: "Thứ 2",
  startTime: "09:30",
  endTime: "11:30",
  startDate: "2026-10-05",
  endDate: "2026-11-16",
  room: "",
  note: "",
};

const inputClass =
  "w-full rounded-xl border border-surface-container-high bg-surface-container-lowest px-3.5 py-2.5 text-[13px] text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/15";

export default function AddStudySchedulePage({ onBack }) {
  const { addStudySchedule } = useApp();
  const [form, setForm] = useState(initialForm);
  const [error, setError] = useState("");
  const [createdCount, setCreatedCount] = useState(0);

  const update = (key, value) => {
    setError("");
    setCreatedCount(0);
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.title.trim() || !form.teacher.trim()) {
      setError("Vui lòng nhập tên môn học và giảng viên.");
      return;
    }
    if (form.endTime <= form.startTime) {
      setError("Giờ kết thúc phải sau giờ bắt đầu.");
      return;
    }
    if (form.endDate < form.startDate) {
      setError("Ngày kết thúc phải sau ngày bắt đầu.");
      return;
    }

    const count = addStudySchedule(form);
    if (!count) {
      setError("Không tìm thấy ngày phù hợp với thứ đã chọn.");
      return;
    }
    onBack();
  };

  return (
    <div className="flex w-full max-w-[980px] mx-auto flex-col gap-5 py-1">
      <div className="flex items-center gap-3 border-b border-surface-container-high/40 pb-4">
        <button
          type="button"
          onClick={onBack}
          className="flex h-9 w-9 items-center justify-center rounded-full text-on-surface-variant transition hover:bg-surface-container hover:text-on-surface"
          aria-label="Quay lại lịch"
        >
          <Icon name="arrow_back" size={20} />
        </button>
        <div>
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-primary">
            Calendar
          </p>
          <h1 className="text-2xl font-bold tracking-tight text-on-surface">
            Thêm lịch học mới
          </h1>
          <p className="mt-1 text-[13px] text-on-surface-variant">
            Nhập thông tin buổi học, hệ thống sẽ tự động xếp các buổi lặp theo
            thứ và khoảng ngày.
          </p>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-surface-container-high/50 bg-surface-container-lowest p-5 shadow-sm sm:p-7"
      >
        <div className="grid gap-5 md:grid-cols-2">
          <label className="flex flex-col gap-2 md:col-span-2">
            <span className="text-[12px] font-bold text-on-surface">
              Tên môn học / nội dung
            </span>
            <input
              className={inputClass}
              value={form.title}
              onChange={(event) => update("title", event.target.value)}
              placeholder="Ví dụ: Lập trình hướng đối tượng"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[12px] font-bold text-on-surface">
              Giảng viên
            </span>
            <input
              className={inputClass}
              value={form.teacher}
              onChange={(event) => update("teacher", event.target.value)}
              placeholder="Ví dụ: GV. H.T.Phước"
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[12px] font-bold text-on-surface">
              Thứ học hàng tuần
            </span>
            <select
              className={inputClass}
              value={form.weekday}
              onChange={(event) => update("weekday", event.target.value)}
            >
              {Object.keys({
                "Thứ 2": 1,
                "Thứ 3": 1,
                "Thứ 4": 1,
                "Thứ 5": 1,
                "Thứ 6": 1,
                "Thứ 7": 1,
                "Chủ nhật": 1,
              }).map((day) => (
                <option key={day}>{day}</option>
              ))}
            </select>
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[12px] font-bold text-on-surface">
              Giờ bắt đầu
            </span>
            <input
              type="time"
              className={inputClass}
              value={form.startTime}
              onChange={(event) => update("startTime", event.target.value)}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[12px] font-bold text-on-surface">
              Giờ kết thúc
            </span>
            <input
              type="time"
              className={inputClass}
              value={form.endTime}
              onChange={(event) => update("endTime", event.target.value)}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[12px] font-bold text-on-surface">
              Ngày bắt đầu
            </span>
            <input
              type="date"
              className={inputClass}
              value={form.startDate}
              onChange={(event) => update("startDate", event.target.value)}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[12px] font-bold text-on-surface">
              Ngày kết thúc
            </span>
            <input
              type="date"
              className={inputClass}
              value={form.endDate}
              onChange={(event) => update("endDate", event.target.value)}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[12px] font-bold text-on-surface">
              Phòng học
            </span>
            <input
              className={inputClass}
              value={form.room}
              onChange={(event) => update("room", event.target.value)}
              placeholder="Ví dụ: D9-401"
            />
          </label>
          <label className="flex flex-col gap-2 md:col-span-2">
            <span className="text-[12px] font-bold text-on-surface">
              Ghi chú
            </span>
            <textarea
              className={`${inputClass} min-h-24 resize-y`}
              value={form.note}
              onChange={(event) => update("note", event.target.value)}
              placeholder="Ví dụ: học phòng máy, mang laptop..."
            />
          </label>
        </div>

        {error && (
          <p className="mt-4 rounded-xl bg-error-container px-3.5 py-2.5 text-[12px] font-medium text-on-error-container">
            {error}
          </p>
        )}
        {createdCount > 0 && (
          <p className="mt-4 rounded-xl bg-secondary-container px-3.5 py-2.5 text-[12px] font-semibold text-on-secondary-container">
            Đã xếp {createdCount} buổi học theo thông tin đã nhập.
          </p>
        )}

        <div className="mt-6 flex flex-wrap justify-end gap-2.5 border-t border-surface-container-high/40 pt-5">
          <button
            type="button"
            onClick={onBack}
            className="rounded-xl border border-surface-container-high px-4 py-2.5 text-[13px] font-semibold text-on-surface transition hover:bg-surface-container"
          >
            Hủy
          </button>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-[13px] font-bold text-on-primary shadow-sm transition hover:bg-primary/90 active:scale-95"
          >
            <Icon name="event_available" size={17} />
            Xếp lịch học
          </button>
        </div>
      </form>
    </div>
  );
}
