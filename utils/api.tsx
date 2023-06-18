import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL!;

type Values = {
  userName: string;
  userFeedback: string;
  rating: string;
};

export const createFeedback = async (body: Values) => {
  return await axios.post(`${BASE_URL}/api/feedbacks`, body);
};

export const getFeedbacks = async () => {
  return await axios.get(`${BASE_URL}/api/feedbacks`);
};
