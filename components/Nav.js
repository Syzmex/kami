
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

  componentDidMount() {console.log(1);
    this.resizeEvent = addEventListener( window, 'resize', () => {console.log(2);
      const { menuOpened } = this.state;
      const { width } = getClientSize();
      if ( width <= md && menuOpened === false ) {
        this.setState({ menuOpened: true });
      }
      if ( width > md && menuOpened === true ) {
        this.setState({ menuOpened: false });
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
    console.log(menuOpened);
    return (
      <nav className="nav">
        <Link href="/">
          <a className="nav-link">首页</a>
        </Link>
        <Link href="/about">
          <a className="nav-link">关于</a>
        </Link>
        <Link href="/about">
          <a className="nav-link">关于</a>
        </Link>
      </nav>
    );
  }
}

export default Nav;
