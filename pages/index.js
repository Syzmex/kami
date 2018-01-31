
import axios from 'axios';
import Layout from 'components/Layout';
import IndexPage from 'components/IndexPage';


const Index = ({ posts }) => (
  <Layout>
    <IndexPage posts={posts} />
  </Layout>
);

Index.getInitialProps = async () => {
  const res = await axios({
    url: 'http://127.0.0.1:3000/data/getallposts',
    method: 'get'
  });
  return { posts: res.data };
};

export default Index;
