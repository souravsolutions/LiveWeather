import type { MainWeather } from "./MainWeather";
import type { WeatherInfo } from "./WeatherInfo";
import type { Wind } from "./Wind";

export interface City {
  coord: {
    lat: number;
    lon: number;
  };
  weather: WeatherInfo[];
  main: MainWeather;
  wind: Wind;
  name: string;
}
