"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Modal from "@components/Modal";
import SwipperSlider from "@components/SwipperSlider";
import GalleryItem from "./GalleryItem";
import Page404 from "@app/collections/[collectionId]/not-found";

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
  const router = useRouter();

  useEffect(() => {
    if (showSlider) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [showSlider]);

  const collection: ICollection = collections.filter(
    (collection) =>
      collection.name.toLowerCase().replace(/\ /g, "-") === pathname.slice(13)
  )[0];

  // ?? collections[0]
  // if (!collection) {
  //   router.push(`/collections/tiffany`);
  // }

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

  return collection ? (
    <Wrapper>
      <GalleryTitle>Колекція {`"${collection.name}"`}</GalleryTitle>
      <GalleryText>
        <p>{collection.text1}</p>
        <br></br>
        <p>{collection.text2}</p>
      </GalleryText>
      <GalleryList>
        {collection?.urls.map((el) => {
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
            additionalClass={"image-gallery-photo-gallery"}
          />
        </Modal>
      )}
    </Wrapper>
  ) : (
    <Page404 />
  );
};

export default Gallery;
