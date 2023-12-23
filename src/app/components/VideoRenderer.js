import React, { useEffect, useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";

const VideoRenderer = ({ videoPath, closeModal, generatedText }) => {
  const [showText, setShowText] = useState(true);

  return (
    <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full sm:w-4/6 sm:h-1/2 md:w-3/6 md:1/2 lg:w-2/6 xl:w-2/6 h-3/4 flex items-center justify-center">
      <div className="relative rounded-lg overflow-hidden w-full h-full">
        {generatedText === 'Thala for no reason 😔' ? (
          <video className="w-full h-full object-cover" autoPlay loop controls>
            <source src={require("../../../public/crying.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <video className="w-full h-full object-cover" autoPlay loop controls>
            <source src={require("../../../public/thala.mp4")} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
        {showText && (
          <div className="text-xl absolute bottom-2 left-1/2 transform -translate-x-1/2 text-white font-bold text-center">
            <p>{generatedText}</p>
          </div>
        )}
        <button className="absolute z-50 top-2 right-2 text-white" onClick={closeModal}>
          <IoMdCloseCircle />
        </button>
      </div>
    </div>
  );
};

export default VideoRenderer;
