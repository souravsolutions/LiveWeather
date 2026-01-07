import type { City } from "@/types/City";
import { useEffect, useState } from "react";

interface WeatherResult {
  data: City | null;
  loading: boolean;
  error: string | null;
}

function useWeather(url: string): WeatherResult {
  const [data, setData] = useState<City | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(url);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error(`city doesn't exist...?`);
          } else {
            throw new Error(`Uh...?`);
          }
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

    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
  };
}

export default useWeather;
