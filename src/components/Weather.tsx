import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import WeatherCard from "./WeatherCard";
import useWeather from "@/hooks/useWeather";

import weatherBg from "../assets/background/day.webp";
import cloudy from "../assets/background/cloudy.gif";
import clear from "../assets/background/clearly.gif";
import rain from "../assets/background/rainy.gif";
import snow from "../assets/background/_.gif";

const Weather = () => {
  const [url, setUrl] = useState<string>("");
  const { data, loading, error } = useWeather(url);
  const [bg, setBg] = useState<string>(weatherBg);

  useEffect(() => {
    data?.weather?.map((w) => {
      const mainW = w.main;

      switch (mainW) {
        case "Clear":
          setBg(clear);
          break;
        case "Clouds":
          setBg(cloudy);
          break;
        case "Rain":
          setBg(rain);
          break;
        case "Snow":
          setBg(snow);
          break;
        default:
          setBg(weatherBg);
      }
    });
  }, [data]);

  return (
    <div
      className='h-150 w-250 bg-no-repeat bg-cover bg-center [image-rendering:pixelated]'
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className='flex justify-center items-center h-full w-full flex-col'>
        <SearchBox setUrl={setUrl} />
        {data && <WeatherCard data={data} loading={loading} error={error} />}
      </div>
    </div>
  );
};

export default Weather;
