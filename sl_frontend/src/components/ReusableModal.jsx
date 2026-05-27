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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white dark:bg-slate-900 w-[90%] md:w-[600px] rounded-2xl p-6 shadow-2xl relative">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-xl font-bold text-slate-500 hover:text-red-500"
        >
          ✕
        </button>

        {title && (
          <h2 className="text-2xl font-bold mb-4 text-primary">
            {title}
          </h2>
        )}

        {subtitle && (
          <h3 className="text-lg font-semibold mb-2">
            {subtitle}
          </h3>
        )}

        {description && (
          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
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