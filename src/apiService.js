import axios from "axios";

const api = axios.create({
  baseURL:
    "http://coexist-quiz-app-env-env.eba-fpjxknfb.us-east-1.elasticbeanstalk.com/api", // Adjust baseURL if needed
});

export const getQuestions = async () => {
  const response = await api.get("/questions");
  return response.data;
};

export const postResponse = async (optionId) => {
  const response = await api.post(`/responses/${optionId}`);
  return response.data;
};

export const getResponses = async (questionId) => {
  const response = await api.get(`/responses/${questionId}`);
  return response.data;
};
