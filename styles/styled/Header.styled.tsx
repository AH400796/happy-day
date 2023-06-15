"use client";

import styled from "styled-components";
import Image from "next/image";

export const StyledImage = styled(Image)`
  width: 250px;
  height: 116px;
  @media screen and (min-width: 768px) {
    width: 300px;
    height: 139px;
  }
  @media screen and (min-width: 1280px) {
    width: 400px;
    height: 185px;
  }
`;

export const StyledHeader = styled.header`
  padding: 20px 0;
  height: 156px;
  font-size: 30px;

  background-color: #4e6739;
  color: #ffc803;

  @media screen and (min-width: 768px) {
    height: 180px;
  }

  @media screen and (min-width: 1280px) {
    height: 225px;
  }
`;

export const HeaderWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    gap: 40px;
  }
`;

export const ContactsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  font-size: 16px;
  border: 2px solid #ffc803;
  color: #ffc803;
  border-radius: 15px;
  padding: 20px 20px 10px 20px;
`;

export const ContactTitle = styled.span`
  position: absolute;
  top: -12px;
  left: 22%;
  font-weight: 700;

  padding: 0 10px;
  background-color: #4e6739;
`;
