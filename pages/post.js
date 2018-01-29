
import React from 'react';
import Layout from 'components/Layout';
import PostPage from 'components/PostPage';
import getPost from '../lib/post';

const Post = ( props ) => (
  <Layout>
    <PostPage {...props} />
  </Layout>
);

Post.getInitialProps = async ({ query }) => {
  return { post: await getPost( query.hash ) };
};

export default Post;
