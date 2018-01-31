
require( 'babel-register', {
  only: /(koa\/|styles\/)/
});
require( './koa/server' );
