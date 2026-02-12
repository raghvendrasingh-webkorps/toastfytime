import { useEffect, useState } from "react";
import { toastStore } from "../store/toastStore.js";
import type { Toast } from "../types/index.js";
import { ToastList } from "./ToastList.js";
import { resolveTheme } from "../themes/theme.js";
import { injectStyles } from "../injectStyles.js";

type ToastProviderProps = {
  theme?: "light" | "dark" | "auto";
  children?: React.ReactNode;
};

export const ToastProvider = ({ theme = "auto", children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    injectStyles();
    return toastStore.subscribe(setToasts);
  }, []);

  useEffect(() => {
  const finalTheme = resolveTheme(theme as any);

  console.log("Theme prop:", theme);
  console.log("Resolved theme:", finalTheme);

  document.documentElement.setAttribute(
    "data-toast-theme",
    finalTheme
  );
}, [theme]);

  return (
    <>
      {children}
      <ToastList toasts={toasts} />
    </>
  );
};

