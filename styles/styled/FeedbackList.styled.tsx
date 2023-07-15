"use client";

import styled from "styled-components";

export const StyledFeedbackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  list-style: none;
  gap: 30px;
  padding: 20px 10px;
  font-size: 14px;
  font-weight: 400;

  color: #4e6739;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;
  margin-bottom: 10px;
  font-size: 14px;

  border-top: none;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 15px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;

export const FeedbackBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 140px;
  height: 35px;
  font-weight: 600;

  background-color: transparent;
  border: none;
  outline: none;
  color: #5b6652;
  cursor: pointer;

  &:hover,
  &:focus {
    color: #f17209;
  }

  &:disabled {
    color: #c8cbcc;
    cursor: auto;
  }
`;
