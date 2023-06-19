"use client";

import { useContext } from "react";
import { SizeContext } from "@app/size";
import { FaCrown } from "react-icons/fa";
import Slider from "@components/Slider";
import collection from "@data/main_collections.json";
import {
  Wrapper,
  SliderTitle,
  SliderTitleText,
} from "@styles/styled/SliderOnMain.styled";

const SliderOnMain: React.FC = () => {
  const [width] = useContext<number[]>(SizeContext);
  console.log(width);

  const imageWidth: number =
    width < 480 ? width + 60 : width < 768 ? 530 : width < 1280 ? 808 : 1310;
  return (
    <Wrapper>
      <SliderTitle>
        <FaCrown size={25} color={"#ffdd61"} />
        <SliderTitleText>
          Ефектні фото, що не залишать без емоцій нікого
        </SliderTitleText>
        <FaCrown size={25} color={"#ffdd61"} />
      </SliderTitle>
      <Slider
        width={imageWidth}
        collection={collection}
        startIndex={0}
        autoPlay={true}
        autoPlayDelay={3.0}
        slideDuration={2.0}
      />
    </Wrapper>
  );
};

export default SliderOnMain;
