"use client";

import styled from "styled-components";
import Link from "next/link";

interface IStyledProps {
  "data-active"?: boolean;
}
interface IStyledLinkProps {
  "data-active"?: boolean;
}

export const StyledLink = styled(Link)<IStyledLinkProps>`
  min-width: 200px;
  width: 200px;
  text-decoration: none;
  color: ${(props) => (props[`data-active`] ? "#4e6739" : "#ffdd61")};

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
  height: 50px;
  padding: 0 20px;
  border-radius: 15px;

  background: ${(props) =>
    props[`data-active`]
      ? "linear-gradient(180deg, #ffdd61 0%, #f5f0a6 100%)"
      : "linear-gradient(180deg, #6d9150 0%, #b4cf9d 100%)"};

  font-size: 16px;
  font-weight: 700;
  color: ${(props) => (props[`data-active`] ? "#4e6739" : "#ffdd61")};

  &:hover,
  &:focus {
    text-decoration: underline;
    background: linear-gradient(180deg, #ffdd61 0%, #f5f0a6 100%);
    color: #4e6739;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const LinkText = styled.span`
  text-align: center;
  width: 100%;
  padding: 0 5px;
  line-height: 1;
`;
