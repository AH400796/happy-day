"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  /* display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden; */
`;
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
  background-color: #44443d8d;
  backdrop-filter: blur(2px);
`;

export const ModalWindow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #4e6739;
  overflow: hidden;
`;

export const SliderCloseButton = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
  top: 20px;
  padding: 0;
  border: none;
  outline: none;
  background-color: transparent;
  color: #ffc107;
`;
