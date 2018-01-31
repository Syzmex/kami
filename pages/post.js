
import React from 'react';
import axios from 'axios';
import Layout from 'components/Layout';
import PostPage from 'components/PostPage';


const Post = ( props ) => (
  <Layout>
    <PostPage {...props} />
  </Layout>
);

Post.getInitialProps = async ({ query }) => {
  const res = await axios({
    url: 'http://127.0.0.1:3000/data/getpost',
    method: 'post',
    data: query
  });
  return { post: res.data };
};

export default Post;
