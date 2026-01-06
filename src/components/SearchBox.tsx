import React from "react";
import { useState } from "react";

const SearchBox = ({ setUrl }: { setUrl: (url: string) => void }) => {
  const [city, setCity] = useState<string>("");

  const apiKey = import.meta.env.VITE_API_KEY;
  const base_url = import.meta.env.VITE_BASE_URL;

  const handelSumbit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setUrl(
      `${base_url}/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
    );
  };

  return (
    <div>
      <form onSubmit={handelSumbit}>
        <input
          type='text'
          value={city}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCity(e.target.value)
          }
          placeholder='Search...'
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  );
};

export default SearchBox;
