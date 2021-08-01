import postReducer from '../postReducer';
import { GET_POSTS } from '../../constants/postConstants';

describe('Posts Reducer', () => {
  it('Should return default state', () => {
    const newState = postReducer(undefined, {});
    expect(newState).toEqual([]);
  });
  it('should return a new state when there is a type', () => {
    const posts = [
      { title: 'Test 1' },
      { title: 'Test 2' },
      { title: 'Test 3' },
    ];
    const newState = postReducer(undefined, {
      type: GET_POSTS,
      payload: posts,
    });
    expect(newState).toEqual(posts);
  });
});
