"use client";

import { useContext } from "react";
import Image from "next/image";
import { SizeContext } from "@app/size";
import Container from "./Container";
import BurgerMenu from "./BurgerMenu";
import {
  StyledHeader,
  HeaderWrapper,
  ContactsWrapper,
  ContactTitle,
} from "@styles/styled/Header.styled";

import Navigation from "./Navigation";
import Contacts from "./Contacts";

const Header: React.FC = () => {
  const width: number = useContext(SizeContext);

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <Image src="/logo.png" width={300} height={139} alt="logo" priority />
          {width < 768 && <BurgerMenu />}
          {width >= 768 && <Navigation />}
          {width >= 768 && (
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
