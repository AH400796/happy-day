"use client";

import { FaCrown } from "react-icons/fa";
import SwipperSlider from "@components/SwipperSlider";
import collection from "@data/main_collections.json";
import {
  SliderWrapper,
  SliderTitle,
  SliderTitleText,
} from "@styles/styled/SliderOnMain.styled";

const SliderOnMain: React.FC = () => {
  return (
    <SliderWrapper>
      <SliderTitle>
        <FaCrown size={25} color={"#f78629"} />
        <SliderTitleText>
          ЕФЕКТНІ ФОТО, ЩО НЕ ЗАЛИШАТЬ БЕЗ ЕМОЦІЙ
        </SliderTitleText>
        <FaCrown size={25} color={"#f78629"} />
      </SliderTitle>
      <>
        <SwipperSlider
          collection={collection}
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
