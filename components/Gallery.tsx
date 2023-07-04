"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Modal from "@components/Modal";
import SwipperSlider from "@components/SwipperSlider";
import GalleryItem from "./GalleryItem";

import {
  Wrapper,
  GalleryTitle,
  GalleryList,
  GalleryText,
} from "@styles/styled/Gallery.styled";

interface ICollection {
  id: number;
  name: string;
  text1: string;
  text2: string;
  urls: { original: string; thumbnail: string }[];
}

interface IProps {
  collections: ICollection[];
}

const Gallery: React.FC<IProps> = ({ collections }) => {
  const [showSlider, setShowSlider] = useState<boolean>(false);
  const [startIndex, setStartIndex] = useState<number>(0);

  const pathname: string = usePathname();

  useEffect(() => {
    if (showSlider) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [showSlider]);

  const collection: ICollection = collections.filter(
    (collection) =>
      collection.name.toLowerCase().replace(/\ /g, "_") === pathname.slice(13)
  )[0];
  const handleOnClick = (url: string): void => {
    setShowSlider(true);
    const index: number = collection.urls.findIndex(
      (el) => el.original === url
    );
    setStartIndex(index);
  };

  const handleOnClose = (): void => {
    setShowSlider(false);
  };

  return (
    <Wrapper>
      <GalleryTitle>Колекція {`"${collection.name}"`}</GalleryTitle>
      <GalleryText>
        <p>{collection.text1}</p>
        <br></br>
        <p>{collection.text2}</p>
      </GalleryText>
      <GalleryList>
        {collection.urls.map((el) => {
          return (
            <GalleryItem
              key={el.original}
              url={el.original}
              onClick={handleOnClick}
            />
          );
        })}
      </GalleryList>
      {showSlider && (
        <Modal onClose={handleOnClose}>
          <SwipperSlider
            collections={collection.urls}
            showThumbnails={false}
            startIndex={startIndex}
          />
        </Modal>
      )}
    </Wrapper>
  );
};

export default Gallery;
