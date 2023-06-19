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
  onClick: (name: string) => void;
}> = ({ name, isActive, onClick }) => {
  const router = useRouter();

  useEffect(() => {
    if (!isActive) {
      return;
    }
    router.push(`/collections/${name.toLowerCase().replace(/\ /g, "_")}`);
  }, [isActive, router, name]);

  const href: string = `/collections/${name.toLowerCase().replace(/\ /g, "_")}`;

  return (
    <StyledLink
      href={href}
      data-active={isActive}
      onClick={() => onClick(name)}
    >
      <WrapperStyled data-active={isActive}>
        <LinkText data-active={isActive}>{name}</LinkText>
      </WrapperStyled>
    </StyledLink>
  );
};

interface IProps {
  name: string;
  activeName: string;
  onClick: (name: string) => void;
}

const LinkBtn: React.FC<IProps> = ({ name, activeName, onClick }) => {
  const isActive: boolean = activeName === name;
  return (
    <ActiveStyledLink
      isActive={isActive}
      onClick={onClick}
      name={name}
    ></ActiveStyledLink>
  );
};

export default LinkBtn;
