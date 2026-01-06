import { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherCard from "./WeatherCard";
import useWeather from "@/hooks/useWeather";

const Weather = () => {
  const [url, setUrl] = useState<string>("");
  const { data, loading, error } = useWeather(url);

  return (
    <div>
      <SearchBox setUrl={setUrl} />
      <WeatherCard data={data} loading={loading} error={error} />
    </div>
  );
};

export default Weather;
