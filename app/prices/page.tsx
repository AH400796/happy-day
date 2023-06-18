/* eslint-disable react/no-unescaped-entities */

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ціни та умови замовлення",
};

import Container from "@components/Container";
import Section from "@components/Section";
import Price from "@components/Price";
import Conditions from "@components/Conditions";

import { ContentWrapper } from "@styles/styled/Pages.styled";

const Prices: React.FC = () => {
  return (
    <Section>
      <Container>
        <ContentWrapper>
          <Price />
          <Conditions />
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Prices;
