
import React from 'react';
import axios from 'axios';
import querystring from 'querystring';
import Layout from 'components/Layout';
import PostPage from 'components/PostPage';
import Nav from 'components/Nav';


const Post = ( props ) => (
  <Layout>
    <PostPage {...props} nav={<Nav />} />
  </Layout>
);

Post.getInitialProps = async ({ query }) => {
  const res = await axios({
    url: 'http://127.0.0.1:3000/api/getonepost',
    data: querystring.stringify( query ),
    method: 'post'
  });
  return { post: res.data };
};

export default Post;
