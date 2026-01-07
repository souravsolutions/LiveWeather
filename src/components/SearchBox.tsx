import React from "react";
import { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";

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
    <div className='border-2 border-white h-16 w-100 flex justify-center items-center rounded-full'>
      <form onSubmit={handelSumbit} className='flex h-full w-full'>
        <input
          type='text'
          name='city'
          value={city}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCity(e.target.value)
          }
          placeholder='Search...'
          className='bg-purple-200/90 text-gray-600 h-full w-full outline-none rounded-l-full p-4 text-xl'
        />
        <button
          type='submit'
          className='text-4xl p-2 bg-purple-200/90 rounded-r-full '
        >
          <IoSearchSharp />
        </button>
      </form>
    </div>
  );
};

export default SearchBox;
