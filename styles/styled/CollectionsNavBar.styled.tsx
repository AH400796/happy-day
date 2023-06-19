"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  width: 100%;
  padding: 10px 48px;
  overflow: hidden;
`;

export const CollectionsBtns = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  overflow: hidden;
`;

export const ActiveLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PrevBtn = styled.button`
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  background-color: transparent;
  border: none;
  outline: none;
  color: #5b6652;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #f78629;
  }

  &:disabled {
    color: #c8cbcc;
    cursor: auto;
  }
`;
export const NextBtn = styled.button`
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  background-color: transparent;
  border: none;
  outline: none;
  color: #5b6652;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #f78629;
  }

  &:disabled {
    color: #c8cbcc;
    cursor: auto;
  }
`;
