
import { Component } from 'react';
import PropTypes from 'prop-types';
import addEventListener from 'rc-util/lib/Dom/addEventListener';
import { getClientSize } from 'rc-util/lib/Dom/css';
import Link from 'next/link';
import { md } from 'styles/conf';


class Nav extends Component {

  static propTypes = {
    onMenuOpen: PropTypes.func
  };

  static defaultProps = {
    onMenuOpen: undefined
  };

  state = {
    menuOpened: false
  };

  componentDidMount() {
    this.resizeEvent = addEventListener( window, 'resize', () => {
      const { menuOpened } = this.state;
      const { onMenuOpen } = this.props;
      const { width } = getClientSize();
      if ( width <= md && menuOpened === false ) {
        this.setState({ menuOpened: true });
        onMenuOpen && onMenuOpen( true );
      }
      if ( width > md && menuOpened === true ) {
        this.setState({ menuOpened: false });
        onMenuOpen && onMenuOpen( false );
      }
    });
  }

  componentWillUnmount() {
    if ( this.resizeEvent ) {
      this.resizeEvent.remove();
      this.resizeEvent = null;
    }
  }

  render() {
    const { menuOpened } = this.state;
    return (
      <nav className="nav">
        <ul>
          <li>
            <Link href="/">
              <a className="nav-link">首页</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="nav-link">关于</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a className="nav-link">关于</a>
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Nav;
