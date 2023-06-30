"use client";

import ReactImageGallery, { ReactImageGalleryProps } from "react-image-gallery";

interface IProps {
  collections: ReactImageGalleryProps["items"];
  [key: string]: any;
}

const SwipperSlider: React.FC<IProps> = ({ collections, ...prop }) => {
  return <ReactImageGallery items={collections} {...prop} />;
};

export default SwipperSlider;
