"use client";

import { useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
import { IoMdClose } from "react-icons/io";

import {
  Overlay,
  ModalWindow,
  ModalCloseBtn,
} from "@styles/styled/Modal.styled";

interface IProps {
  onClose: () => void;
  children: ReactNode;
}

const modalRoot: HTMLElement | null = document.getElementById("modal-root")!;

const Modal: React.FC<IProps> = ({ onClose, children }) => {
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

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        {children}
        <ModalCloseBtn onClick={() => onClose()}>
          <IoMdClose size={40} color={"inherit"} />
        </ModalCloseBtn>
      </ModalWindow>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
