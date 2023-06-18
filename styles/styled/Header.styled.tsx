"use client";

import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 20px 0;
  height: 156px;
  font-size: 30px;

  background: linear-gradient(180deg, #4e6739 0%, #93b674 100%);
  color: #ffdd61;

  @media screen and (min-width: 768px) {
    height: 180px;
  }

  @media screen and (min-width: 1280px) {
    height: 225px;
  }
`;

export const HeaderWrapper = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px;
  }
`;

export const ContactsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: 16px;
  border: 2px solid #ffdd61;
  color: #ffdd61;
  border-radius: 15px;
  padding: 20px 20px 20px 20px;
`;
