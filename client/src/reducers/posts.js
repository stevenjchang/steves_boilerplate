const posts = (state = [], action) => {
  switch (action.type) {
    case 'GET_POSTS':
      return action.data;
    case 'GET_POSTS_ERROR':
      return action.err.response
    default:
      return state;
  }
};

export default posts;
