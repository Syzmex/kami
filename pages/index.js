
import axios from 'axios';
import Layout from 'components/Layout';
import IndexPage from 'components/IndexPage';
import Nav from 'components/Nav';


const Index = ({ posts }) => (
  <Layout>
    <IndexPage posts={posts} nav={<Nav />} />
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await axios({
    url: 'http://127.0.0.1:3000/api/getposts',
    method: 'get'
  });
  return { posts: res.data };
};

export default Index;
