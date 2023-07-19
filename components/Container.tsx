import { StyledContainer } from "../styles/styled/Container.styled";

interface Children {
  children: React.ReactNode;
}

const Container: React.FC<Children> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
