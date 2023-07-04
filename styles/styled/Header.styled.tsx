"use client";

import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 20px 0;
  height: 156px;
  font-size: 30px;
  border-bottom: 1px solid #93b674;
  background: linear-gradient(180deg, #ffffff 0%, #bbe29b 100%);
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
    gap: 10px;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px;
  }
`;
