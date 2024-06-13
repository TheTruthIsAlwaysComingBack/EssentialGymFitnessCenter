import React, { useRef, useState } from "react";
import AudioControlButton from "./AudioControlButton";
import "./AudioPlayer.css";

const AudioPlayer = ({ playlist }) => {
  const audioRef = useRef(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = playlist[currentTrackIndex];

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleNext = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    setIsPlaying(true);
  };

  const handlePrev = () => {
    setCurrentTrackIndex(
      (prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length
    );
    setIsPlaying(true);
  };

  return (
    <div className="AudioPlayer">
      <audio
        ref={audioRef}
        src={currentTrack.src}
        onEnded={handleNext}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <AudioControlButton icon="prev" onClick={handlePrev} />
      <AudioControlButton
        icon={isPlaying ? "pause" : "play"}
        onClick={handlePlayPause}
      />
      <AudioControlButton icon="next" onClick={handleNext} />
    </div>
  );
};

export default AudioPlayer;
