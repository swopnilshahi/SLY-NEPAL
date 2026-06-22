import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosPlay } from "react-icons/io";

const Video = ({ videoId = "SBq3J38yaaY" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [title, setTitle] = useState("Loading...");

  useEffect(() => {
    const fetchVideoInfo = async () => {
      try {
        const res = await axios.get(
          `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
        );
        setTitle(res.data.title);
      } catch (err) {
        setTitle("YouTube Video");
      }
    };

    fetchVideoInfo();
  }, [videoId]);

  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <section className="w-full max-w-screen-xl mx-auto px-3 sm:px-4 py-4 sm:py-6">
      
      {/* Header */}
      <div className="mb-3 sm:mb-5">
        <p className="text-green-600 text-xs sm:text-sm font-medium">
          Live from Kathmandu
        </p>

        <h1 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
          Featured Healing Session
        </h1>
      </div>

      {/* Video Container */}
      <div className="w-full">
        
        {/* Player Box (YouTube style) */}
        <div className="relative w-full aspect-video bg-black rounded-lg sm:rounded-xl overflow-hidden shadow-lg">
          
          {!isPlaying && (
            <div
              className="relative w-full h-full cursor-pointer group"
              onClick={() => setIsPlaying(true)}
            >
              {/* Thumbnail */}
              <img
                src={thumbnail}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <button className="h-14 w-14 sm:h-16 sm:w-16 bg-green-600 hover:bg-green-700 rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-110">
                  <IoIosPlay className="text-white text-2xl sm:text-3xl ml-1" />
                </button>
              </div>
            </div>
          )}

          {/* Video iframe */}
          {isPlaying && (
            <iframe
              src={videoUrl}
              title={title}
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
            />
          )}
        </div>

        {/* Title below video (YouTube style) */}
        <h3 className="mt-3 sm:mt-4 text-sm sm:text-lg lg:text-xl font-semibold text-gray-900 line-clamp-2">
          {title}
        </h3>
      </div>
    </section>
  );
};

export default Video;