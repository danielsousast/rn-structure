import { useEffect, useState } from "react";
import { localServices } from "../service";
import { Item } from "../interfaces";
import { HookOptions } from "@/features/shared/types";

export function useUfs(options?: HookOptions) {
  const [ufs, setUfs] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  async function getUfs() {
    try {
      setLoading(true);
      const response = await localServices.getUFs();

      setUfs(response);
    } catch (error) {
      options?.onError?.(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUfs();
  }, []);

  return { ufs, loading, getUfs };
}
