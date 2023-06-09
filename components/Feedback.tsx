"use client";

import { useState, useEffect, Suspense } from "react";
import { getFeedbacks } from "@utils/api";
import { FaCrown } from "react-icons/fa";
import FeedbackList from "@components/FeedbackList";
import Loader from "./Loader";
import {
  FeedbackTitle,
  FeedbackText,
  Anchor,
  AverageRating,
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
      try {
        const response = await getFeedbacks();
        setFeedbacks(response.data);
      } catch (error) {}
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
    <>
      <FeedbackTitle>Відгуки клієнтів</FeedbackTitle>
      <Suspense fallback={<Loader width="100" />}>
        <FeedbackText>
          {!isNaN(averageRating) && (
            <AverageRating>
              Оцінка клієнтів -{"  "} {roundedAverageRating}/5{" "}
              <FaCrown size={25} color={"#f78629"} />
            </AverageRating>
          )}
          <p>
            Ознайомтесь з відгуками наших клієнтів або залиште свій,
            скориставшись <Anchor href={`#feedBack`}> формою відгуку</Anchor>{" "}
            внизу сторінки.
          </p>
        </FeedbackText>
        <FeedbackList feedbacks={feedbacks} />
      </Suspense>
    </>
  );
};

export default Feedback;
