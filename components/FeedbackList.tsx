"use client";

import { useState } from "react";
import FeedbackItem from "./FeedbackItem";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

import {
  Wrapper,
  StyledFeedbackList,
  FeedbackBtn,
  BtnWrapper,
} from "@styles/styled/FeedbackList.styled";

const FeedbackList: React.FC<any> = ({ feedbacks }) => {
  const [viewIndexes, setViewIndexes] = useState<number[]>([0, 2]);

  const handleIncrease = (): void => {
    setViewIndexes((prevState) => [prevState[0] + 3, prevState[1] + 3]);
  };

  const handleDecrease = (): void => {
    setViewIndexes((prevState) => [prevState[0] - 3, prevState[1] - 3]);
  };

  return (
    <Wrapper>
      <StyledFeedbackList>
        {feedbacks.map((feedback: any, index: number) => {
          const { _id, userName, userFeedback, rating } = feedback;
          const isVisibleFeedback: boolean =
            index >= viewIndexes[0] && index <= viewIndexes[1];
          return (
            isVisibleFeedback && (
              <FeedbackItem
                key={_id}
                userName={userName}
                userFeedback={userFeedback}
                rating={rating}
              />
            )
          );
        })}
      </StyledFeedbackList>
      <BtnWrapper>
        <FeedbackBtn
          type="button"
          onClick={handleDecrease}
          disabled={viewIndexes[0] < 1}
        >
          <AiOutlineArrowLeft size={15} color={"inherit"} />
          Попередні
        </FeedbackBtn>
        <FeedbackBtn
          type="button"
          onClick={handleIncrease}
          disabled={viewIndexes[1] >= feedbacks.length - 1}
        >
          Наступні
          <AiOutlineArrowRight size={15} color={"inherit"} />
        </FeedbackBtn>
      </BtnWrapper>
    </Wrapper>
  );
};

export default FeedbackList;
