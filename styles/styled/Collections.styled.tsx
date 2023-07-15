"use client";

import styled from "styled-components";

export const CollectionsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
`;

export const CollectionsTitle = styled.h2`
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

export const CollectionsText = styled.div`
  width: 100%;
  padding: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
  text-indent: 20px;

  background: linear-gradient(180deg, #bbe29b 0%, #ffffff 100%);
  color: #4e6739;

  @media screen and (min-width: 768px) {
    margin-bottom: 15px;
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 20px;
    font-size: 20px;
  }
`;
