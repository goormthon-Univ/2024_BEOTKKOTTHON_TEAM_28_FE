import { AxiosError } from 'axios';
import axiosInstance from '..';

const getRequestedQuestion = async (id, sort = 'all') => {
  try {
    const response = await axiosInstance.get(`/teams/${id}/questions/sent?sort=${sort}`);
    return response.data.data.questionList;
  } catch (err) {
    if (err === AxiosError) {
      console.error(err);
      return err.response;
    }
  }
};

export default getRequestedQuestion;
