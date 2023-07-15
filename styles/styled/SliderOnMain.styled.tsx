"use client";

import styled from "styled-components";
import Link from "next/link";

export const SliderTitle = styled.h1`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 0;

  font-size: 16px;
  font-weight: 900;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;

  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #93b674;
  color: #f17209;

  @media screen and (min-width: 768px) {
    padding: 5px 10px;
    font-size: 20px;
  }
  @media screen and (min-width: 1280px) {
    padding: 5px 15px;
    font-size: 24px;
  }

  &:before,
  &:after {
    content: "";
    display: inline-block;
    width: 30px;
    height: 25px;
    background-image: url("/crown.png");
    background-repeat: no-repeat;
    background-position: center;
  }
`;

export const SliderWrapper = styled.div`
  width: 100%;
  inline-size: 100%;
`;

export const TitleHolder = styled.span`
  width: 260px;
  @media screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const SliderText = styled.p`
  width: 100%;
  padding: 20px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  text-indent: 20px;
  background: linear-gradient(180deg, #bbe29b 0%, #ffffff 100%);
  color: #4e6739;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const LinkToCollections = styled(Link)`
  color: #f17209;
  font-weight: 700;
`;
