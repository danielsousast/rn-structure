import { create } from "zustand";
import { ToastType } from "../toastTypes";

interface ToastService {
  toast: ToastType | null;
  showToast: (toast: ToastType) => void;
  hideToast: () => void;
}

const useToastStore = create<ToastService>((set) => ({
  toast: null,
  showToast: (toast) => set({ toast }),
  hideToast: () => set({ toast: null }),
}));

export function useToastZustand(): ToastService["toast"] {
  return useToastStore((state) => state.toast);
}

export function useToastZustandAction(): Pick<
  ToastService,
  "showToast" | "hideToast"
> {
  const showToast = useToastStore((state) => state.showToast);
  const hideToast = useToastStore((state) => state.hideToast);

  return {
    showToast,
    hideToast,
  };
}
