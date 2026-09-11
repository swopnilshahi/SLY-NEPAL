import { lazy, Suspense } from "react";
import CTA from "../components/methods/CTA";
import Video from "../components/vid/Video";
import VidNav from "../components/vid/VidNav";

const PlaylistGrid = lazy(() =>
  import("../components/vid/PlaylistGrid")
);

const VideoPage = () => {
  const details = [
    {
      playlistId: "PLrhYoagfPkbVwMuFvc6mwBwJvix1eoO-r",
      title: "Naturopathy treatment",
    },
    {
      playlistId: "PLrhYoagfPkbUo_BJ7D2j9Z02i8VMUmr9y",
      title: "Laughter Yoga",
    },
  ];

  return (
    <>
      <Video />
      <VidNav details={details}/>

      <div className="space-y-10 p-4">
        {details.map((detail, index) => (
          <section
            key={detail.playlistId}
            id={`sec-${index + 1}`}
            className="scroll-mt-20"
          >
            <Suspense fallback={<div>Loading videos...</div>}>
              <PlaylistGrid
                playlistId={detail.playlistId}
                section={detail.title}
              />
            </Suspense>
          </section>
        ))}
      </div>

      <CTA />
    </>
  );
};

export default VideoPage;