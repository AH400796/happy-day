"use client";

import { createContext } from "react";
import { useState, useEffect } from "react";

export const SizeContext = createContext(0);

interface Children {
  children: React.ReactNode;
}

const SizeProvider: React.FC<Children> = ({ children }) => {
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const setSize = () => {
      setWindowSize(window.innerWidth);
    };
    setSize();

    window.addEventListener("resize", setSize);

    return () => window.removeEventListener("resize", setSize);
  }, []);

  return (
    <SizeContext.Provider value={windowSize}>{children}</SizeContext.Provider>
  );
};

export default SizeProvider;
