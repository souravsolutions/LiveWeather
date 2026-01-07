import type { City } from "@/types/City";
import WeatherImg from "./WeatherImg";

import humidity from "../assets/icons/humidity.png";
import wind from "../assets/icons/wind.gif";

interface WeatherCardProps {
  data: City | null;
  loading: boolean;
  error: string | null;
}

const WeatherCard = ({ data, loading, error }: WeatherCardProps) => {
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className='m-5 flex justify-center items-center flex-col '>
      <div className='h-45 w-45 rounded-xl mb-4'>
        <WeatherImg data={data?.weather} />
      </div>
      <h1 className='text-white text-3xl text-bold text-shadow-lg'>
        {data?.main.temp == null ? 0 : Math.floor(data?.main.temp)}°C
      </h1>
      <h1 className='text-white text-3xl text-bold text-shadow-lg'>
        {data?.name}
      </h1>
      <div className='h-40 w-90 flex justify-around items-center bg-gray-100/50 rounded-2xl mt-10 shadow-md'>
        <div className='flex flex-col items-center gap-1'>
          <div className='h-20 w-20 bg-gray-500 rounded-full flex justify-center items-center'>
            <img
              src={humidity}
              alt='Humidity'
              className='h-full w-full rounded-full'
            />
          </div>
          <h1 className='text-lg font-semibold'>{data?.main.humidity}%</h1>
          <p className='text-lg text-gray-600'>Humidity</p>
        </div>

        <div className='flex flex-col items-center gap-1'>
          <div className='h-20 w-20 bg-gray-100 rounded-full flex justify-center items-center'>
            <img src={wind} alt='Wind' className='h-full w-full rounded-full' />
          </div>
          <h1 className='text-lg font-semibold'>{data?.wind.speed} km/h</h1>
          <p className='text-lg text-gray-600'>Wind Speed</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
