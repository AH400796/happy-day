"use client";

import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 20px 0;
  background-color: #505050c6;
  backdrop-filter: blur(3px);
`;

export const ModalWindow = styled.div`
  position: relative;
  z-index: 10000;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
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
  color: #ffffff;
  background-color: transparent;
  cursor: pointer;
  filter: drop-shadow(2px 2px 2px #6e6e6e);
  transition: all 0.3s ease;

  &:hover,
  &:focus {
    color: #f17209;
    transform: scale(1.2);
  }
`;
