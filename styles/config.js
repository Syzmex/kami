
// 样式共享变量
const config = {
  xs: 480,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200
};

export default Object.assign( config, {
  modifyVars: {
    '@screen-xs-min': config.xs,

    // Small screen / tablet
    '@screen-sm-min': config.sm,

    // Medium screen / desktop
    '@screen-md-min': config.md,

    // Large screen / wide desktop
    '@screen-lg-min': config.lg,

    // Extra large screen / full hd
    '@screen-xl-min': config.xl,

    '@primary-color': '#13c2c2'
  }
});
