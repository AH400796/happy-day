"use client";

import ReactImageGallery, { ReactImageGalleryProps } from "react-image-gallery";

interface IProps {
  collection: ReactImageGalleryProps["items"];
  [key: string]: any;
}

const SwipperSlider: React.FC<IProps> = ({ collection, ...prop }) => {
  return <ReactImageGallery items={collection} {...prop} />;
};

export default SwipperSlider;
