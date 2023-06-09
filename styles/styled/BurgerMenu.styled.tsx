"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BurgerButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const MenuCloseButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
`;

export const MenuOverlay = styled.div<{ "data-menu": boolean }>`
  position: absolute;
  z-index: 10;
  top: -40px;
  right: 10px;
  width: 250px;
  display: flex;
  justify-content: right;
  align-items: flex-start;
  background: #ffdd61;
  border-radius: 20px;
  padding: 20px;
  transform: ${(props) => {
    if (!props[`data-menu`]) {
      return `translate(0,-350px)`;
    } else {
      return `translate(0, 0)`;
    }
  }};
  transition: transform 0.5s ease-in-out;
`;
