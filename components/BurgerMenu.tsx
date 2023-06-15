"use client";

import { useState, useEffect } from "react";
import { Spin as Hamburger } from "hamburger-react";
import Navigation from "./Navigation";
import {
  Wrapper,
  BurgerButton,
  MenuOverlay,
  MenuCloseButton,
} from "@styles/styled/BurgerMenu.styled";

const BurgerMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {}, []);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Wrapper>
      <BurgerButton onClick={handleOpen}>
        <Hamburger
          toggled={isOpen}
          toggle={setIsOpen}
          easing="ease-in"
          rounded
          label="Show menu"
          size={25}
          color="#FFC107"
          distance="md"
          duration={0.6}
        />
      </BurgerButton>
      <MenuOverlay data-menu={isOpen} onClick={handleClose}>
        <MenuCloseButton onClick={handleClose}>
          <Hamburger
            toggled={isOpen}
            toggle={setIsOpen}
            easing="ease-in"
            rounded
            label="Show menu"
            size={25}
            color="#4e6739"
            distance="md"
            duration={0.6}
          />
        </MenuCloseButton>
        <Navigation />
      </MenuOverlay>
    </Wrapper>
  );
};

export default BurgerMenu;
