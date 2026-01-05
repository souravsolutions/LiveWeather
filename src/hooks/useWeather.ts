import type { City } from "@/types/City";
import { useEffect, useState } from "react";

interface WeatherResult {
  data: City | null;
  loading: boolean;
  error: string | null;
}

function useWeather(url: string): WeatherResult {
  const [data, setData] = useState<City | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`City not found (${response.status})`);
      }
      const result: City = await response.json();

      setData(result);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(String(err));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default useWeather;
