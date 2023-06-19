"use client";

import SimpleImageSlider from "react-simple-image-slider";

interface IProps {
  collection: { url: string }[];
  startIndex: number;
  width: number;
  [key: string]: any;
}

const Slider: React.FC<IProps> = ({
  width,
  collection,
  startIndex,
  ...props
}) => {
  return (
    <SimpleImageSlider
      width={width - 80}
      height={width * 0.7}
      images={collection}
      startIndex={startIndex}
      showBullets={true}
      showNavs={true}
      loop={true}
      {...props}
    />
  );
};

export default Slider;
