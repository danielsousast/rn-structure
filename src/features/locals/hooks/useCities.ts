import { useState } from "react";
import { localServices } from "../service";
import { City } from "../interfaces";

export function useCities() {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function getCities(uf: string) {
    try {
      setLoading(true);
      const { data } = await localServices.getCitities(uf);
      setCities(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return { cities, loading, error, getCities };
}
