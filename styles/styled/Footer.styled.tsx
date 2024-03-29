"use client";

import styled from "styled-components";

export const StyledFooter = styled.footer`
  flex-shrink: 0;
  text-align: center;
  padding: 30px 0 10px;
  border-top: 1px solid #93b674;
  background: linear-gradient(180deg, #bbe29b 0%, #ffffff 100%);
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
  gap: 20px;

  font-size: 16px;

  @media screen and (min-width: 768px) {
    align-self: flex-start;
  }
`;

export const FooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  gap: 30px;

  font-size: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const FooterText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: #4e6739;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
