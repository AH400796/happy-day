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
  const [viewIndexes, setViewIndexes] = useState<number[]>([0, 5]);

  const handleIncrease = () => {
    setViewIndexes((prevState) => [prevState[0] + 6, prevState[1] + 6]);
  };

  const handleDecrease = () => {
    setViewIndexes((prevState) => [prevState[0] - 6, prevState[1] - 6]);
  };

  return (
    <Wrapper>
      <StyledFeedbackList>
        {feedbacks.map((feedback: any, index: number) => {
          const { _id, userName, userFeedback, rating } = feedback;
          console.log(index);
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
          disabled={viewIndexes[1] > feedbacks.length - 1}
        >
          Наступні
          <AiOutlineArrowRight size={15} color={"inherit"} />
        </FeedbackBtn>
      </BtnWrapper>
    </Wrapper>
  );
};

export default FeedbackList;
