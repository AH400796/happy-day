"use client";

import styled from "styled-components";
import Link from "next/link";

interface IStyledProps {
  "data-active"?: boolean;
}
interface IStyledLinkProps {
  "data-active"?: boolean;
}
export const StyledLabel = styled.label<IStyledProps>`
  display: flex;
  justify-content: left;
  align-items: center;
  width: 100%;
  padding: 10px 0;
  border-radius: 30px 0 30px 0;
  clip-path: polygon(5% 0%, 100% 0, 100% 50%, 95% 100%, 0 100%, 0 50%);
  border: ${(props) =>
    props[`data-active`] ? "2px solid #4e6739" : "2px solid transparent"};

  border-left: none;
  border-right: none;
  cursor: pointer;
`;

export const StyledLink = styled(Link)<IStyledLinkProps>`
  text-decoration: none;
  color: ${(props) => (props[`data-active`] ? "#4e6739" : "#ffc803")};
`;

export const LabelText = styled.span`
  text-align: center;
  width: 100%;
  padding: 0 5px;
  line-height: 1;
`;

export const WrapperStyled = styled.div<IStyledProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border-radius: 50px 0 50px 0;

  background-color: ${(props) =>
    props[`data-active`] ? "#ffc803" : "#4e6739"};

  font-size: 16px;
  font-weight: 700;
  color: ${(props) => (props[`data-active`] ? "#4e6739" : "#ffc803")};

  &:hover,
  &:focus {
    background-color: #ffc803;
    color: #4e6739;
  }
`;