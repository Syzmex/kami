
import multer from 'koa-multer';
import withRouter from 'lib/withRouter';
// import initData from './initData';
// import { getOnePost, getPosts } from './postData';


export default withRouter({ prefix: '/api' })(({ router }) => {

  // router.get( '/setup', async ctx => {
  //   await initData();
  //   ctx.body = '数据已被初始化';
  // });

  // router.post( '/getonepost', async ctx => {
  //   ctx.body = await getOnePost( ctx.request.body.hash );
  // });

  // router.get( '/getposts', async ctx => {
  //   ctx.body = await getPosts();
  // });

  // const upload = multer({ dest: '../uploads/' });
  var upload = multer({
    storage: multer.diskStorage({
      destination: function ( req, file, cb ) {
        cb( null, './uploads/' );
      },
      filename: function ( req, file, cb ) {
        //file.originalname上传文件的原始文件名
        var changedName = ( new Date().getTime())+'-'+file.originalname;
        cb( null, changedName );
      }
    }),
    limits:{
      // 限制文件大小10kb
      fileSize: 500 * 1000,
      // 限制文件数量
      files: 1
    },
    fileFilter: function( req, file, cb ) {
      if ( /^image\/.+/.test( file.mimetype )){
        cb( null, true );
      } else {
        cb( null, false );
      }
    }
  });
  const singleUpload = upload.single( 'file' );
  router.post('/upload', async ( ctx, next ) => {
    try {
      await singleUpload( ctx, next );
      ctx.body = {
        result: true,
        error: 0,
        message: '',
        data: {
          originalname: ctx.req.file.originalname
        }
      };
    } catch ( err ) {
      ctx.body = {
        result: false,
        error: 1,
        message: err.message,
        data: {
          originalname: ''
        }
      };
    }
  });

  router.use( '*', async ctx => {
    ctx.body = '没有找到请求的数据';
  });

});
