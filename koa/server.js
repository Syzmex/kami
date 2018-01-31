
import Koa from 'koa';
import next from 'next';
import Router from 'koa-router';
import postRest from './postRest';

const port = parseInt( process.env.PORT, 10 ) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
  .then(() => {

    const server = new Koa();
    const router = new Router();

    postRest( router, '/data' );

    router.get( '/post', async ctx => {
      ctx.redirect( '/' );
    });

    router.get( '/post/:hash', async ctx => {
      const { req, res, query } = ctx;
      const queryParams = Object.assign( query, { hash: ctx.params.hash });
      await app.render( req, res, '/post', queryParams );
      ctx.respond = false;
    });

    router.get( '*', async ctx => {
      await handle( ctx.req, ctx.res );
      ctx.respond = false;
    });

    server.use( async ( ctx, next ) => {
      ctx.res.statusCode = 200;
      await next();
    });

    server.use( router.routes());
    server.listen( port, ( err ) => {
      if ( err ) throw err;
      console.log( `> Ready on http://localhost:${port}` );
    });
  })
  .catch(( ex ) => {
    console.error( ex.stack );
    process.exit( 1 );
  });
