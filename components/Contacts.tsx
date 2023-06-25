import Image from "next/image";
import { FaTelegramPlane, FaFacebookF, FaInstagram } from "react-icons/fa";
import {
  ContactsWrapper,
  ContactWrapper,
  ContactText,
  SocialContacts,
  StyledLink,
  IconWrapper,
} from "@styles/styled/Contacts.styled";

const Contacts: React.FC = () => {
  return (
    <ContactsWrapper>
      <ContactWrapper>
        <Image
          src="/icons/icon_kyivstar.svg"
          width={20}
          height={20}
          alt="kyivstar"
        />
        <ContactText href="tel:+380979814226">111 111-11-11</ContactText>
      </ContactWrapper>
      <ContactWrapper>
        <Image
          src="/icons/icon_kyivstar.svg"
          width={20}
          height={20}
          alt="kyivstar"
        />
        <ContactText href="tel:+380979566666">000 000-00-00</ContactText>
      </ContactWrapper>
      <SocialContacts>
        <StyledLink
          href="https://www.instagram.com/yours_happy_day/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="instagram"
        >
          <IconWrapper>
            <FaInstagram size={25} color={"inherit"} />
          </IconWrapper>
        </StyledLink>
        <StyledLink
          href="https://www.facebook.com/yourshappyday"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="facebook"
        >
          <IconWrapper>
            <FaFacebookF size={25} color={"inherit"} />
          </IconWrapper>
        </StyledLink>
        <StyledLink
          href="https://t.me/Julia_happy_day"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="telegram"
        >
          <IconWrapper>
            <FaTelegramPlane size={25} color={"inherit"} />
          </IconWrapper>
        </StyledLink>
      </SocialContacts>
    </ContactsWrapper>
  );
};

export default Contacts;
