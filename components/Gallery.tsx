"use client";
import { useState, useEffect, useContext } from "react";
import { usePathname } from "next/navigation";
import { CldImage } from "next-cloudinary";
import { SizeContext } from "@app/size";
import Slider from "@components/Slider";

import {
  Wrapper,
  ItemWrapper,
  GalleryTitle,
  GalleryList,
} from "@styles/styled/Gallery.styled";

interface IItemProps {
  url: string;
  onClick: (url: string) => void;
}

interface ICollection {
  id: number;
  name: string;
  urls: { url: string }[];
}

interface IProps {
  collections: ICollection[];
}

const GalleryItem: React.FC<IItemProps> = ({ url, onClick }) => {
  const [width] = useContext<number[]>(SizeContext);
  const handleOnClick = () => {
    onClick(url);
  };
  const imageWidth: number =
    width < 480 ? width - 30 : width < 768 ? 440 : width < 1280 ? 347 : 315;
  const imageHeight: number = (imageWidth * 3) / 5;

  return (
    <ItemWrapper onClick={handleOnClick}>
      <CldImage src={url} width={imageWidth} height={imageHeight} alt="photo" />
    </ItemWrapper>
  );
};

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
    const index: number = collection.urls.findIndex((el) => el.url === url);
    setStartIndex(index);
  };

  const handleOnClose = (): void => {
    setShowSlider(false);
  };

  return (
    <Wrapper>
      <GalleryTitle>Колекція {`"${collection.name}"`}</GalleryTitle>
      <GalleryList>
        {collection.urls.map((el) => {
          return (
            <GalleryItem key={el.url} url={el.url} onClick={handleOnClick} />
          );
        })}
      </GalleryList>
      {showSlider && (
        <Slider
          collection={collection}
          onClose={handleOnClose}
          startIndex={startIndex}
        />
      )}
    </Wrapper>
  );
};

export default Gallery;
