import { usePathname } from "next/navigation";

import {
  StyledLabel,
  StyledLink,
  LabelText,
  WrapperStyled,
} from "@styles/styled/LinkItem.styled";

const ActiveStyledLink: React.FC<{ href: string; children: string }> = ({
  href,
  children,
}) => {
  const pathname: string = usePathname();
  const isActive: boolean = pathname === href;
  return (
    <StyledLink href={href} data-active={isActive}>
      <StyledLabel data-active={isActive}>
        <WrapperStyled data-active={isActive}>
          <LabelText data-active={isActive}>{children}</LabelText>
        </WrapperStyled>
      </StyledLabel>
    </StyledLink>
  );
};

interface IProps {
  name: string;
}

const LinkItem: React.FC<IProps> = ({ name }) => {
  const hrefName: string = name.toLowerCase().replace(/\ /g, "_");
  return (
    <ActiveStyledLink href={`/collections/${hrefName}`}>
      {name}
    </ActiveStyledLink>
  );
};

export default LinkItem;
