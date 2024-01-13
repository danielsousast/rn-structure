export type ToastPosition = "top" | "bottom";
export type ToastMode = "success" | "error" | "warning" | "info";

export interface ToastType {
  message: string;
  type?: ToastMode;
  duration?: number;
  position?: ToastPosition;
  action?: {
    title: string;
    onPress: () => void;
  };
}

export interface ToastService {
  toast: ToastType | null;
  showToast: (toast: ToastType) => void;
  hideToast: () => void;
}
