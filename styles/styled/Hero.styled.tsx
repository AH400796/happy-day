"use client";

import styled from "styled-components";

export const HeroVideo = styled.video`
  width: 100%;
`;

export const HeroVideoWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
  }
  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
  }
`;

export const HeroOverlay = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  padding-left: 10px;
  bottom: 0;
  left: 50%;
  width: 160px;
  height: 40px;
  border-radius: 20px;
  transform: translate(-50%, 10%);
  background: linear-gradient(180deg, #4e6739 0%, #93b674 100%);

  @media screen and (min-width: 768px) {
    width: 185px;
    height: 50px;
    border-radius: 30px;
  }
  @media screen and (min-width: 1280px) {
    width: 210px;
    height: 60px;
    border-radius: 40px;
  }
`;

export const VolumeInput = styled.input<any>`
  width: 60%;

  &[type="range"] {
    height: 40px;
    -webkit-appearance: none;
    background: transparent;
  }

  &[type="range"]::-webkit-slider-runnable-track {
    height: 5px;
    border-radius: 5px;
    background: ${(props) => {
      const value = Number(props.value);
      return `linear-gradient(
      to right,
      #ffc803 0%,
      #ffc803 ${value * 100}%,
      #b0e7a8 ${value * 100}%,
      #b0e7a8 100%
    )`;
    }};
  }

  &[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 20px;
    width: 3px;
    border-radius: 3px;
    background: #ffc803;
    transform: translate(0, -40%);
    cursor: pointer;
  }

  &[type="range"]::-moz-range-track {
    height: 5px;
    border-radius: 5px;
    background: ${(props) => {
      const value = Number(props.value);
      return `linear-gradient(
      to right,
      #ffc803 0%,
      #ffc803 ${value * 100}%,
      #27b1dd ${value * 100}%,
      #27b1dd 100%
    )`;
    }};
  }
  &[type="range"]::-moz-range-thumb {
    -webkit-appearance: none;
    border: none;
    height: 20px;
    width: 3px;
    border-radius: 3px;
    background: #ffc803;
    cursor: pointer;
  }

  &[type="range"]::-ms-track {
    height: 5px;
    border-radius: 5px;
    background: ${(props) => {
      const value = Number(props.value);
      return `linear-gradient(
      to right,
      #ffc803 0%,
      #ffc803 ${value * 100}%,
      #27b1dd ${value * 100}%,
      #27b1dd 100%
    )`;
    }};
  }

  &[type="range"]::-ms-thumb {
    -webkit-appearance: none;
    border: none;
    height: 20px;
    width: 3px;
    border-radius: 3px;
    background: #ffc803;
    cursor: pointer;
  }
`;
export const VolumeButton = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 0 10px;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 0 8px;
  background-color: #1a191950;
  border-radius: 50%;
  border: 1px solid #ffc803;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
    padding: 0 10px;
  }
  @media screen and (min-width: 1280px) {
    width: 40px;
    height: 40px;
    padding: 0 13px;
  }

  &:hover,
  &:focus {
    background-color: #1a191983;
  }
`;

export const StyledVolumeButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  padding: 5px;
  background-color: #1a191950;
  border-radius: 50%;
  border: 1px solid #ffc803;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    width: 35px;
    height: 35px;
    padding: 0;
  }
  @media screen and (min-width: 1280px) {
    width: 40px;
    height: 40px;
    padding: 0;
  }

  &:hover,
  &:focus {
    background-color: #1a191983;
  }
`;

export const HeroTitle = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 5px 5px 10px 5px;

  border-radius: 10px 10px 0 0;
  background: linear-gradient(180deg, #4e6739 0%, #93b674 100%);
  color: #ffc803;

  @media screen and (min-width: 768px) {
    padding: 10px 10px 15px 10px;
  }
  @media screen and (min-width: 1280px) {
    padding: 15px 15px 20px 15px;
  }
`;

export const HeroTitleText = styled.p`
  width: 100%;
  max-width: 250px;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;

  @media screen and (min-width: 400px) {
    max-width: 380px;
  }

  @media screen and (min-width: 768px) {
    max-width: 550px;
    font-size: 24px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1100px;
    font-size: 28px;
  }
`;
