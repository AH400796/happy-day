"use client";

import styled from "styled-components";

export const WrapperStyled = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border-radius: 50px 0 50px 0;
`;

export const Wrapper = styled.label`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  padding: 10px 0;
`;

export const StyledName = styled.span`
  text-align: center;
  width: 100%;
  padding: 0 5px;
`;

export const StyledRating = styled.span`
  text-align: center;
  width: 100%;
  padding: 0 5px;
`;

export const StyledFeedback = styled.p`
  text-align: center;
  width: 100%;
  padding: 0 5px;
`;
