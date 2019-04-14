import axios from 'axios';

export const getPosts = () => {
  return dispatch => {
    axios.get('/posts')
    .then((res) => res.data)
    .then((data) => {
      dispatch({ type: 'GET_POSTS', data });
    })
    .catch((err) => {
      dispatch({ type: 'GET_POSTS_ERROR', err });
    })
  }
};
