"use client";

import styled from "styled-components";

export const PriceTitle = styled.h2`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 5px 0;

  font-size: 16px;
  font-weight: 700;
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

export const PriceText = styled.p`
  padding: 20px;
  margin-bottom: 10px;
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

export const SpanStyled = styled.span`
  padding-left: 20px;
`;

export const PricePackageWrapper = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
  }
`;

export const PricePackage = styled.li`
  flex-basis: 100%;
  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 20px) / 2);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 40px) / 3);
  }
`;

export const PackageWrapper = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: 500;

  border: 2px solid #4e6739;

  background: linear-gradient(180deg, #bbe29b 0%, #ffffff 100%);
  color: #4e6739;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-weight: 600;
  border-bottom: 2px solid #4e6739;
`;

export const Text = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 1px dotted #4e6739;

  &:nth-last-child(1) {
    border-bottom: none;
  }
`;

export const FirstColTitle = styled.span`
  display: block;
  width: 80%;
  padding: 25px 15px;
  line-height: normal;
  border-right: 1px solid #4e6739;
`;

export const FirstCol = styled.span`
  display: block;
  width: 80%;
  padding: 15px;
  line-height: normal;
  border-right: 1px solid #4e6739;
`;

export const SecondCol = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20%;
  height: 100%;
`;

export const Promo = styled.span`
  color: red;
  line-height: 1;
  text-align: center;
`;

export const OldPrice = styled.span`
  text-decoration: line-through red;
`;
