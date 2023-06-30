"use client";

import SwipperSlider from "@components/SwipperSlider";
import collections from "@data/main_collections.json";
import { SliderWrapper, SliderTitle } from "@styles/styled/SliderOnMain.styled";

const SliderOnMain: React.FC = () => {
  return (
    <SliderWrapper>
      <SliderTitle>Ефектні фото, що не залишать без емоцій</SliderTitle>
      <>
        <SwipperSlider
          collections={collections}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay={true}
          slideDuration={1000}
          slideInterval={4000}
        />
      </>
    </SliderWrapper>
  );
};

export default SliderOnMain;
