"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

import {
  StyledLink,
  LinkText,
  WrapperStyled,
} from "@styles/styled/LinkBtn.styled";

const ActiveStyledLink: React.FC<{
  name: string;
  isActive: boolean;
  animate: boolean;
  onClick: (name: string) => void;
}> = ({ name, isActive, onClick, animate }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isActive) {
      return;
    }
    router.push(`/collections/${name.toLowerCase().replace(/\ /g, "-")}`);
  }, [isActive, router, name]);

  const href: string = `/collections/${name.toLowerCase().replace(/\ /g, "-")}`;

  return (
    <StyledLink
      href={href}
      data-active={isActive}
      onClick={() => onClick(name)}
    >
      <WrapperStyled data-active={isActive}>
        <LinkText data-active={isActive} data-animate={animate}>
          {name}
        </LinkText>
      </WrapperStyled>
    </StyledLink>
  );
};

interface IProps {
  name: string;
  activeName: string;
  animate: boolean;
  onClick: (name: string) => void;
}

const LinkBtn: React.FC<IProps> = ({ name, activeName, onClick, animate }) => {
  const isActive: boolean = activeName === name;
  return (
    <ActiveStyledLink
      isActive={isActive}
      onClick={onClick}
      name={name}
      animate={animate}
    ></ActiveStyledLink>
  );
};

export default LinkBtn;
