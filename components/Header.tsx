"use client";

import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { SizeContext } from "@app/size";
import Container from "./Container";
import BurgerMenu from "./BurgerMenu";
import Navigation from "./Navigation";
import Contacts from "./Contacts";
import { StyledHeader, HeaderWrapper } from "@styles/styled/Header.styled";

const Header: React.FC = () => {
  const [width] = useContext<number[]>(SizeContext);

  return (
    <StyledHeader>
      <Container>
        <HeaderWrapper>
          <Link href="/">
            <Image
              src="/logo.png"
              width={300}
              height={139}
              alt="logo"
              priority
            />
          </Link>
          {width < 768 && <BurgerMenu />}
          {width >= 768 && <Navigation />}
          {width >= 768 && <Contacts />}
        </HeaderWrapper>
      </Container>
    </StyledHeader>
  );
};

export default Header;
