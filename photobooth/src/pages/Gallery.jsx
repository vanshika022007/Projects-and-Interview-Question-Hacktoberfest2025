import React, { useState, useEffect } from 'react';
import WebcamCapture from '../components/WebcamCapture';
import PolaroidPhoto from '../components/PolaroidPhoto';

export default function Gallery() {
  const [capturedImage, setCapturedImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [title, setTitle] = useState('');
  const [showUI, setShowUI] = useState(false);
  const [filter, setFilter] = useState('ultimate-polaroid');

  useEffect(() => {
    const animationTimer = setTimeout(() => {
      setShowUI(true);
    }, 1000);

    return () => clearTimeout(animationTimer);
  }, []);

  const handleCapture = (imageSrc) => {
    setCapturedImage(imageSrc);
    // You can set a default title here if you want
    setTitle('Polaroid Moment');
    setCaption('');
  };

  const handleRetake = () => {
    setCapturedImage(null);
  };

  return (
    <div className="relative w-full min-h-screen bg-pink-100 flex flex-col items-center justify-center overflow-hidden p-8">
      {/* The pulsing background gradient */}
      <div className="center-gradient"></div>
      
      <h1 className={`
          text-4xl md:text-5xl font-bold mb-8 text-gray-800 transition-all duration-700 ease-in-out
          ${showUI ? 'absolute top-8 md:top-12' : 'relative'}
      `}>
        Welcome to the Gallery!
      </h1>

      <div className={`
          absolute bottom-0 w-full max-w-2xl px-8 flex flex-col items-center
          transition-all duration-700 ease-in-out
          ${showUI ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
      `}>
        {!capturedImage ? (
          <>
            <WebcamCapture onCapture={handleCapture} filter={filter} />
            <div className="flex flex-wrap justify-center gap-2 mt-6">
                <button
                    onClick={() => setFilter('none')}
                    className={`px-3 py-1 text-sm rounded-full font-semibold ${filter === 'none' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                >
                    Normal
                </button>
                <button
                    onClick={() => setFilter('ultimate-polaroid')}
                    className={`px-3 py-1 text-sm rounded-full font-semibold ${filter === 'ultimate-polaroid' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                >
                    Polaroid
                </button>
                <button
                    onClick={() => setFilter('vintage-bw')}
                    className={`px-3 py-1 text-sm rounded-full font-semibold ${filter === 'vintage-bw' ? 'bg-pink-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                >
                    Vintage B&W
                </button>
            </div>
          </>
        ) : (
          <div className="text-center space-y-6">
            <PolaroidPhoto 
              imageSrc={capturedImage} 
              caption={caption}
              onCaptionChange={setCaption}
              title={title}
              onTitleChange={setTitle}
              filter={filter}
            />
            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handleRetake}
                className="flex items-center gap-2 px-6 py-3 bg-pink-500 text-white rounded-xl font-semibold hover:bg-pink-600 transition-all duration-300 shadow-lg"
              >
                Take Another
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}