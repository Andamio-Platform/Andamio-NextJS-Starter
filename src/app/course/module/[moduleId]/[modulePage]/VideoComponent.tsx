"use client";

import YouTube from "react-youtube";

export default function VideoComponent(props: { videoUrl: string }) {
  // Handle video URLs
  let youtubeId: string;

  if (props.videoUrl.length == 11) {
    youtubeId = props.videoUrl;
  } else if (props.videoUrl.includes("https://www.youtube.com/watch?v=")) {
    youtubeId = props.videoUrl.substring(32);
  } else {
    youtubeId = "error"
  }

  return (
    <>
      {youtubeId != "error" && (
        <div className="flex w-full my-5 justify-center">
          <YouTube videoId={youtubeId} />
        </div>
      )}
    </>
  );
}
