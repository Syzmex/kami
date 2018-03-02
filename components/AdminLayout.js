
import { Fragment, Component } from 'react';
import Head from 'next/head';


class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Head>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/3.2.2/antd.min.css" />
        </Head>
        {children}
      </Fragment>
    );
  }
}

export default Layout;
