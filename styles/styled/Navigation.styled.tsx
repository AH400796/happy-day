"use client";

import Link from "next/link";
import styled from "styled-components";

interface IStyledLinkProps {
  "data-active"?: boolean;
}

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 40px;

  @media screen and (min-width: 768px) {
    align-items: flex-end;
    gap: 20px;
  }
  @media screen and (min-width: 1280px) {
    flex-direction: row;
    gap: 50px;
  }
`;

export const StyledLink = styled(Link)<IStyledLinkProps>`
  font-size: 24px;
  font-weight: 700;
  border-radius: 20px;
  padding: 0 20px;

  color: ${(props) => (props[`data-active`] ? "#f78629" : "#4e6739")};

  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 700;
    background: ${(props) =>
      props[`data-active`]
        ? "linear-gradient(180deg, #ffdd61 0%, #f5f0a6 100%)"
        : "transparent"};
    color: ${(props) => (props[`data-active`] ? "#f78629" : "#ffdd61")};
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    font-weight: 700;
  }

  &:hover,
  &:focus {
    color: #f78629;
    background: linear-gradient(180deg, #ffdd61 0%, #f5f0a6 100%);
  }
`;
