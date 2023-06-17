"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import LinkItem from "./LinkItem";
import {
  Wrapper,
  CollectionsList,
  ListTitle,
  StyledLink,
} from "@styles/styled/SideBar.styled";

interface ICollection {
  id: number;
  name: string;
  urls: { url: string }[];
}

interface IProps {
  collections: ICollection[];
}

const ActiveStyledLink: React.FC<{
  href: string;
  children: string;
  showCollections: boolean;
}> = ({ href, children, showCollections }) => {
  const pathname: string = usePathname();
  const isActive: boolean =
    pathname === href || (pathname.includes(href) && href !== "/");
  return (
    <StyledLink
      href={href}
      data-active={isActive}
      data-collections={showCollections}
    >
      {children}
    </StyledLink>
  );
};

const SideBar: React.FC<IProps> = ({ collections }) => {
  const [showCollections, setShowCollections] = useState<boolean>(false);

  const handleClick = (): void => {
    setShowCollections((prevState) => !prevState);
  };
  return (
    <Wrapper data-collections={showCollections} onClick={handleClick}>
      <ActiveStyledLink href="/collections" showCollections={showCollections}>
        Наші колекції
      </ActiveStyledLink>
      <ListTitle data-collections={showCollections}>Наші колекції</ListTitle>
      <CollectionsList data-collections={showCollections}>
        {collections.map(({ id, name }: { id: number; name: string }) => {
          return <LinkItem key={id} name={name} />;
        })}
      </CollectionsList>
    </Wrapper>
  );
};

export default SideBar;
