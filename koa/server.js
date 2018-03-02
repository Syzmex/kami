
import Koa from 'koa';
import next from 'next';
import koabody from 'koa-body';
import logger from 'koa-logger';
import redisStore from 'koa-redis';
import compress from 'koa-compress';
import session from 'koa-generic-session';
import loadRouter from './router';
import loadApi from './api';

const port = parseInt( process.env.PORT, 10 ) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare().then(() => {

  const server = new Koa();
  server.context.nextApp = app;

  server.use( koabody());
  server.use( compress());

  if ( dev ) {
    server.use( logger());
  }

  // https://github.com/koajs/generic-session
  // https://github.com/koajs/koa-redis
  // https://github.com/NodeRedis/node_redis
  server.use(session({
    key: 'lamtang',
    prefix: 'lamtang:sess',
    allowEmpty: true,
    errorHandler: () => {}, // errorHandler(err, type, ctx)
    store: redisStore({
      host: '127.0.0.1',
      port: '6379',
      password: 'lamtang',
      db: '0' // 默认 0 [0-15]
    })
  }));

  server.use( loadApi());
  server.use( loadRouter());

  server.listen( port, ( err ) => {
    if ( err ) throw err;
    console.log( `> Ready on http://localhost:${port}` );
  });

}).catch(( ex ) => {
  console.error( ex.stack );
  process.exit( 1 );
});
