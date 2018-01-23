
import React from 'react';
import Layout from 'components/Layout';
import PoatPage from 'components/PostPage';
// import loadDb from '../lib/data';

const Post = ( props ) => (
  <Layout>
    <PoatPage {...props} />
  </Layout>
);

Post.getInitialProps = async ({ query }) => {
  // console.log(query)
  // const db = await loadDb();
  // console.log( db )
  // let item = await db.child( 'item' ).child( query.id ).once( 'value' );
  // item = item.val();
  return { item: {} };
};

export default Post;
