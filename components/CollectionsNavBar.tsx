"use client";

import { useState, useEffect, useContext } from "react";
import { SizeContext } from "@app/size";
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
  const [animate, setAnimate] = useState<boolean>(false);
  const [width] = useContext<number[]>(SizeContext);

  useEffect(() => {
    if (animate) setTimeout(() => setAnimate(false), 1000);
  }, [animate]);

  const handleIncrease = (): void => {
    setAnimate(true);
    if (activeIdx + 1 <= collections.length - 1) {
      setActiveIdx((prevState) => prevState + 1);
    } else {
      setActiveIdx(0);
    }
  };

  const handleDecrease = (): void => {
    setAnimate(true);
    if (activeIdx - 1 < 0) {
      setActiveIdx(collections.length - 1);
    } else {
      setActiveIdx((prevState) => prevState - 1);
    }
  };

  const handleOnClick = (name: string): void => {
    setAnimate(true);
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
        {width > 1279 && (
          <LinkBtn
            name={collections[firstLinkIdx].name}
            activeName={collections[activeIdx].name}
            onClick={handleOnClick}
            animate={animate}
          />
        )}
        {width > 767 && (
          <LinkBtn
            name={collections[secondLinkIdx].name}
            activeName={collections[activeIdx].name}
            onClick={handleOnClick}
            animate={animate}
          />
        )}
        <ActiveLink>
          <LinkBtn
            name={collections[activeIdx].name}
            activeName={collections[activeIdx].name}
            onClick={handleOnClick}
            animate={animate}
          />
        </ActiveLink>
        {width > 767 && (
          <LinkBtn
            name={collections[fourthLinkIdx].name}
            activeName={collections[activeIdx].name}
            onClick={handleOnClick}
            animate={animate}
          />
        )}
        {width > 1279 && (
          <LinkBtn
            name={collections[fifthLinkIdx].name}
            activeName={collections[activeIdx].name}
            onClick={handleOnClick}
            animate={animate}
          />
        )}
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
