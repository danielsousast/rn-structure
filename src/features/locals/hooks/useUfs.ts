import { useEffect, useState } from "react";
import { localServices } from "../service";
import { Item } from "../interfaces";

export function useUfs() {
  const [ufs, setUfs] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getUfs() {
    try {
      setLoading(true);
      const response = await localServices.getUFs();

      setUfs(response);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUfs();
  }, []);

  return { ufs, loading, error, getUfs };
}
