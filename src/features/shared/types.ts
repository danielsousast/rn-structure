export interface HookOptions<S = any, E = any> {
  onSuccess?: (data?: S) => void;
  onError?: (error?: E) => void;
}
