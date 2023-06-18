"use client";

import styled from "styled-components";

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
  text-decoration: none;
  padding-top: 2px;
  font-size: 16px;
  font-weight: 600;
  padding: 0 5px;

  color: #ffdd61;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }

  &:hover,
  &:focus {
    background: linear-gradient(180deg, #ffdd61 0%, #f5f0a6 100%);
    color: #f78629;
  }

  @media screen and (min-width: 1280px) {
    font-size: 20px;
  }
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  color: #f78629;

  &:hover,
  &:focus {
    color: #ffdd61;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  height: 35px;
  padding: 5px;

  border-radius: 50%;
  background: linear-gradient(180deg, #ffdd61 0%, #f5f0a6 100%);

  &:hover,
  &:focus {
    background: #f78629;
  }
`;
