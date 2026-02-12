import type { Toast } from "../types/index";

type Listener = (toasts: Toast[]) => void;

let toasts: Toast[] = [];
let listeners: Listener[] = [];

export const toastStore = {
  subscribe(listener: Listener) {
    listeners.push(listener);
    listener(toasts);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  },

  add(toast: Toast) {
    toasts = [...toasts, toast];
    listeners.forEach(l => l(toasts));
  },

  remove(id: string) {
    toasts = toasts.filter(t => t.id !== id);
    listeners.forEach(l => l(toasts));
  }
}
