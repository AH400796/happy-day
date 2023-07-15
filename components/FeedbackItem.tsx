import { FaCrown } from "react-icons/fa";
import {
  StyledName,
  StyledRating,
  StyledFeedback,
  WrapperStyled,
  WrapperTitle,
} from "@styles/styled/FeedbackItem.styled";

interface IProps {
  userName: string;
  userFeedback: string;
  rating: string;
}

const FeedbackItem: React.FC<IProps> = ({ userName, userFeedback, rating }) => {
  return (
    <WrapperStyled>
      <WrapperTitle>
        <StyledName>{userName}</StyledName>
        <StyledRating>
          {rating}
          <FaCrown size={15} color={"#f17209"} />
        </StyledRating>
      </WrapperTitle>
      <StyledFeedback>{`"${userFeedback}"`}</StyledFeedback>
    </WrapperStyled>
  );
};

export default FeedbackItem;
