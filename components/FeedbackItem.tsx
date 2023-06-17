import {
  StyledName,
  StyledRating,
  StyledFeedback,
  WrapperStyled,
  Wrapper,
} from "@styles/styled/FeedbackItem.styled";

interface IProps {
  userName: string;
  userFeedback: string;
  rating: string;
}

const FeedbackItem: React.FC<IProps> = ({ userName, userFeedback, rating }) => {
  return (
    <WrapperStyled>
      <Wrapper>
        <StyledName></StyledName>
        <StyledRating></StyledRating>
      </Wrapper>
      <StyledFeedback></StyledFeedback>
    </WrapperStyled>
  );
};

export default FeedbackItem;
