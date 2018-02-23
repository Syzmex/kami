
import withRouter from 'lib/withRouter';
import initData from './initData';
import { getOnePost, getPosts } from './postData';


export default withRouter({ prefix: '/api' })(({ router }) => {

  router.get( '/setup', async ctx => {
    await initData();
    ctx.body = '数据已被初始化';
  });

  router.post( '/getonepost', async ctx => {
    ctx.body = await getOnePost( ctx.request.body.hash );
  });

  router.get( '/getposts', async ctx => {
    ctx.body = await getPosts();
  });

  router.use( '*', async ctx => {
    ctx.body = '没有找到请求的数据';
  });

});
