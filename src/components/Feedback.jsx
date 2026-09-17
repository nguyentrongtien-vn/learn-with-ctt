import { useEffect, useRef, useState } from "react";
import { MessageCircleMore, ChevronDown, Star, Send, X } from "lucide-react";
import "./Feedback.css";

export default function Feedback() {
  const [feedbackType, setFeedbackType] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [content, setContent] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const imageInputRef = useRef(null);
  const imagesRef = useRef(images);

  imagesRef.current = images;

  useEffect(() => {
    return () => {
      imagesRef.current.forEach((image) => URL.revokeObjectURL(image.preview));
    };
  }, []);

  const options = [
    { label: "Bug report", value: "bug" },
    { label: "Feature request", value: "feature" },
    { label: "General feedback", value: "general" },
    { label: "Other", value: "other" },
  ];

  const handleSubmit = (event) => {
    event.preventDefault();

    const hasError = !feedbackType || rating === 0 || !content.trim();
    setError(hasError);

    if (!hasError) {
      setSubmitted(true);
      // TODO: gửi dữ liệu lên server ở đây (fetch/axios...)
      console.log({
        feedbackType,
        rating,
        content,
        images: images.map((image) => image.file),
      });
    }
  };

  const handleImageChange = (event) => {
    const selectedFiles = Array.from(event.target.files || []);

    if (selectedFiles.length > 0) {
      setImages((currentImages) => [
        ...currentImages,
        ...selectedFiles.map((file) => ({
          file,
          preview: URL.createObjectURL(file),
        })),
      ]);
    }

    event.currentTarget.value = "";
  };

  const removeImage = (imageIndex) => {
    const imageToRemove = images[imageIndex];

    if (imageToRemove?.preview) {
      URL.revokeObjectURL(imageToRemove.preview);
    }

    setImages((currentImages) =>
      currentImages.filter((_, index) => index !== imageIndex),
    );

    if (imageInputRef.current) {
      imageInputRef.current.value = "";
    }
  };

  return (
    <main className="feedback-page min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="feedback-card w-full max-w-xl bg-white rounded-2xl p-8">
        {/* Header */}
        <div className="flex items-center gap-3">
          <MessageCircleMore
            size={32}
            className="text-blue-600 flex-shrink-0"
          />
          <h1 className="text-3xl font-bold text-slate-800 m-0">Feedback</h1>
        </div>
        <p className="text-slate-400 mt-3 leading-relaxed">
          We value your feedback. Help us improve our website by sharing your
          thoughts, suggestions, or reporting issues.
        </p>

        <hr className="my-6 border-slate-200" />

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Feedback type */}
          <div>
            <label
              htmlFor="fbtype"
              className="block text-sm font-semibold text-slate-800 mb-2"
            >
              Feedback type <span className="text-red-500">*</span>
            </label>
            <div className="relative">
              <select
                id="fbtype"
                value={feedbackType}
                onChange={(e) => setFeedbackType(e.target.value)}
                className="w-full appearance-none rounded-xl border border-slate-200
                           bg-white px-4 py-3 pr-10 text-sm text-slate-700
                           focus:outline-none focus:ring-2 focus:ring-blue-500
                           cursor-pointer"
              >
                <option value="" disabled hidden>
                  Select a type
                </option>
                {options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-3 top-1/2
                           -translate-y-1/2 text-slate-400"
              />
            </div>
          </div>

          {/* Rating */}
          <div>
            <label className="block text-sm font-semibold text-slate-800 mb-2">
              Rating <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={28}
                  className="cursor-pointer transition-colors"
                  fill={star <= (hover || rating) ? "#facc15" : "none"}
                  stroke={star <= (hover || rating) ? "#facc15" : "#94a3b8"}
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHover(star)}
                  onMouseLeave={() => setHover(0)}
                />
              ))}
            </div>
          </div>

          {/* Your feedback */}
          <div>
            <label
              htmlFor="content"
              className="block text-sm font-semibold text-slate-800 mb-2"
            >
              Your feedback <span className="text-red-500">*</span>
            </label>
            <textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Tell us what happened..."
              rows={5}
              className="w-full rounded-xl border border-slate-200 px-4 py-3
           text-sm text-black placeholder-slate-400 resize-y
           focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Image attachment */}
          <div>
            <label
              htmlFor="feedback-image"
              className="block text-sm font-semibold text-slate-800 mb-2"
            >
              Add images <span className="text-slate-400 font-normal">(optional)</span>
            </label>
            <label htmlFor="feedback-image" className="feedback-upload">
              <span>Choose images</span>
              <span className="feedback-upload-hint">PNG, JPG, JPEG</span>
            </label>
            <input
              ref={imageInputRef}
              id="feedback-image"
              type="file"
              multiple
              accept="image/png,image/jpeg,image/jpg"
              onChange={handleImageChange}
              className="sr-only"
            />

            {images.length > 0 && (
              <div className="feedback-image-preview">
                {images.map((image, index) => (
                  <div className="feedback-image-item" key={image.preview}>
                    <img
                      src={image.preview}
                      alt={`Selected feedback attachment ${index + 1}`}
                    />
                    <button
                      type="button"
                      className="feedback-image-remove"
                      aria-label={`Remove image ${index + 1}`}
                      onClick={(event) => {
                        event.preventDefault();
                        event.stopPropagation();
                        removeImage(index);
                      }}
                    >
                      <X size={13} strokeWidth={2.5} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Error message */}
          {error && (
            <p className="text-sm text-red-500">
              Vui lòng điền đầy đủ tất cả các trường bắt buộc.
            </p>
          )}

          {/* Success message */}
          {submitted && !error && (
            <p className="text-sm text-green-600">
              Cảm ơn bạn đã gửi phản hồi!
            </p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2
                       bg-blue-600 hover:bg-blue-700 transition-colors
                       text-white font-semibold py-3 rounded-xl"
          >
            <Send size={18} />
            Send Feedback
          </button>
        </form>
      </div>
    </main>
  );
}
