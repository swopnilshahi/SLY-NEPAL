import React from "react";

const ReusableModal = ({
  isOpen,
  onClose,
  title,
  subtitle,
  description,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-[90%] md:w-[600px] max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl dark:bg-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold text-slate-500 hover:text-red-500"
        >
          ✕
        </button>

        {title && (
          <h2 className="mb-4 text-2xl font-bold text-primary">
            {title}
          </h2>
        )}

        {subtitle && (
          <h3 className="mb-2 text-lg font-semibold">
            {subtitle}
          </h3>
        )}

        {description && (
          <p className="leading-relaxed text-slate-600 dark:text-slate-300">
            {description}
          </p>
        )}

        {/* Extra Custom Content */}
        {children}
      </div>
    </div>
  );
};

export default ReusableModal;