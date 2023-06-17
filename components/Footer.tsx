import Container from "./Container";
import Contacts from "./Contacts";
import FeedbackForm from "./FeedbackForm";
import {
  StyledFooter,
  FooterText,
  FooterContacts,
  FooterContent,
  FooterWrapper,
} from "../styles/styled/Footer.styled";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterWrapper>
          <FooterContent>
            <FooterContacts>
              <Contacts />
            </FooterContacts>
            <FeedbackForm />
          </FooterContent>
          <FooterText>© 2023</FooterText>
        </FooterWrapper>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
