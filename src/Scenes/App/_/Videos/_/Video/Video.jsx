import React from "react";
import { Player } from "video-react";

export default function Video({ videoId, poster }) {
  if (!videoId) {
    return <div>Loading...</div>;
  }

  return (
  <Player
      playsInline
      poster={poster}
      src={videoId}
  />
  );
};