import { StyledSection } from "../styles/styled/Section.styled";
interface Children {
  children: React.ReactNode;
}

const Section: React.FC<Children> = ({ children }) => {
  return <StyledSection>{children}</StyledSection>;
};

export default Section;
