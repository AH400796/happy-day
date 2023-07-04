"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const Text = styled.p`
  font-size: 20px;
  color: #4e6739;
`;

export const ResetBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 40px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
  color: #4e6739;
  background: #ffdd61;
  border: 1px solid #ffdd61;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  &:hover,
  &:focus {
    background: #4e6739;
    color: #f78629;
    border: 1px solid #f78629;
  }
`;
