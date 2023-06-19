"use client";

import { FaCrown } from "react-icons/fa";
import SwipperSlider from "@components/SwipperSlider";
import collection from "@data/main_collections.json";
import {
  Wrapper,
  SliderTitle,
  SliderTitleText,
} from "@styles/styled/SliderOnMain.styled";

const SliderOnMain: React.FC = () => {
  return (
    <Wrapper>
      <SliderTitle>
        <FaCrown size={25} color={"#ffdd61"} />
        <SliderTitleText>
          Ефектні фото, що не залишать без емоцій нікого
        </SliderTitleText>
        <FaCrown size={25} color={"#ffdd61"} />
      </SliderTitle>
      <SwipperSlider collection={collection} />
    </Wrapper>
  );
};

export default SliderOnMain;
