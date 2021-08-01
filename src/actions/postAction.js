import axios from 'axios';
import { GET_POSTS } from '../constants/postConstants';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts?_limit=10'
    );

    dispatch({
      type: GET_POSTS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
