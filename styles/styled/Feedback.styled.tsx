"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
`;

export const FeedbackTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 5px 5px 10px 5px;

  border-radius: 10px 10px 0 0;
  background-color: #4e6739;
  color: #ffc803;

  @media screen and (min-width: 768px) {
    padding: 5px 10px 10px 10px;
  }
  @media screen and (min-width: 1280px) {
    padding: 10px 15px 15px 15px;
  }
`;

export const FeedbackTitleText = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;

  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`;

export const FeedbackText = styled.div`
  padding: 20px 10px 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.2;
  text-indent: 20px;

  color: #4e6739;
  border: 1px solid #4e6739;
  border-bottom: none;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Anchor = styled.a`
  text-decoration: underline;
  color: #4e6739;
  font-weight: 600;
`;
