import { Metadata } from "next";

import { ToastContainer } from "react-toastify";
import Price from "@components/Price";
import Container from "@components/Container";
import Section from "@components/Section";
import Hero from "@components/Hero";
import Feedback from "@components/Feedback";

import Contact from "@components/Contact";

import { ContentWrapper } from "@styles/styled/Pages.styled";

export const metadata: Metadata = {
  title: "Твій щасливий день",
};

const Home = async () => {
  return (
    <Section>
      <Container>
        <ToastContainer />
        <ContentWrapper>
          <Hero />
          <Price />
          <Feedback />
          <Contact />
        </ContentWrapper>
      </Container>
    </Section>
  );
};

export default Home;
