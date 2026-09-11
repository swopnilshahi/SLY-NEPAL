import React from "react";

const StoriesCard = ({ stories }) => {
  return (
    <div className="flex flex-col gap-3">
      {stories?.map((story, index) => (
        <div
          key={story.id || index}
          className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:scale-[1.02] transition"
        >
          <h4 className="font-semibold text-sm">
            {story.title}
          </h4>

          <p className="text-xs text-slate-500 line-clamp-2">
            {story.story}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StoriesCard;