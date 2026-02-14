
import React from 'react';

export interface PhotoFrameProps {
  id: number;
  imageUrl?: string;
  quote?: string;
  className?: string;
}

const PhotoFrame: React.FC<PhotoFrameProps> = ({
  id,
  imageUrl,
  quote,
  className = "",
}) => {


  return (
    <div
      className={`
        relative group w-56 h-72 bg-white p-3 shadow-xl
        transform transition-all duration-300
        border-b-8 border-gray-100
        ${className}
      `}
    >
      <div className="w-full h-48 bg-pink-50 overflow-hidden flex items-center justify-center border border-pink-100 relative">
        {imageUrl ? (
          <img src={imageUrl} alt={`Memory ${id}`} className="w-full h-full object-cover" />
        ) : (
          <div className="text-center p-4">
            <span className="text-pink-300 text-3xl">📸</span>
            <p className="text-[10px] text-pink-400 mt-2 uppercase tracking-widest font-bold">Moment of MEMORIES</p>
          </div>
        )}


        <div className="absolute top-2 right-2 text-pink-500 opacity-50 group-hover:opacity-100 transition-opacity">
          ❤️
        </div>
      </div>
      <div className="mt-3 text-center px-1">
        <p className="font-handwriting text-pink-600 text-sm leading-tight italic">
          {quote || `Our Moment ${id}`}
        </p>
      </div>
      <div className="absolute -top-3 -left-3 w-8 h-8 bg-red-400 rounded-full flex items-center justify-center shadow-md transform -rotate-12 z-20">
        <span className="text-white text-xs">💖</span>
      </div>
    </div>
  );
};

export default PhotoFrame;
