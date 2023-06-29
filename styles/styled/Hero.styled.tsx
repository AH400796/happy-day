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
  background: linear-gradient(180deg, #4e6739 0%, #aecc94 100%);

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
      #ffdd61 0%,
      #ffdd61 ${value * 100}%,
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
    background: #ffdd61;
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
      #ffdd61 0%,
      #ffdd61 ${value * 100}%,
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
    background: #ffdd61;
    cursor: pointer;
  }

  &[type="range"]::-ms-track {
    height: 5px;
    border-radius: 5px;
    background: ${(props) => {
      const value = Number(props.value);
      return `linear-gradient(
      to right,
      #ffdd61 0%,
      #ffdd61 ${value * 100}%,
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
    background: #ffdd61;
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
  border: 1px solid #ffdd61;
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
  border: 1px solid #ffdd61;
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

export const HeroTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 0;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;

  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #93b674;
  color: #f78629;

  @media screen and (min-width: 768px) {
    padding: 5px 10px;
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
    padding: 5px 15px;
    font-size: 24px;
  }

  &:before,
  &:after {
    content: "";
    display: inline-block;
    width: 30px;
    height: 25px;
    background-image: url("/crown.png");
    background-repeat: no-repeat;
    background-position: center;
  }
`;
