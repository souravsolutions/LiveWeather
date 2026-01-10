import { ModeToggle } from "./components/mode-toggle";
import Weather from "./components/Weather";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <div className='flex justify-center items-center h-screen w-screen pb-15'>
      <div className='absolute top-1 right-5'>
        <ModeToggle />
      </div>
      <Weather />
      <Analytics/>
    </div>
  );
};

export default App;
