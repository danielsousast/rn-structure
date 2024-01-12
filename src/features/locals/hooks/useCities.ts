import { useEffect, useState } from "react";
import { localServices } from "../service";
import { City, Item } from "../interfaces";

export function useCities(uf: string) {
  const [cities, setCities] = useState<Item[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getCities() {
    try {
      setLoading(true);
      const response = await localServices.getCitities(uf);
      setCities(response);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (uf) {
      getCities();
    }
  }, [uf]);

  return { cities, loading, error, getCities };
}
