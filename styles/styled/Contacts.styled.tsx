"use client";

import styled from "styled-components";

export const ContactsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: 16px;
  border: 2px solid #f78629;
  border-radius: 15px;
  padding: 20px 20px 20px 20px;
`;

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const SocialContacts = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const ContactText = styled.a`
  padding-top: 2px;
  font-size: 16px;
  font-weight: 600;
  padding: 0 5px;

  color: #4e6739;
  border-radius: 10px;
  border: 1px solid transparent;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }

  &:hover,
  &:focus {
    background: linear-gradient(180deg, #ffdd61 0%, #f5f0a6 100%);
    color: #f78629;
    border: 1px solid #f78629;
  }
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  color: #ffdd61;

  &:hover,
  &:focus {
    color: #f78629;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  padding: 5px;

  background: #4e6739;

  border: 1px solid transparent;
  border-radius: 50%;

  &:hover,
  &:focus {
    background: linear-gradient(180deg, #ffdd61 0%, #f5f0a6 100%);
    border: 1px solid #f78629;
  }
`;
