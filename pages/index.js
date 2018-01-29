
import Layout from 'components/Layout';
import IndexPage from 'components/IndexPage';
import initData from 'lib/initData';
import getAllPost from 'lib/posts';


const Index = ({ posts }) => (
  <Layout>
    <IndexPage posts={posts} />
  </Layout>
);

Index.getInitialProps = async () => {
  await initData();
  return {
    posts: await getAllPost()
  };
};

export default Index;
