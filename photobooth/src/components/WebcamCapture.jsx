import React, { useRef, useCallback, useState, useEffect } from 'react';
import Webcam from 'react-webcam';
import { Camera, CameraOff, Loader } from 'lucide-react';

const WebcamCapture = ({ onCapture, filter }) => {
  const webcamRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const [isCountingDown, setIsCountingDown] = useState(false);

  // Function to perform the capture
  const takePhoto = useCallback(() => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      onCapture(imageSrc);
    }
  }, [webcamRef, onCapture]);

  // Handle the countdown logic
  useEffect(() => {
    if (!isCountingDown) {
      return;
    }

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      // Countdown finished, take the photo
      takePhoto();
      setIsCountingDown(false);
      setCountdown(3); // Reset the timer
    }
  }, [isCountingDown, countdown, takePhoto]);

  const startCountdown = () => {
    if (!isCountingDown) {
      setIsCountingDown(true);
      setCountdown(3); // Start from 3
    }
  };

  const handleUserMedia = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const handleUserMediaError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const getBaseFilterClass = () => {
    if (filter === 'ultimate-polaroid') return 'filter-ultimate-polaroid';
    if (filter === 'vintage-bw') return 'filter-vintage-bw';
    if (filter === 'vivid') return 'filter-vivid';
    return '';
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="relative bg-amber-900 p-6 rounded-3xl shadow-2xl">
        <div className="relative overflow-hidden rounded-2xl" style={{ aspectRatio: '4/3' }}>
          {isLoading && (
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center z-10">
              <div className="text-center text-white">
                <Loader className="w-8 h-8 animate-spin mx-auto mb-2" />
                <p>Loading camera...</p>
              </div>
            </div>
          )}
          {hasError && (
            <div className="absolute inset-0 bg-gray-800 flex items-center justify-center z-10">
              <div className="text-center text-white">
                <CameraOff className="w-12 h-12 mx-auto mb-4 text-red-400" />
                <p className="text-lg font-semibold mb-2">Camera Access Denied</p>
                <p className="text-sm text-gray-300 max-w-xs">
                  Please allow camera access to capture photos
                </p>
              </div>
            </div>
          )}

          {isCountingDown && (
            <div className="absolute inset-0 z-20 flex items-center justify-center text-white">
              <span className="text-8xl font-bold animate-pulse">{countdown}</span>
            </div>
          )}

          <div className="relative w-full h-full photo-container">
            <Webcam
              audio={false}
              ref={webcamRef}
              screenshotFormat="image/jpeg"
              className={`w-full h-full object-cover ${getBaseFilterClass()} flip-x`}
              videoConstraints={{
                width: 1280,
                height: 960,
                facingMode: "user"
              }}
              onUserMedia={handleUserMedia}
              onUserMediaError={handleUserMediaError}
            />
            
            {filter === 'ultimate-polaroid' && (
              <>
                {/* Your custom multi-gradient color layers - adjust opacity/colors as needed */}
                <div className="overlay-hue-1"></div>
                <div className="overlay-hue-2"></div>

                {/* The new combined glow and vignette */}
                <div className="ultimate-glow-overlay"></div> {/* For the main light bloom */}
                <div className="absolute inset-0 z-10 ultimate-vignette"></div> {/* For dark edges */}
                
                
              </>
            )}



          </div>

          <div className="absolute inset-0 pointer-events-none">
            <div className="w-full h-full grid grid-cols-3 grid-rows-3 opacity-20">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="border border-white"></div>
              ))}
            </div>
          </div>
        </div>
        <button
          onClick={startCountdown}
          disabled={hasError || isCountingDown}
          className="group relative bg-white border-8 border-amber-600 rounded-full w-20 h-20 shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="absolute inset-2 bg-amber-600 rounded-full group-hover:bg-amber-700 transition-colors duration-300 flex items-center justify-center">
            <Camera className="w-8 h-8 text-white" />
          </div>
        </button>
        <div className="text-center max-w-md">
          <p className="text-amber-700 font-medium mb-2">Ready to capture?</p>
          <p className="text-amber-600 text-sm">
            Position yourself in the frame and click the camera button to take your Instax-style photo
          </p>
        </div>
      </div>
    </div>
  );
};

export default WebcamCapture;