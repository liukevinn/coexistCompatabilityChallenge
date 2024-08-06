import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3000/api', // Adjust baseURL if needed
});

export const getQuestions = async () => {
    const response = await api.get('/questions');
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
