"use client";

import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GalleryList = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 10px;
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  padding: 5px 5px 40px 5px;
  border: 1px solid #eeeeee;
  box-shadow: 2px 3px 5px #7c7c7c;
  cursor: pointer;

  flex-basis: calc((100% - 0) / 1);
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 1 * 10px) / 2);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 2 * 10px) / 3);
  }
`;

export const GalleryTitle = styled.h1`
  font-size: 20px;
  text-align: center;

  margin-bottom: 20px;
  color: #4e6739;

  @media screen and (max-width: 767px) {
    display: block;
    width: 250px;
    margin-bottom: 10px;
    padding-left: 50px;
  }

  @media screen and (min-width: 768px) {
    font-size: 24px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 28px;
  }
`;
