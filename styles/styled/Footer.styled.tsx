"use client";

import styled from "styled-components";

export const StyledFooter = styled.footer`
  flex-shrink: 0;
  text-align: center;
  padding: 30px 0 10px;
  background-color: #4e6739;
`;

export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const FooterContacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  align-items: center;
  align-self: center;
  gap: 10px;

  font-size: 16px;

  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  font-size: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterText = styled.span`
  font-size: 12px;
  font-weight: 500;
  color: #ffc803;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 700;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
