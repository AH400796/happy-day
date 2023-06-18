"use client";

import Link from "next/link";
import styled from "styled-components";

interface IStyledProps {
  "data-collections"?: boolean;
}

interface IStyledLinkProps {
  "data-active"?: boolean;
  "data-collections"?: boolean;
}

export const Wrapper = styled.aside<IStyledProps>`
  position: absolute;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props[`data-collections`] ? "210px" : "45px")};

  padding: 10px 10px 20px;
  background: ${(props) =>
    props[`data-collections`]
      ? "linear-gradient(180deg, #bbe29b 0%, #ffffff 100%)"
      : "linear-gradient(180deg, #4e6739 0%, #93b674 100%);"};

  border: 3px solid #ffc803;
  border-radius: 50px 0 50px 0;
  box-shadow: 2px 3px 5px #33333390;

  @media screen and (min-width: 768px) {
    width: ${(props) => (props[`data-collections`] ? "210px" : "50px")};
  }

  @media screen and (min-width: 1280px) {
    background: linear-gradient(180deg, #bbe29b 0%, #ffffff 100%);
    position: static;
    width: 210px;
  }
`;

export const CollectionsList = styled.ul<IStyledProps>`
  list-style: none;
  display: ${(props) => (props[`data-collections`] ? "flex" : "none")};
  flex-direction: column;
  width: 100%;
  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const ListTitle = styled.p<IStyledProps>`
  display: ${(props) => (props[`data-collections`] ? "none" : "block")};
  width: 100%;
  font-size: 14px;
  font-weight: 600;

  text-align: center;
  padding: 20px 0 0 0;

  margin-bottom: 5px;
  writing-mode: vertical-rl;
  text-orientation: upright;

  border-radius: 10px 10px 0 0;
  color: #ffc803;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)<IStyledLinkProps>`
  display: ${(props) => (props[`data-collections`] ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  margin-bottom: 10px;
  border-radius: 50px 0 50px 0;
  color: ${(props) => (props[`data-active`] ? "#f15232" : "#4e6739")};
  background: ${(props) =>
    props[`data-active`]
      ? "linear-gradient(180deg, #ffc803 0%, #f8ed52 100%)"
      : "linear-gradient(180deg, #f15232 0%, #d87662 100%)"};
  &:hover,
  &:focus {
    color: #f15232;
    background: linear-gradient(180deg, #ffc803 0%, #f8ed52 100%);
  }

  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;
