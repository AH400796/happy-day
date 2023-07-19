"use client";

import SwipperSlider from "@components/SwipperSlider";
import collections from "@data/main_collections.json";
import {
  SliderWrapper,
  SliderTitle,
  TitleHolder,
  SliderText,
  LinkToCollections,
} from "@styles/styled/SliderOnMain.styled";

const SliderOnMain: React.FC = () => {
  return (
    <>
      <SliderWrapper>
        <SliderTitle>
          <TitleHolder>Ефектні фото, що не залишать без емоцій</TitleHolder>
        </SliderTitle>
        <>
          <SwipperSlider
            collections={collections}
            showNav={false}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            autoPlay={true}
            slideDuration={1000}
            slideInterval={4000}
            additionalClass={"image-gallery-main"}
          />
        </>
      </SliderWrapper>
      <SliderText>
        Сподобались фото і хочеш ознайомитиcь з ними детальніше? Тоді мерщій до{" "}
        <LinkToCollections href="/collections/tiffany">
          фотоколекцій
        </LinkToCollections>
        !
      </SliderText>
    </>
  );
};

export default SliderOnMain;
