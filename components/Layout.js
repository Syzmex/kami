
import { Fragment, Component } from 'react';
import Style from 'styled-jsx/style';
import globalStyles from 'styles/index.less';
import Header from './Header';
import Footer from './Footer';
import Body from './Body';


class Layout extends Component {
  render() {
    const { children } = this.props;
    return (
      <Fragment>
        <Style styleId="global-styles" css={globalStyles} />
        <Header />
        <Body>{children}</Body>
        <Footer />
      </Fragment>
    );
  }
}

export default Layout;
