"use client";

import { useRef, useState, useEffect } from "react";
import { FaPlay, FaPause, FaCrown } from "react-icons/fa";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5";

import {
  HeroVideo,
  HeroTitle,
  HeroTitleText,
  HeroOverlay,
  HeroVideoWrapper,
  StyledButton,
  VolumeButton,
  VolumeInput,
  StyledVolumeButton,
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
        <FaCrown size={25} color={"#ffc803"} />
        <HeroTitleText>
          Замовте індивідуальну або групову дитячу фотосесію
        </HeroTitleText>
        <FaCrown size={25} color={"#ffc803"} />
      </HeroTitle>
      <HeroVideoWrapper>
        <HeroVideo
          disablePictureInPicture
          // autoPlay
          loop
          // poster="/images/tiff.jpeg"
          ref={videoRef}
        >
          <source src="/video/model.mp4" type="video/mp4" />
        </HeroVideo>
        <HeroOverlay>
          {!isPlaying && (
            <StyledButton onClick={handlePlay}>
              <FaPlay size={15} color={"#FFC803"} />
            </StyledButton>
          )}
          {isPlaying && (
            <StyledButton onClick={handlePause}>
              <FaPause size={15} color={"#FFC803"} />
            </StyledButton>
          )}
          <VolumeButton>
            <StyledVolumeButton onClick={handleVolume}>
              {volume !== 0 && <IoVolumeHigh size={25} color={"#FFC803"} />}
              {volume === 0 && <IoVolumeMute size={25} color={"#FFC803"} />}
            </StyledVolumeButton>
            <VolumeInput
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={handleVolumeChange}
            />
          </VolumeButton>
        </HeroOverlay>
      </HeroVideoWrapper>
    </>
  );
};

export default Hero;
