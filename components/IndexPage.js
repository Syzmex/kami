
import Link from 'next/link';


const PostLink = ({ hash, children }) => (
  <h1 className="post-title">
    <Link as={`/post/${hash}`} href={`/post?hash=${hash}`}>
      <a>{children}</a>
    </Link>
  </h1>
);

const Layout = ({ children }) => (
  <section className="index-page">
    <article className="posts">
      <section className="post">
        <PostLink hash="这么大的标题你居然看不见1">这么大的标题你居然看不见</PostLink>
        <div className="post-info">2016 年 10 月 18 日</div>
        <div className="post-summary">这是一款简洁的单栏的适合阅读的 Typecho 主题，适合放大段大段的文字、代码。因为考虑到一些阅读的舒适性的问题，所以栏宽设置的并不宽。</div>
      </section>
      <section className="post">
        <PostLink hash="这么大的标题你居然看不见2">这么大的标题你居然看不见</PostLink>
        <div className="post-info">2016 年 10 月 18 日</div>
        <div className="post-summary">这是一款简洁的单栏的适合阅读的 Typecho 主题，适合放大段大段的文字、代码。因为考虑到一些阅读的舒适性的问题，所以栏宽设置的并不宽。</div>
      </section>
      <section className="post">
        <PostLink hash="这么大的标题你居然看不见3">这么大的标题你居然看不见</PostLink>
        <div className="post-info">2016 年 10 月 18 日</div>
        <div className="post-summary">这是一款简洁的单栏的适合阅读的 Typecho 主题，适合放大段大段的文字、代码。因为考虑到一些阅读的舒适性的问题，所以栏宽设置的并不宽。</div>
      </section>
    </article>
    <aside className="pane"></aside>
  </section>
);

export default Layout;
