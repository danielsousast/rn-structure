import { useState } from "react";
import { localServices } from "../service";
import { City } from "../interfaces";

export function useUfs() {
  const [ufs, setUfs] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getUfs() {
    try {
      setLoading(true);
      const { data } = await localServices.getUFs();
      setUfs(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return { ufs, loading, error, getUfs };
}
