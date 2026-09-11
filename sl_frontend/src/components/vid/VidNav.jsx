import { useEffect, useState } from "react";

const VidNav = ({ details }) => {
  const scrollTo = (index) => {
    document
      .getElementById(`sec-${index + 1}`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="flex gap-3 px-4 py-3 flex-wrap">
      {details.map((detail, index) => (
        <button
          key={detail.playlistId}
          onClick={() => scrollTo(index)}
          className="px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition text-sm"
        >
          {detail.title}
        </button>
      ))}
    </div>
  );
};

export default VidNav;
