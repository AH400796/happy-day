"use client";

import styled from "styled-components";

export const SliderTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 5px;

  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #93b674;
  color: #f78629;

  @media screen and (min-width: 768px) {
    padding: 5px 10px;
  }
  @media screen and (min-width: 1280px) {
    padding: 5px 15px;
  }
`;

export const SliderTitleText = styled.p`
  width: 100%;
  text-align: center;
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

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
  }
`;
