"use client";

import { useState, useEffect } from "react";
import { FaCrown } from "react-icons/fa";
import { getFeedbacks } from "@utils/api";
import FeedbackList from "@components/FeedbackList";
import {
  Wrapper,
  FeedbackTitle,
  FeedbackTitleText,
  FeedbackText,
  Anchor,
} from "@styles/styled/Feedback.styled";

interface IFeedback {
  userName: string;
  userFeedback: string;
  rating: string;
}

const Feedback: React.FC = () => {
  const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);

  useEffect(() => {
    (async () => {
      const response = await getFeedbacks();
      setFeedbacks(response.data);
    })();
  }, []);

  const averageRating: number =
    feedbacks.reduce((acc: number, el: IFeedback) => {
      return acc + Number(el.rating);
    }, 0) / feedbacks.length;
  const roundedAverageRating =
    averageRating % Number(averageRating.toFixed(0)) > 0
      ? averageRating.toFixed(1)
      : averageRating.toFixed(0);
  return (
    <Wrapper>
      <FeedbackTitle>
        <FaCrown size={25} color={"#ffc803"} />
        <FeedbackTitleText>
          Ваші відгуки про нас -{"  "} {roundedAverageRating}/5
          <FaCrown size={25} color={"#ffc803"} />
        </FeedbackTitleText>
        <FaCrown size={25} color={"#ffc803"} />
      </FeedbackTitle>
      <div>
        <FeedbackText>
          <p>
            В цій секції ви можете ознайомитись з відгуками наших клієнтів та
            людей, що хотіли скористатись нашими послугами, але чомусь
            передумали. Якщо ж ви хочете залишити свій відгук - запрошуємо
            скористатись <Anchor href={`#feedBack`}> формою відгуку</Anchor>{" "}
            внизу сторінки.
          </p>
        </FeedbackText>

        <FeedbackList feedbacks={feedbacks} />
      </div>
    </Wrapper>
  );
};

export default Feedback;
