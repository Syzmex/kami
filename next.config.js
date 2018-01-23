
// const { BundleAnalyzerPlugin } = require( 'webpack-bundle-analyzer' );
const { paths } = require( 'kiwiai' );
// // const { ANALYZE } = process.env;
const resolvePath = paths.resolveApp;


module.exports = {
  webpack( config ) {

    const cssPaths = [ './pages', './styles', './lib', './components' ].map( resolvePath );

    config.module.rules.push({
      test: /\.(css|less)/,
      loader: 'emit-file-loader',
      options: {
        name: 'dist/[path][name].[ext]'
      }
    }, {
      test: /\.css$/,
      include: cssPaths,
      use: [
        'babel-loader',
        'raw-loader',
        'postcss-loader'
      ]
    }, {
      test: /\.less$/,
      include: cssPaths,
      use: [
        'babel-loader',
        'raw-loader',
        'postcss-loader',
        'less-loader'
      ]
    });

    // if ( ANALYZE ) {
    //   config.plugins.push( new BundleAnalyzerPlugin({
    //     analyzerMode: 'server',
    //     analyzerPort: 8888,
    //     openAnalyzer: true
    //   }));
    // }

    return {
      ...config,
      node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty',
        dns: 'empty',
        module: 'empty'
      }
    };
  }
};
