import React, { useEffect, useState } from "react";

const PlaylistGrid = ({ playlistId, section }) => {
  const [videos, setVideos] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);



    const API_KEY = import.meta.env.VITE_API_KEY;
    const PLAYLIST_ID = playlistId

   
    useEffect(() => {
      const fetchPlaylistVideos = async () => {
        try {
          const res = await fetch(
            `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&maxResults=50&playlistId=${playlistId}&key=${API_KEY}`
          );

          const data = await res.json();

          const videos = data.items
            ?.filter((item) => {
              const title = item.snippet?.title;

              return (
                item.contentDetails?.videoId &&
                title &&
                title !== "Private video" &&
                title !== "Deleted video"
              );
            })
            .map((item) => ({
              videoId: item.contentDetails.videoId,
              title: item.snippet.title,
              description: item.snippet.description,
              thumbnail:
                item.snippet.thumbnails.high?.url ||
                item.snippet.thumbnails.medium?.url,
              publishedAt: item.snippet.publishedAt,
              channelTitle: item.snippet.channelTitle,
            }));

          setVideos(videos || []);
        } catch (error) {
          console.error(error);
        }
      };

      fetchPlaylistVideos();
    }, [playlistId]);
  const visibleVideos = videos.slice(0, visibleCount);

  return (
    <div className="w-[90vw] mx-auto my-12 text-white">
      {/* Title */}
      <h1 className="text-2xl font-bold mb-6 text-black">
         {section}
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {visibleVideos.map((video) => (
          <div
            key={video.videoId}
            onClick={() =>
              window.open(
                `https://www.youtube.com/watch?v=${video.videoId}`,
                "_blank"
              )
            }
            className="cursor-pointer group"
          >
            {/* Thumbnail */}
            <div className="aspect-video w-full overflow-hidden rounded-lg lg:rounded-xl bg-black">
              <img
                src={`https://img.youtube.com/vi/${video.videoId}/hqdefault.jpg`}
                alt={video.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text section */}
                <div className="mt-2 lg:mt-3 px-1">
                  {/* Title */}
                  <p className="text-xs lg:text-sm text-black font-medium leading-snug line-clamp-2">
                    {video.title}
                  </p>

                
                  <p className="text-[10px] lg:text-xs text-gray-400 mt-1">
                    YouTube Video
                  </p>
                </div>
              </div>
            ))}
          </div>

      {/* Button */}
      <button
        onClick={() =>
          setVisibleCount((prev) =>
            prev === 4 ? videos.length : 4
          )
        }
        className="mt-8 mx-auto block px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-lg transition"
      >
        {visibleCount === 4 ? "Load More" : "See Less"}
      </button>
    </div>
  );
};

export default PlaylistGrid;