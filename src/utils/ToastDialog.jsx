import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

const ToastDialog = ({ toastOpen, setToastOpen, toastMessage }) => {
  useEffect(() => {
    if (toastOpen) {
      const timer = setTimeout(() => {
        setToastOpen(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toastOpen, setToastOpen]);

  return (
    <div
      className={`fixed bottom-4 right-4 z-50 w-full max-w-sm transform transition-all duration-300 ease-in-out ${
        toastOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
    >
      <div className="bg-white border border-gray-200 rounded-lg shadow-lg p-4 flex items-center space-x-3">
        <div className="flex-shrink-0">
          <CheckBadgeIcon
            className="h-6 w-6 text-green-600"
            aria-hidden="true"
          />
        </div>
        <div className="text-sm font-medium text-gray-900">{toastMessage}</div>
      </div>
    </div>
  );
};

export default ToastDialog;
