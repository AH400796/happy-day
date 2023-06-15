import Container from "./Container";
import Contacts from "./Contacts";
import {
  StyledFooter,
  FooterText,
  FooterContacts,
  FooterWrapper,
} from "../styles/styled/Footer.styled";

const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Container>
        <FooterWrapper>
          <FooterContacts>
            <Contacts />
          </FooterContacts>
          <FooterText>© 2023</FooterText>
        </FooterWrapper>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
