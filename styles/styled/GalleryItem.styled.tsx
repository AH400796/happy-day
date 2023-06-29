"use client";

import styled from "styled-components";

interface IStyledProps {
  "data-type"?: boolean;
}

export const PhotoCard = styled.div<IStyledProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* width: 350px;
  height: 350px; */

  transform: rotate(10deg);
  background-color: #ffffff;
  box-shadow: 2px 3px 5px #7c7c7c;
  padding: 10px 10px 20px 10px;
  transform: ${(props) =>
    props["data-type"] ? `rotate(-15deg)` : `rotate(10deg)`};

  @media screen and (min-width: 768px) {
    /* width: 350px;
    height: 350px; */
  }

  @media screen and (min-width: 1280px) {
    /* width: 350px;
    height: 350px; */
  }
`;

export const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  overflow: hidden;
  background: linear-gradient(180deg, #bbe29b 0%, #ffffff 100%);

  box-shadow: 2px 3px 5px #bbb8b8;
  cursor: pointer;

  flex-basis: calc((100% - 0) / 1);
  height: 450px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 1 * 10px) / 2);
    height: 350px;
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 2 * 10px) / 3);
    height: 400px;
  }
`;
