"use client";

import styled from "styled-components";

export const WrapperStyled = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc((100% - 20px) / 1);
  justify-content: center;
  align-items: center;

  border-radius: 5px;

  @media screen and (min-width: 768px) {
    flex-basis: calc((100% - 50px) / 2);
  }

  @media screen and (min-width: 1280px) {
    flex-basis: calc((100% - 80px) / 3);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const WrapperTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  border-radius: 10px 10px 0 0;

  background-color: #ffc803;
  color: #4e6739;
`;

export const StyledName = styled.span`
  text-align: left;
  width: 100%;
  padding-left: 15px;
  font-weight: 700;
  font-style: italic;
`;

export const StyledRating = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 0 15px;
  /* width: 100%; */
`;

export const StyledFeedback = styled.p`
  width: 100%;
  height: 120px;

  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  font-style: italic;
  text-indent: 10px;
  border: 1px dotted #4e6739;
  border-top: none;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;
