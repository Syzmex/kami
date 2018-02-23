
import is from 'whatitis';
import Router from 'koa-router';

/**
 * 统一添加路由函数
 * @param {Object} defaultOption
 * @param {Function} routes
 * @param {Object} option
 * @param {Context} context
 * @param {Function} next
 * @returns {Promise} next()
 */
export default ( defaultOption ) => ( routes ) => ( option ) => ( context, next ) => {
  const { app } = context;
  const router = new Router( Object.assign({}, defaultOption, option ));
  context.router = router;
  routes( context, next );
  app.use( router.routes());
  app.use( router.allowedMethods());
  delete context.router;
  return next();
};
