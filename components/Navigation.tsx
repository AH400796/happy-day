"use client";

import { usePathname } from "next/navigation";
import { StyledNav, StyledLink } from "@styles/styled/Navigation.styled";

const ActiveStyledLink: React.FC<{ href: string; children: string }> = ({
  href,
  children,
}) => {
  const pathname: string = usePathname();
  const isActive: boolean =
    pathname === href || (pathname.includes(href) && href !== "/");
  return (
    <StyledLink href={href} data-active={isActive}>
      {children}
    </StyledLink>
  );
};

const Navigation: React.FC = () => {
  return (
    <StyledNav>
      <ActiveStyledLink href="/">ГОЛОВНА</ActiveStyledLink>
      <ActiveStyledLink href="/collections">ФОТОКОЛЕКЦІЇ</ActiveStyledLink>
      <ActiveStyledLink href="/prices">ПРО НАС</ActiveStyledLink>
    </StyledNav>
  );
};

export default Navigation;
