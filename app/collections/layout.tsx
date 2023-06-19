import { Metadata } from "next";
import Container from "@components/Container";
import Section from "@components/Section";
import CollectionsNavBar from "@components/CollectionsNavBar";
import { Suspense } from "react";
import Collections from "@components/Collections";
import Loading from "./loading";

import { ContentWrapper } from "@styles/styled/Pages.styled";
import collections from "@data/collections.json";

export const metadata: Metadata = {
  title: "Колекції",
};

interface IProps {
  children: React.ReactNode;
}

const CollectionsLayout: React.FC<IProps> = ({ children }) => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <Collections />
          <CollectionsNavBar collections={collections} />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default CollectionsLayout;
