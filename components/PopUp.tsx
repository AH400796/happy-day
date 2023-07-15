"use client";

import { useState, useEffect } from "react";

import {
  Wrapper,
  IconWrapper,
  Text,
  ModalCloseBtn,
  Hand,
} from "@styles/styled/PopUp.styled";
import { IoMdClose } from "react-icons/io";
import { FaHandPointLeft } from "react-icons/fa";

const PopUp: React.FC = () => {
  const [shawPopUp, setShawPopUp] = useState(false);

  useEffect(() => {
    setTimeout(() => setShawPopUp(true), 20000);
  }, []);

  const handleOnClick = () => {
    setShawPopUp(false);
  };

  const handleOnPopUpClick = () => {
    setShawPopUp(false);
  };

  return (
    <Wrapper data-shaw={shawPopUp}>
      <Text>
        <strong>Не зволікайте! Замовте свою фотосесію вже сьогодні!</strong>
        <IconWrapper
          onClick={handleOnPopUpClick}
          href="https://docs.google.com/forms/d/e/1FAIpQLSfEbmF__mD-L9v6G9iM3s1ZplhUyKzWEZxI1xT53MVJRRHRFQ/viewform?pli=1"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          Хочу!
          <Hand>
            <FaHandPointLeft size={25} color={"inherit"} />
          </Hand>
        </IconWrapper>
      </Text>
      <ModalCloseBtn onClick={handleOnClick}>
        <IoMdClose size={20} color={"inherit"} />
      </ModalCloseBtn>
    </Wrapper>
  );
};

export default PopUp;
