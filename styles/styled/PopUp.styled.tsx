"use client";

import styled, { keyframes } from "styled-components";
interface IStyledLinkProps {
  "data-shaw"?: boolean;
}

const animHand = keyframes`
0% {    
    transform: translate(10px, 2px);
  }
50% {
    transform:  translate(-7px, 2px);
  }
100% {
    transform:  translate(10px, 2px);
  }
`;

export const Wrapper = styled.div<IStyledLinkProps>`
  z-index: 100;
  position: fixed;
  bottom: 50px;
  right: 50px;
  width: 290px;
  height: 155px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  padding: 20px;
  border-radius: 30px 5px 30px 30px;

  background: linear-gradient(180deg, #bbe29b 0%, #ffffff 100%);
  box-shadow: 2px 2px 5px #7a7a78;

  transform: ${(props) =>
    props[`data-shaw`] ? "translateY(0)" : "translateY(300px)"};
  transition: transform 0.5s ease-in-out;
`;

export const IconWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 150px;
  height: 40px;
  text-transform: uppercase;

  color: #ffdd61;
  background: #4e6739;
  border-radius: 20px;
  border: 1px solid transparent;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: none;
    background: linear-gradient(180deg, #ffdd61 0%, #f5f0a6 100%);
    border: 1px solid #f17209;
    color: #f17209;
  }
`;

export const Hand = styled.span`
  animation-name: ${animHand};
  animation-duration: 2s;
  animation-iteration-count: infinite;
`;

export const Text = styled.div`
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
  color: #f17209;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
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
  color: #4e6739;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.2);
    color: #f17209;
  }
`;
