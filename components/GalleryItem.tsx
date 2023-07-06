"use client";

import { useContext } from "react";
import Image from "next/image";
import { SizeContext } from "@app/size";

import { ItemWrapper, PhotoCard } from "@styles/styled/GalleryItem.styled";

interface IItemProps {
  url: string;
  onClick: (url: string) => void;
}

const GalleryItem: React.FC<IItemProps> = ({ url, onClick }) => {
  const [width] = useContext<number[]>(SizeContext);

  const handleOnClick = () => {
    onClick(url);
  };

  const isImageLandscape = url.includes("L");

  const getCardWidth = (): number => {
    if (isImageLandscape) {
      const imageWidth: number =
        width < 480 ? width - 30 : width < 768 ? 450 : width < 1280 ? 360 : 400;
      return imageWidth;
    } else {
      const imageWidth: number =
        width < 480
          ? (width - 30) / 1.503
          : width < 768
          ? 450 / 1.503
          : width < 1280
          ? 360 / 1.503
          : 400 / 1.503;
      return imageWidth;
    }
  };
  const imageWidth: number = getCardWidth();
  const imageHeight: number = isImageLandscape
    ? imageWidth * 0.665
    : imageWidth * 1.503;

  return (
    <ItemWrapper onClick={handleOnClick} data-collection={url}>
      <PhotoCard data-type={isImageLandscape}>
        <Image src={url} width={imageWidth} height={imageHeight} alt="photo" />
      </PhotoCard>
    </ItemWrapper>
  );
};

export default GalleryItem;
