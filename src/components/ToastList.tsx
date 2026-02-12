import React from "react";
import type { Toast } from "../types/index";
import { ToastItem } from "./ToastItem";

export const ToastList: React.FC<{ toasts: Toast[] }> = ({ toasts }) => {

  // Group toasts by position
  const groupedToasts = toasts.reduce((acc, toast) => {
    const position = toast.position || "top-right";

    if (!acc[position]) {
      acc[position] = [];
    }

    acc[position].push(toast);
    return acc;
  }, {} as Record<string, Toast[]>);

  return (
    <>
      {Object.entries(groupedToasts).map(([position, toasts]) => (
        <div key={position} className={`toastfytime-container ${position}`}>
          {toasts.map(t => (
            <ToastItem key={t.id} toast={t} />
          ))}
        </div>
      ))}
    </>
  );
};

