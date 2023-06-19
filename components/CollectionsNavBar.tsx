"use client";

import { useState } from "react";
import LinkBtn from "./LinkBtn";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import {
  Wrapper,
  CollectionsBtns,
  PrevBtn,
  NextBtn,
  ActiveLink,
} from "@styles/styled/CollectionsNavBar.styled";

interface ICollection {
  id: number;
  name: string;
  urls: { url: string }[];
}

interface IProps {
  collections: ICollection[];
}

const CollectionsNavBar: React.FC<IProps> = ({ collections }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const handleIncrease = (): void => {
    if (activeIdx + 1 <= collections.length - 1) {
      setActiveIdx((prevState) => prevState + 1);
    } else {
      setActiveIdx(0);
    }
  };

  const handleDecrease = (): void => {
    if (activeIdx - 1 < 0) {
      setActiveIdx(collections.length - 1);
    } else {
      setActiveIdx((prevState) => prevState - 1);
    }
  };

  const handleOnClick = (name: string): void => {
    setActiveIdx(
      collections.findIndex((collection) => collection.name === name)
    );
  };
  const firstLinkIdx =
    activeIdx - 2 === -2
      ? collections.length - 2
      : activeIdx - 2 === -1
      ? collections.length - 1
      : activeIdx - 2;

  const secondLinkIdx =
    activeIdx - 1 === -1 ? collections.length - 1 : activeIdx - 1;

  const fourthLinkIdx =
    activeIdx + 1 === collections.length ? 0 : activeIdx + 1;

  const fifthLinkIdx =
    activeIdx + 2 === collections.length
      ? 0
      : activeIdx + 2 === collections.length + 1
      ? 1
      : activeIdx + 2;

  return (
    <Wrapper>
      <CollectionsBtns>
        <LinkBtn
          name={collections[firstLinkIdx].name}
          activeName={collections[activeIdx].name}
          onClick={handleOnClick}
        />
        <LinkBtn
          name={collections[secondLinkIdx].name}
          activeName={collections[activeIdx].name}
          onClick={handleOnClick}
        />
        <ActiveLink>
          <LinkBtn
            name={collections[activeIdx].name}
            activeName={collections[activeIdx].name}
            onClick={handleOnClick}
          />
        </ActiveLink>
        <LinkBtn
          name={collections[fourthLinkIdx].name}
          activeName={collections[activeIdx].name}
          onClick={handleOnClick}
        />
        <LinkBtn
          name={collections[fifthLinkIdx].name}
          activeName={collections[activeIdx].name}
          onClick={handleOnClick}
        />
      </CollectionsBtns>

      <PrevBtn type="button" onClick={handleDecrease}>
        <MdArrowBackIosNew size={45} color={"inherit"} />
      </PrevBtn>
      <NextBtn type="button" onClick={handleIncrease}>
        <MdArrowForwardIos size={45} color={"inherit"} />
      </NextBtn>
    </Wrapper>
  );
};

export default CollectionsNavBar;
