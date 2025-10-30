import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Download, Edit3, Check, X } from 'lucide-react';

const PolaroidPhoto = ({ imageSrc, caption, onCaptionChange, filter }) => {
  const photoRef = useRef(null);
  const downloadCanvasRef = useRef(null);
  const [isEditingCaption, setIsEditingCaption] = useState(false);
  const [tempCaption, setTempCaption] = useState(caption);
  const [isDownloading, setIsDownloading] = useState(false);
  const [animateShake, setAnimateShake] = useState(false);

  useEffect(() => {
    setTempCaption(caption);
    setAnimateShake(true);
    const shakeTimeout = setTimeout(() => {
      setAnimateShake(false);
    }, 500);
    return () => clearTimeout(shakeTimeout);
  }, [caption]);

  const handleDownload = useCallback(async () => {
    setIsDownloading(true);
    const canvas = downloadCanvasRef.current;
    if (!canvas) {
      console.error('Canvas not found.');
      setIsDownloading(false);
      return;
    }

    const ctx = canvas.getContext('2d');
    const image = new Image();
    image.crossOrigin = 'Anonymous';

    image.onload = () => {
      // Set canvas dimensions to the image's natural size
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const width = canvas.width;
      const height = canvas.height;

      // 1. Apply the core filter to the image
      if (filter === 'ultimate-polaroid') {
        ctx.filter = `sepia(0.5) hue-rotate(-15deg) saturate(1.5) brightness(1.2) contrast(1.2)`;
      } else if (filter === 'vintage-bw') {
        ctx.filter = `grayscale(1) contrast(1.5) brightness(1.3) sepia(0.2)`;
      } else if (filter === 'vivid') {
        ctx.filter = `saturate(2) contrast(1.3) brightness(1.1)`;
      } else {
        ctx.filter = 'none';
      }
      ctx.drawImage(image, 0, 0);
      ctx.filter = 'none'; // Reset filter to not affect other drawings

      // 2. Add overlays if a filter is active
      if (filter !== 'none') {
        // A. Film Grain Effect
        ctx.globalCompositeOperation = 'overlay';
        const grainCanvas = document.createElement('canvas');
        grainCanvas.width = width;
        grainCanvas.height = height;
        const grainCtx = grainCanvas.getContext('2d');
        const grainImageData = grainCtx.createImageData(width, height);
        for (let i = 0; i < grainImageData.data.length; i += 4) {
            const noise = (Math.random() - 0.5) * 50;
            grainImageData.data[i] = grainImageData.data[i+1] = grainImageData.data[i+2] = noise;
            grainImageData.data[i+3] = 255;
        }
        grainCtx.putImageData(grainImageData, 0, 0);
        ctx.drawImage(grainCanvas, 0, 0);
        
        // B. Light Leaks/Glow
        ctx.globalCompositeOperation = 'screen';
        const leakGradient1 = ctx.createRadialGradient(
          width * 0.15, height * 0.15, 0,
          width * 0.15, height * 0.15, Math.max(width, height) * 0.5
        );
        leakGradient1.addColorStop(0, 'rgba(255, 200, 100, 0.7)');
        leakGradient1.addColorStop(1, 'transparent');
        ctx.fillStyle = leakGradient1;
        ctx.fillRect(0, 0, width, height);

        const leakGradient2 = ctx.createRadialGradient(
          width * 0.85, height * 0.85, 0,
          width * 0.85, height * 0.85, Math.max(width, height) * 0.5
        );
        leakGradient2.addColorStop(0, 'rgba(255, 230, 200, 0.5)');
        leakGradient2.addColorStop(1, 'transparent');
        ctx.fillStyle = leakGradient2;
        ctx.fillRect(0, 0, width, height);
      }
      
      // 3. Draw the Vignette (separately to avoid conflicts)
      ctx.globalCompositeOperation = 'source-over';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'destination-in';
      const vignetteGradient = ctx.createRadialGradient(
          width / 2, height / 2, Math.max(width, height) * 0.2,
          width / 2, height / 2, Math.max(width, height) * 0.5
      );
      vignetteGradient.addColorStop(0, 'rgba(0, 0, 0, 1)');
      vignetteGradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = vignetteGradient;
      ctx.fillRect(0, 0, width, height);

      // 4. Draw the Caption text
      ctx.globalCompositeOperation = 'source-over';
      if (tempCaption) {
          ctx.font = '40px Caveat'; 
          ctx.fillStyle = '#4B5563';
          ctx.textAlign = 'center';
          ctx.fillText(tempCaption, width / 2, height * 0.95);
      }

      // 5. Trigger the download
      const link = document.createElement('a');
      link.download = `instax-photo-${Date.now()}.png`;
      link.href = canvas.toDataURL('image/png');
      link.click();
      setIsDownloading(false);
    };

    image.onerror = (err) => {
      console.error("Failed to load image for canvas.", err);
      setIsDownloading(false);
    };

    image.src = imageSrc;
  }, [imageSrc, caption, filter, tempCaption]);

  const handleSaveCaption = () => {
    onCaptionChange(tempCaption);
    setIsEditingCaption(false);
  };

  const handleCancelCaptionEdit = () => {
    setTempCaption(caption);
    setIsEditingCaption(false);
  };

  const getBaseFilterClass = () => {
    if (filter === 'ultimate-polaroid') return 'filter-ultimate-polaroid';
    if (filter === 'vintage-bw') return 'filter-vintage-bw';
    if (filter === 'vivid') return 'filter-vivid';
    return '';
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div 
        ref={photoRef}
        className={`polaroid-photo bg-white p-4 pb-16 shadow-2xl ${animateShake ? 'animate-shake' : ''}`}
        style={{
          filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))',
        }}
      >
        <div className="relative overflow-hidden">
          <canvas ref={downloadCanvasRef} style={{ display: 'none' }} />
          
          <div className="relative aspect-square w-80 overflow-hidden bg-gray-100 photo-container">
            <img
              src={imageSrc}
              alt="Captured"
              className={`w-full h-full object-cover ${getBaseFilterClass()} flip-x`}
            />
            {filter === 'ultimate-polaroid' && (
              <>
                <div className="overlay-hue-1"></div>
                <div className="overlay-hue-2"></div>
                <div className="ultimate-glow-overlay"></div>
                <div className="absolute inset-0 z-10 ultimate-vignette"></div>
              </>
            )}
            
        
          </div>
          
          <div className="mt-12 h-12 flex items-center justify-center">
            {isEditingCaption ? (
              <div className="flex items-center gap-2 w-full">
                <input
                  type="text"
                  value={tempCaption}
                  onChange={(e) => setTempCaption(e.target.value)}
                  placeholder="Add a caption..."
                  className="flex-1 bg-transparent text-center text-gray-700 font-caveat-handwriting text-lg placeholder-gray-400 outline-none"
                  maxLength={40}
                  autoFocus
                />
                <button
                  onClick={handleSaveCaption}
                  className="text-green-600 hover:text-green-800 p-1"
                >
                  <Check className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCancelCaptionEdit}
                  className="text-red-600 hover:text-red-800 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditingCaption(true)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors group w-full justify-center"
              >
                {caption ? (
                  <span className="font-caveat-handwriting text-lg text-center">{caption}</span>
                ) : (
                  <>
                    <Edit3 className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                    <span className="text-gray-400 group-hover:text-gray-600 italic">
                      Add caption...
                    </span>
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>

      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        <Download className={`w-5 h-5 ${isDownloading ? 'animate-bounce' : ''}`} />
        {isDownloading ? 'Downloading...' : 'Download Photo'}
      </button>

      <div className="text-center text-amber-600 text-sm max-w-md">
        <p>Your instant memory is ready! Edit the caption by clicking on it, then download your vintage-styled photo.</p>
      </div>
    </div>
  );
};

export default PolaroidPhoto;