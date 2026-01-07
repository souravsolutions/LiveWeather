import type { WeatherInfo } from "@/types/WeatherInfo";

import clear from "../assets/icons/clear.gif";
import clouds from "../assets/icons/clouds.gif";
import rain from "../assets/icons/rain.gif";
import snow from "../assets/icons/snow.gif";
import wind from "../assets/icons/wind.gif";
import drizzle from "../assets/icons/drizzle.gif";

const WeatherImg = ({ data }: { data: WeatherInfo[] | undefined }) => {
  return (
    <>
      {data?.map((w) => {
        switch (w.main) {
          case "Clear":
            return (
              <img
                key={w.main}
                src={clear}
                alt='clear'
                className='h-full w-full rounded-full opacity-85'
              />
            );
          case "Clouds":
            return (
              <img
                key={w.main}
                src={clouds}
                alt='clouds'
                className='h-full w-full rounded-full opacity-85'
              />
            );
          case "Rain":
            return (
              <img
                key={w.main}
                src={rain}
                alt='rain'
                className='h-full w-full rounded-full opacity-85'
              />
            );
          case "Snow":
            return (
              <img
                key={w.main}
                src={snow}
                alt='snow'
                className='h-full w-full rounded-full opacity-85'
              />
            );
          case "Wind":
            return (
              <img
                key={w.main}
                src={wind}
                alt='wind'
                className='h-full w-full rounded-full opacity-85'
              />
            );
          case "Drizzle":
            return (
              <img
                key={w.main}
                src={drizzle}
                alt='drizzle'
                className='h-full w-full rounded-full opacity-85'
              />
            );
          default:
            return null;
        }
      })}
    </>
  );
};

export default WeatherImg;
