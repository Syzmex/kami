
import moment from 'moment';
import { Fragment, Component } from 'react';
import Head from 'next/head';
import { Layout } from 'antd';


const { Header, Content, Footer } = Layout;

class LoginLayout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Head>
          <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/antd/3.2.2/antd.min.css" />
        </Head>
        <Content>
          {children}
        </Content>
        <Footer>
          <p>Copyright © {moment().year()} 7secat 苏ICP备13024683号</p>
        </Footer>
      </Fragment>
    );
  }
}

export default LoginLayout;
