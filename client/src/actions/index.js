import axios from 'axios';

export const getPosts = () => {
  return dispatch => axios.get('/posts')
  .then(res => res.items)
  .then(
    data => dispatch({ type: 'GET_POSTS', data }),
    err => dispatch({ type: 'GET_POSTS_ERROR', err }),
  );
};
