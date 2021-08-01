import { GET_POSTS } from '../constants/postConstants';
// eslint-disable-next-line
export default (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS: {
      return payload;
    }
    default: {
      return state;
    }
  }
};
