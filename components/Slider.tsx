"use client";

import { useContext, useEffect } from "react";
import { createPortal } from "react-dom";
import SimpleImageSlider from "react-simple-image-slider";
import { SizeContext } from "@app/size";
import { IoMdClose } from "react-icons/io";

import {
  Overlay,
  ModalWindow,
  SliderCloseButton,
} from "@styles/styled/Slider.styled";

interface ICollection {
  id: number;
  name: string;
  urls: { url: string }[];
}

interface IProps {
  collection: ICollection;
  onClose: () => void;
  startIndex: number;
}

const modalRoot: HTMLElement | null = document.querySelector("#modal-root")!;

const Slider: React.FC<IProps> = ({ onClose, collection, startIndex }) => {
  const [width] = useContext<number[]>(SizeContext);

  useEffect(() => {
    const handleKeyEscape: (event: KeyboardEvent) => void = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyEscape);
    return () => window.removeEventListener("keydown", handleKeyEscape);
  }, [onClose]);

  const handleBackdropClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  const sliderWidth = width - 80;
  const sliderHeight = (sliderWidth * 3) / 6;

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <SimpleImageSlider
          width={sliderWidth}
          height={sliderHeight}
          images={collection.urls}
          showBullets={true}
          showNavs={true}
          loop={true}
          startIndex={startIndex}
        />
        <SliderCloseButton onClick={() => onClose()}>
          <IoMdClose size={20} color={"#ffc107"} />
        </SliderCloseButton>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default Slider;
