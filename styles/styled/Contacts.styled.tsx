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
  font-size: 14px;
  font-weight: 400;

  color: #ffc803;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 500;
  }

  &:hover,
  &:focus {
    color: #27b1dd;
  }
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  color: #27b1dd;

  &:hover,
  &:focus {
    color: #ffc803;
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
  background-color: #ffc803;

  &:hover,
  &:focus {
    background-color: #27b1dd;
  }
`;
