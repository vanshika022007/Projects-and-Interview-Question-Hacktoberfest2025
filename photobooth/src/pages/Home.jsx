import { Link } from 'react-router-dom';
import { CameraIcon, ArrowRightIcon } from '@heroicons/react/24/outline';


export default function Home() {
  return (
    <div className="w-full h-screen overflow-hidden">
      {/* Gradient background */}
      <div className="w-full h-screen bg-[radial-gradient(circle,_#ffa34d_0%,_#ffcce0_50%,_#ffffff_100%)]"></div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 h-full">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-pink-600">
          📸 Instax Photobooth
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-xl text-gray-800">
          Capture your memories in vintage-style Polaroid photos, right from your browser!
        </p>
        <button className="px-10 py-4 font-semibold bg-pink-500 text-white rounded-2xl">
          Start Photobooth
        </button>
      </div>


      {/* Overlaid text at the bottom */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">

        <div className="absolute top-[-100px] left-1/2 transform -translate-x-1/2 text-white opacity-80 pointer-events-auto">
          <CameraIcon className="w-16 h-16" />
        </div>
        
        {/* Camera emoji just above Polaroid */}

        {/* Container for Polaroid and Get Started */}
        <div className="flex items-start">
          <div className="relative">
            <h1 className="text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[15rem] font-bold tracking-tight opacity-5 text-gray-900">
              Polaroid
            </h1>
            <h1 className="absolute top-1 left-2 text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[15rem] font-bold tracking-tight opacity-18 text-gray-900">
              Polaroid
            </h1>
          </div>
          <div className="relative mt-26 ml-16 pointer-events-auto">
            <Link to="/gallery">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-cursive font-bold tracking-tight opacity-90 text-white flex gap-2">
                Get Started <ArrowRightIcon className="w-14 h-14"/>
              </h1>
            </Link>
          </div>
        </div>

        {/* Container for Photobooth */}
        <div className="relative">
          <h1 className="text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[15rem] font-bold tracking-tight opacity-5 text-gray-900">
            Photobooth
          </h1>
          <h1 className="absolute top-1 left-2 text-8xl md:text-[10rem] lg:text-[12rem] xl:text-[15rem] font-bold tracking-tight opacity-18 text-gray-900">
            Photobooth
          </h1>
        </div>
      </div>
    </div>
  );
}