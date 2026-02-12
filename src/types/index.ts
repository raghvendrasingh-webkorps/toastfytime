export type ToastType = "success" | "error" | "info" | "warning";

export type ToastTheme = "light" | "dark" | "auto";

export interface ToastOptions {
  duration?: number;
  position?: 
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center";
  backgroundColor?: string;
}

export interface Toast {
  id: string;
  message: string;
  type: ToastType;
  duration: number;
  position: string;
  backgroundColor?: string;
}



