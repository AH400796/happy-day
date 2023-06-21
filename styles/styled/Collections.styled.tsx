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
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  padding: 5px;

  border-radius: 10px 10px 0 0;
  border-bottom: 1px solid #93b674;
  color: #f78629;

  @media screen and (min-width: 768px) {
    padding: 5px 10px;
  }
  @media screen and (min-width: 1280px) {
    padding: 5px 15px;
  }
`;

export const CollectionsTitleText = styled.span`
  width: 100%;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
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
