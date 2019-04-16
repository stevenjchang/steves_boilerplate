import React from 'react';
import PropTypes from 'prop-types';

const PostList = ({ posts, getPosts }) => {
  return (
    <>
      <h1>posts</h1>
      <button
        onClick={getPosts}
      >getPosts
      </button>
    </>
  )
}

PostList.propTypes = {
}

export default PostList;
