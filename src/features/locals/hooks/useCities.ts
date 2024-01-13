import { useEffect, useState } from "react";
import { localServices } from "../service";
import { City, Item } from "../interfaces";
import { HookOptions } from "@/features/shared/types";

export function useCities(uf: string, options?: HookOptions) {
  const [cities, setCities] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);

  async function getCities() {
    try {
      setLoading(true);
      const response = await localServices.getCitities(uf);
      setCities(response);
    } catch (error) {
      options?.onError?.(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (uf) {
      getCities();
    }
  }, [uf]);

  return { cities, loading, getCities };
}
