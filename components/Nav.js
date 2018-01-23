
import Link from 'next/link';

const Nav = () => (
  <nav className="nav">
    <Link href="/">
      <a className="nav-link">首页</a>
    </Link>
    <Link href="/about">
      <a className="nav-link">关于</a>
    </Link>
  </nav>
);

export default Nav;
