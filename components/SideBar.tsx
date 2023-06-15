"use client";
import { useState } from "react";
import LinkItem from "./LinkItem";
import {
  Wrapper,
  CollectionsList,
  ListTitle,
} from "@styles/styled/SideBar.styled";

interface ICollection {
  id: number;
  name: string;
  urls: { url: string }[];
}

interface IProps {
  collections: ICollection[];
}
const SideBar: React.FC<IProps> = ({ collections }) => {
  const [showCollections, setShowCollections] = useState<boolean>(false);

  const handleClick = (): void => {
    setShowCollections((prevState) => !prevState);
  };
  return (
    <Wrapper data-collections={showCollections} onClick={handleClick}>
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
