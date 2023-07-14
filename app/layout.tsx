import { Play } from "next/font/google";
import "@styles/globals.css";
import StyledComponentsRegistry from "@utils/registry";
import Header from "@components/Header";
import Footer from "@components/Footer";
import ModalRoot from "@components/ModalRoot";
import PopUp from "@components/PopUp";

import SizeProvider from "./size";

type LinkObjectType = {
  rel: string;
  href: string;
  type: string;
  sizes: string;
};

type LinkType = {
  link: LinkObjectType;
};

import { ContentWrapper, StyledMain } from "@styles/styled/RootLayout.styled";

export const metadata: LinkType = {
  link: {
    rel: "icon",
    href: "/favicon.ico",
    type: "image/x-icon",
    sizes: "any",
  },
};

interface Children {
  children: React.ReactNode;
}

const play = Play({
  weight: ["400", "700"],
  style: ["normal"],
  subsets: ["cyrillic"],
  display: "swap",
});

const RootLayout: React.FC<Children> = ({ children }) => {
  return (
    <html lang="uk">
      <body className={play.className}>
        <StyledComponentsRegistry>
          <ContentWrapper>
            <SizeProvider>
              <Header />
              <StyledMain>{children}</StyledMain>
            </SizeProvider>
          </ContentWrapper>
          <Footer />
          <PopUp />
          <ModalRoot />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
};

export default RootLayout;
