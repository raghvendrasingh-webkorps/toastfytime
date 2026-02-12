import { toastStore } from "../store/toastStore";
import type { ToastType, ToastOptions } from "../types/index";

const createToast = (
  type: ToastType,
  message: string,
  options?: ToastOptions
) => {
  const id = crypto.randomUUID(); // ✅ one id only

  toastStore.add({
    id,
    message,
    type, // ✅ USE THE PASSED TYPE
    duration: options?.duration ?? 3000,
    position: options?.position ?? "top-right",
    backgroundColor: options?.backgroundColor,
  });

  setTimeout(() => {
    toastStore.remove(id); // ✅ same id
  }, options?.duration ?? 3000);
};

export const toast = {
  success: (msg: string, opt?: ToastOptions) =>
    createToast("success", msg, opt),
  error: (msg: string, opt?: ToastOptions) =>
    createToast("error", msg, opt),
  info: (msg: string, opt?: ToastOptions) =>
    createToast("info", msg, opt),
  warning: (msg: string, opt?: ToastOptions) =>
    createToast("warning", msg, opt),
}

