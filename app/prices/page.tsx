/* eslint-disable react/no-unescaped-entities */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ціни та умови замовлення",
};

import Container from "@components/Container";
import Section from "@components/Section";
import About from "@components/About";

import Conditions from "@components/Conditions";

import { ContentWrapper } from "@styles/styled/Pages.styled";

const Prices: React.FC = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <About />
          <Conditions />
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Prices;
