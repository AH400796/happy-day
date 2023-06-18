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
  font-size: 18px;
  font-weight: 700;
  border-radius: 50px 0 50px 0;
  padding: 0 20px;
  background: ${(props) =>
    props[`data-active`]
      ? "linear-gradient(180deg, #ffc803 0%, #f8ed52 100%)"
      : "transparent"};

  color: ${(props) => (props[`data-active`] ? "#f15232" : "#4e6739")};

  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => (props[`data-active`] ? "#f15232" : "#ffc803")};
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    font-weight: 700;
  }

  &:hover,
  &:focus {
    color: #f15232;
    background: linear-gradient(180deg, #ffc803 0%, #f8ed52 100%);
  }
`;
