
import PropTypes from 'prop-types';
import { Fragment, Component } from 'react';
import Document, { Head, NextScript } from 'next/document';


// 摘抄自
// https://github.com/zeit/next.js/blob/canary/server/document.js
// 减少一层 div
export class Main extends Component {

  static contextTypes = {
    _documentProps: PropTypes.any
  }

  render() {
    const { html, errorHtml } = this.context._documentProps;

    return (
      <Fragment>
        <div id="__next" dangerouslySetInnerHTML={{ __html: html }} />
        <div id="__next-error" dangerouslySetInnerHTML={{ __html: errorHtml }} />
      </Fragment>
    );
  }
}

class CustomDocument extends Document {

  static getInitialProps( ctx ) {
    const { html, head, errorHtml, chunks, styles } = Document.getInitialProps( ctx );

    return {
      html, errorHtml, chunks, styles,
      // 过滤 meta(charSet="utf-8") 强迫症 -_-|||
      head: head.filter(({ type, props }) => type === 'meta' && !props.charSet )
    };
  }

  static childContextTypes = {
    _documentProps: PropTypes.any
  }

  getChildContext() {
    return { _documentProps: this.props };
  }

  render() {

    return (
      <html>
        <Head>
          {/* 编码 */}
          <meta charSet="utf-8" />

          {/* 渲染模式 */}
          <meta name="renderer" content="webkit" />
          <meta name="force-rendering" content="webkit" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          {/* 设置安卓移动端浏览器工具栏背景色 */}
          <meta name="theme-color" content="#db5945" />
          {/* 禁止移动端格式化地址电话 */}
          <meta name="format-detection" content="telephone=no, address=no" />
          {/* 设置宽度缩放 */}
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />

          {/* 总是传递 SEO 的来源信息传递 */}
          <meta name="referrer" content="always" />
          {/* 描述 */}
          <meta name="description" content="" />
          {/* 关键词 */}
          <meta name="keywords" content="前端, 前端开发, web前端, web前端开发, 前端开发工程师, 前端开发攻城师,设计, 开发, 前端资源, CSS, JavaScript, HTML, w3ctech, Web标准" />

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default CustomDocument;
