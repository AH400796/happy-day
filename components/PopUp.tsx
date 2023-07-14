"use client";

import { useState, useEffect } from "react";
import { redirect } from "next/navigation";

import {
  Wrapper,
  IconWrapper,
  TextLink,
  ModalCloseBtn,
  Hand,
  Circle,
  InnerCircle,
} from "@styles/styled/PopUp.styled";
import { IoMdClose } from "react-icons/io";
import { BsHandIndexThumbFill } from "react-icons/bs";

const PopUp: React.FC = () => {
  const [shawPopUp, setShawPopUp] = useState(false);

  useEffect(() => {
    setTimeout(() => setShawPopUp(true), 10000);
  }, []);

  const handleOnClick = () => {
    setShawPopUp(false);
  };

  const handleOnPopUpClick = () => {
    setShawPopUp(false);
  };

  return (
    shawPopUp && (
      <Wrapper>
        <TextLink
          onClick={handleOnPopUpClick}
          href="https://docs.google.com/forms/d/e/1FAIpQLSfEbmF__mD-L9v6G9iM3s1ZplhUyKzWEZxI1xT53MVJRRHRFQ/viewform?pli=1"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          <strong>Не зволікайте! Замовте фотосесію вже сьогодні!</strong>
          <IconWrapper>
            <Circle>
              <InnerCircle></InnerCircle>
            </Circle>
            <Hand>
              <BsHandIndexThumbFill size={25} color={"#f78629"} />
            </Hand>
          </IconWrapper>
        </TextLink>
        <ModalCloseBtn onClick={handleOnClick}>
          <IoMdClose size={20} color={"#4e6739"} />
        </ModalCloseBtn>
      </Wrapper>
    )
  );
};

export default PopUp;
