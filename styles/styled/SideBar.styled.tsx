"use client";

import styled from "styled-components";

interface IStyledProps {
  "data-collections"?: boolean;
}

export const Wrapper = styled.aside<IStyledProps>`
  position: absolute;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${(props) => (props[`data-collections`] ? "210px" : "45px")};

  padding: 0 10px 20px;
  background-color: ${(props) =>
    props[`data-collections`] ? "#ffffff" : "#4e6739"};

  border: 3px solid #ffc803;
  border-radius: 50px 0 50px 0;
  box-shadow: 2px 3px 5px #7c7c7c;

  @media screen and (min-width: 768px) {
    width: ${(props) => (props[`data-collections`] ? "210px" : "50px")};
  }

  @media screen and (min-width: 1280px) {
    background-color: #ffffff;
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

export const ListTitle = styled.h2<IStyledProps>`
  width: 100%;
  font-size: ${(props) => (props[`data-collections`] ? "16px" : "14px")};

  text-align: center;
  padding: ${(props) =>
    props[`data-collections`] ? "5px 5px 5px 5px" : "20px 0 0 0"};

  margin-bottom: 5px;
  writing-mode: ${(props) =>
    props[`data-collections`] ? "horizontal-tb" : "vertical-rl "};

  text-orientation: upright;

  border-radius: 10px 10px 0 0;
  color: ${(props) => (props[`data-collections`] ? "#4e6739" : "#ffc803")};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: ${(props) =>
      props[`data-collections`] ? "10px 10px 10px 10px" : "20px 0 0 0"};
  }
  @media screen and (min-width: 1280px) {
    color: #4e6739;
    writing-mode: horizontal-tb;
    padding: 15px 15px 15px 15px;
  }
`;
