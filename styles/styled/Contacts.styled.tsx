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
  font-weight: 600;
  padding: 0 5px;

  color: #ffc803;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

  &:hover,
  &:focus {
    background: linear-gradient(180deg, #ffc803 0%, #f8ed52 100%);
    color: #f15232;
  }
`;

export const StyledLink = styled.a`
  display: flex;
  align-items: center;
  color: #f15232;

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
  background: linear-gradient(180deg, #ffc803 0%, #f8ed52 100%);

  &:hover,
  &:focus {
    background: #f15232;
  }
`;
