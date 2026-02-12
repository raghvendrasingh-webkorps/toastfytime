import React from "react";
import type { Toast } from "../types/index";

export const ToastItem: React.FC<{ toast: Toast }> = ({ toast }) => {
  const style = toast.backgroundColor
    ? { background: toast.backgroundColor }
    : undefined;

  return (
    <div
      className={`toastfytime-toast ${toast.type}`}
      style={style}
    >
      <span>{toast.message}</span>

      <div
        className="toastfytime-progress"
        style={{ animationDuration: `${toast.duration}ms` }}
      />
    </div>
  );
};
