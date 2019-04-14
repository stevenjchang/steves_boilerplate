import { connect } from 'react-redux';
import { getPosts } from '../actions';
import PostList from '../components/PostList';

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => ({
  getPosts: () => dispatch(getPosts()),
});

const PostListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

export default PostListContainer;
