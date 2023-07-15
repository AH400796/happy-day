"use client";

import styled, { keyframes } from "styled-components";

const animCircle = keyframes`
0% {    
    transform: scale(1);
  }
50% {
    transform: scale(1.2);;
  }
100% {
    transform: scale(1);;
  }
`;

const animHand = keyframes`
0% {    
    transform: translate(0, 0 );
  }
50% {
    transform: translate(-15px, -5px );;
  }
100% {
    transform: translate(0, 0 );
  }
`;

export const Wrapper = styled.div`
  z-index: 100;
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 250px;
  height: 140px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  padding: 20px;
  border-radius: 30px 5px 30px 30px;
  border: 1px solid #f17209;

  background: linear-gradient(180deg, #ffdd61 0%, #f5f0a6 100%);
  box-shadow: 2px 2px 5px #7a7a78;
`;

export const IconWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px solid #f17209;

  animation-name: ${animCircle};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

export const InnerCircle = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f17209;
`;

export const Hand = styled.span`
  position: absolute;
  right: -20px;
  bottom: -25px;
  animation-name: ${animHand};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

export const TextLink = styled.a`
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.2;
  color: #4e6739;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
  }

  &:hover,
  &:focus {
    color: #f17209;
  }
`;

export const ModalCloseBtn = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 0;
  top: 0;
  padding: 5px;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`;
