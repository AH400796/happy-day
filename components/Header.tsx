"use client";

import { useState, useEffect } from "react";
import Container from "./Container";
import BurgerMenu from "./BurgerMenu";
import {
  StyledHeader,
  HeaderWrapper,
  ContactsWrapper,
  ContactTitle,
  StyledImage,
} from "@styles/styled/Header.styled";

import Navigation from "./Navigation";
import Contacts from "./Contacts";

const Header: React.FC = () => {
  const [logoSize, setLogoSize] = useState<number[]>([400, 185]);

  useEffect(() => {
    const setWindowSize = () => {
      if (window.innerWidth < 768) {
        setLogoSize([230, 106]);
      } else if (window.innerWidth < 1280) {
        setLogoSize([300, 139]);
      } else {
        setLogoSize([400, 185]);
      }
    };
    setWindowSize();

    window.addEventListener("resize", setWindowSize);

    return () => window.removeEventListener("resize", setWindowSize);
  }, []);

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <StyledImage
            src="/logo.svg"
            width={logoSize[0]}
            height={logoSize[1]}
            alt="logo"
            priority
          />

          {logoSize[0] === 230 && <BurgerMenu />}
          {logoSize[0] !== 230 && <Navigation />}
          {logoSize[0] !== 230 && (
            <ContactsWrapper>
              <ContactTitle>Контакти</ContactTitle>
              <Contacts />
            </ContactsWrapper>
          )}
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};

export default Header;
