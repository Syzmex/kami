
import initData from './initData';
import { getOnePost, getPosts } from './postData';

export default ( router, prefix ) => {

  router.post( `${prefix}/getpost`, async ctx => {
    const { query } = ctx;
    const post = await getOnePost( query.hash );
    ctx.body = post;
  });

  router.get( `${prefix}/getallposts`, async ctx => {
    await initData();
    ctx.body = await getPosts();
  });

};
