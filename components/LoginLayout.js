
import moment from 'moment';
import Style from 'styled-jsx/style';
import { Fragment, Component } from 'react';
import loginStyles from 'styles/login/index.less';


class LoginLayout extends Component {
  render() {
    const { children, className, ...props } = { ...this.props };
    return (
      <Fragment>
        <Style styleId="login-styles" css={loginStyles} />
        <section {...props} className={className}>
          {children}
        </section>
        <footer className="layout-footer">
          <p>Copyright © {moment().year()} 7secat</p>
        </footer>
      </Fragment>
    );
  }
}

export default LoginLayout;
