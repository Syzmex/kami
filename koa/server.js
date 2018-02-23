
import Koa from 'koa';
import next from 'next';
import koabody from 'koa-body';
import logger from 'koa-logger';
import loadRouter from './router';
import loadApi from './api';

const port = parseInt( process.env.PORT, 10 ) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });

app.prepare().then(() => {

  const server = new Koa();
  server.context.nextApp = app;

  server.use( koabody());

  if ( dev ) {
    server.use( logger());
  }

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
