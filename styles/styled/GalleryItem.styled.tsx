"use client";

import styled from "styled-components";

interface IStyledProps {
  "data-type"?: boolean;
}

interface IStyledCollectionProps {
  "data-collection"?: string;
}

export const PhotoCard = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  box-shadow: 2px 3px 5px #7c7c7c;
  padding: 10px 10px 20px 10px;
  transform: ${(props) =>
    props["data-type"] ? `rotate(-15deg) scale(1)` : `rotate(10deg) scale(1)`};
  transition: transform 0.35s ease;

  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
  }

  &:hover,
  &:focus {
    transform: ${(props) =>
      props["data-type"]
        ? `rotate(-15deg) scale(1.05)`
        : `rotate(10deg) scale(1.05)`};
  }
`;

export const ItemWrapper = styled.div<IStyledCollectionProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  overflow: hidden;
  background-color: #bbe29ba2;

  box-shadow: 2px 3px 5px #bbb8b8;
  cursor: pointer;

  flex-basis: calc((100% - 0px) / 1);
  height: 300px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 1 * 10px) / 2);
    height: 350px;
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 2 * 10px) / 3);
    height: 400px;
  }
`;
