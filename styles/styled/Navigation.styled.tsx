"use client";

import Link from "next/link";
import styled from "styled-components";

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

export const StyledLink = styled(Link)<{ [`data-active`]: boolean }>`
  font-size: 18px;
  font-weight: 700;
  color: ${(props) => (props[`data-active`] ? "#27B1DD" : "#4e6739")};

  @media screen and (min-width: 768px) {
    font-size: 20px;
    font-weight: 700;
    color: ${(props) => (props[`data-active`] ? "#27B1DD" : "#ffc803")};
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
    font-weight: 700;
  }

  &:hover,
  &:focus {
    color: #27b1dd;
  }
`;
