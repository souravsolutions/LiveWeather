import type { City } from "@/types/City";

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
    <div>
      <h1>{data?.main.temp}</h1>
      <h1>{data?.name}</h1>
      <div>
        <h1>{data?.main.humidity}</h1>
        <h1>{data?.wind.speed}</h1>
      </div>
    </div>
  );
};

export default WeatherCard;
