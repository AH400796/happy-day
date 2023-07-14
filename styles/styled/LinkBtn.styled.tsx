"use client";

import styled, { css, keyframes } from "styled-components";
import Link from "next/link";

interface IStyledProps {
  "data-active"?: boolean;
}

interface IAnimateProps {
  "data-animate"?: boolean;
}

const animTextAppearance = keyframes`
0% {    
    opacity: 0;
  }
100% {
    opacity: 1;
  }
`;

export const StyledLink = styled(Link)<IStyledProps>`
  min-width: 200px;
  width: 200px;
  text-decoration: none;

  @media screen and (min-width: 768px) {
    min-width: 180px;
    width: 180px;
  }

  @media screen and (min-width: 1280px) {
    min-width: 200px;
    width: 200px;
  }
`;

export const WrapperStyled = styled.div<IStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => (props[`data-active`] ? "70px" : "50px")};
  padding: 0 20px;
  border-radius: ${(props) => (props[`data-active`] ? "40px" : "30px")};

  font-size: 16px;
  font-weight: 700;
  color: ${(props) => (props[`data-active`] ? "#f78629" : "#6d9150")};
  border: ${(props) =>
    props[`data-active`] ? "1px solid #f78629;" : "1px solid #cccac87b"};

  &:hover,
  &:focus {
    text-decoration: underline;
    border-color: transparent;
    background: linear-gradient(180deg, #ffdd61 0%, #f5f0a6 100%);
    color: #f78629;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const LinkText = styled.span<IAnimateProps>`
  text-align: center;
  width: 100%;
  padding: 0 5px;
  line-height: 1;
  animation-name: ${(props) => {
    if (props[`data-animate`]) {
      return animTextAppearance;
    }
  }};
  animation-duration: 1s;
  animation-iteration-count: 1;
`;
