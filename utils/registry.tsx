"use client";

import { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

interface Children {
  children: React.ReactNode;
}

const StyledComponentsRegistry: React.FC<Children> = ({ children }) => {
  const [styledComponentsStyleSheet] = useState<ServerStyleSheet>(
    () => new ServerStyleSheet()
  );

  useServerInsertedHTML(() => {
    const styles: React.ReactNode =
      styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  if (typeof window !== "undefined") return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
};

export default StyledComponentsRegistry;
