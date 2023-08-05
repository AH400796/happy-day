"use client";

import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";

import {
  HeroVideo,
  HeroTitle,
  HeroOverlay,
  HeroVideoWrapper,
  StyledButton,
  VolumeButton,
  VolumeInput,
  StyledVolumeButton,
  TitleHolder,
} from "@styles/styled/Hero.styled";

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.2);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = volume;
    }
  }, [volume]);

  const handlePlay: React.MouseEventHandler<HTMLButtonElement> = () => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handlePause: React.MouseEventHandler<HTMLButtonElement> = () => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleVolume: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (volume > 0) {
      setVolume(0);
    } else {
      setVolume(0.2);
    }
  };

  const handleVolumeChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const newVolume = parseFloat(event.target.value);
    setVolume(newVolume);
  };

  return (
    <>
      <HeroTitle>
        <TitleHolder>
          Індивідуальна або групова професійна фотосесія
        </TitleHolder>
      </HeroTitle>
      <HeroVideoWrapper>
        <HeroVideo
          disablePictureInPicture
          loop
          poster="/poster.jpg"
          ref={videoRef}
        >
          <source src="/video/model.mp4" type="video/mp4" />
        </HeroVideo>
        <HeroOverlay>
          {!isPlaying && (
            <StyledButton
              onClick={handlePlay}
              type="button"
              aria-label="play button"
            >
              <FaPlay size={15} color={"#ffdd61"} />
            </StyledButton>
          )}
          {isPlaying && (
            <StyledButton
              onClick={handlePause}
              type="button"
              aria-label="pause button"
            >
              <FaPause size={15} color={"#ffdd61"} />
            </StyledButton>
          )}
          <VolumeButton>
            <StyledVolumeButton
              onClick={handleVolume}
              type="button"
              aria-label="volume button"
            >
              {volume !== 0 && <IoVolumeHigh size={25} color={"#ffdd61"} />}
              {volume === 0 && <IoVolumeMute size={25} color={"#ffdd61"} />}
            </StyledVolumeButton>
            <label htmlFor="volume_input"></label>
            <VolumeInput
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              name="volume"
              id="volume_input"
              onChange={handleVolumeChange}
            />
          </VolumeButton>
        </HeroOverlay>
      </HeroVideoWrapper>
    </>
  );
};

export default Hero;
