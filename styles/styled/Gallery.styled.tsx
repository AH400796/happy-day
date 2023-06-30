"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export const GalleryList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
`;

export const GalleryTitle = styled.h2`
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;

  color: #4e6739;

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;
export const GalleryText = styled.div`
  width: 100%;
  padding: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  text-indent: 20px;
  background: linear-gradient(180deg, #bbe29b 0%, #ffffff 100%);

  color: #4e6739;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;
