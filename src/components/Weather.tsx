import { useState } from "react";
import SearchBox from "./SearchBox";
import WeatherCard from "./WeatherCard";
import useWeather from "@/hooks/useWeather";

import weatherBg from "../assets/background/rainy.gif";

const Weather = () => {
  const [url, setUrl] = useState<string>("");
  const { data, loading, error } = useWeather(url);

  if (data) {
    data.weather.forEach((w) => {
      console.log(w.main);
    });
  }

  return (
    <div
      className='h-150 w-250 bg-no-repeat bg-cover bg-center [image-rendering:pixelated]'
      style={{
        backgroundImage: `url(${weatherBg})`,
      }}
    >
      <div className='flex justify-center items-center h-full w-full flex-col'>
        <SearchBox setUrl={setUrl} />
        <WeatherCard data={data} loading={loading} error={error} />
      </div>
    </div>
  );
};

export default Weather;
