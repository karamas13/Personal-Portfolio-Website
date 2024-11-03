import { HERO_CONTENT } from "../constants";
import pfp from "../assets/pfp.jpg";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-8 text-3xl font-thin tracking-tight lg:mt-16 lg:text-5xl xl:text-7xl">
              Nick Karamaroudis
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-center lg:text-left">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="h-[37rem] max-w-full rounded-xl object-cover" src={pfp} alt="Nick Karamaroudis" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
