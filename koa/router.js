
import withRouter from 'lib/withRouter';


export default withRouter()(({ app, router, nextApp }) => {

  const handle = nextApp.getRequestHandler();

  router.get( '/post', ctx => {
    ctx.redirect( '/' );
  });

  router.get( '/post/:hash', async ctx => {
    const { req, res, query } = ctx;
    const queryParams = Object.assign( query, { hash: ctx.params.hash });
    await nextApp.render( req, res, '/post', queryParams );
    ctx.respond = false;
  });

  router.get( '*', async ctx => {
    await handle( ctx.req, ctx.res );
    ctx.respond = false;
  });

  app.use(( ctx, next ) => {
    ctx.res.statusCode = 200;
    return next();
  });

});
