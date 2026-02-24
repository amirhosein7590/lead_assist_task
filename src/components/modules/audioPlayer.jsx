"use client";

import { useState, useRef, useEffect, memo, useCallback } from "react";
import { Input } from "./input";
import { Button } from "./button";
import { CiPause1, CiPlay1 } from "react-icons/ci";
import { FaVolumeMute } from "react-icons/fa";
import { GoUnmute } from "react-icons/go";

const AudioPlayer = ({ src, className }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const getDuration = useCallback(() => {
    return formatTime(audioRef.current?.duration);
  }, [audioRef]);

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) audioRef.current.pause();
    else audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !audioRef.current.muted;
    setIsMuted(audioRef.current.muted);
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => {
      if (!isSeeking) setCurrentTime(audio.currentTime);
    };
    const handleLoaded = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", handleLoaded);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", handleLoaded);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [isSeeking]);


  const handleSeek = (e) => {
    const newTime = parseFloat(e.target.value);
    console.log(newTime);
    setCurrentTime(newTime);
    audioRef.current.currentTime = newTime;
  };

  return (
    <div
      className={`flex items-center gap-2 p-2 bg-gray-100 rounded-lg max-w-full ${className}`}
    >
      <Button
        variant="icon"
        onClick={togglePlay}
        className="w-8 h-8 flex cursor-pointer items-center justify-center transition-colors shrink-0"
      >
        {isPlaying ? (
          <CiPause1 className="!w-6 !h-6" color="var(--light-blue)" />
        ) : (
          <CiPlay1 className="!w-6 !h-6" color="var(--light-blue)" />
        )}
      </Button>

      <span className="text-xs text-gray-600 font-mono w-10 shrink-0">
        {formatTime(currentTime)}
      </span>

      <Input
        type="range"
        min="0"
        max={audioRef.current?.duration}
        value={currentTime}
        step="0.01"
        onChange={(event) => handleSeek(event)}
        className="flex-1 h-1.5 bg-gray-300 rounded-lg appearance-none cursor-pointer !p-0
[&::-webkit-slider-thumb]:appearance-none
[&::-webkit-slider-thumb]:w-3
[&::-webkit-slider-thumb]:h-3
[&::-webkit-slider-thumb]:bg-blue-500
[&::-webkit-slider-thumb]:rounded-full
[&::-webkit-slider-thumb]:cursor-pointer
[&::-webkit-slider-thumb]:hover:scale-125
[&::-webkit-slider-thumb]:transition-transform"
      />

      <span className="text-xs text-gray-600 font-mono w-10 shrink-0">
        {getDuration()}
      </span>
      <Button
        variant="icon"
        onClick={toggleMute}
        className="w-8 h-8 flex cursor-pointer items-center justify-center transition-colors shrink-0"
      >
        {isMuted ? (
          <span className="!text-blue-500">
            <FaVolumeMute />
          </span>
        ) : (
          <span className="!text-blue-500">
            <GoUnmute />
          </span>
        )}
      </Button>
      <audio ref={audioRef} src={src} preload="metadata" />
    </div>
  );
};

export default memo(AudioPlayer);
