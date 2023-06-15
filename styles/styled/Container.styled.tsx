"use client";

import styled from "styled-components";

export const StyledContainer = styled.div`
  height: 100%;
  margin: 0 auto;
  padding: 0 10px;

  @media screen and (min-width: 480px) {
    width: 480px;
    padding: 0 15px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 20px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 25px;
  }
`;
