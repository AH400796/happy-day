import { Metadata } from "next";

import Price from "@components/Price";
import Container from "@components/Container";
import Section from "@components/Section";
import Hero from "@components/Hero";
import SliderOnMain from "@components/SliderOnMain";
import Feedback from "@components/Feedback";
import Contact from "@components/Contact";

import { ContentWrapper } from "@styles/styled/Pages.styled";

export const metadata: Metadata = {
  title: "Твій щасливий день",
  description:
    "Індивідуальні та групові дитячі фотосесії для дівчаток на будь-який смак",
};

const Home = async () => {
  return (
    <>
      <Section>
        <Container>
          <ContentWrapper>
            <SliderOnMain />
            <Hero />
          </ContentWrapper>
        </Container>
      </Section>
      <Section>
        <Container>
          <Price />
        </Container>
      </Section>
      <Section>
        <Container>
          <Feedback />
        </Container>
      </Section>
      <Section>
        <Container>
          <Contact />
        </Container>
      </Section>
    </>
  );
};

export default Home;
