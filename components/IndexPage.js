
import Link from 'next/link';
import moment from 'moment';


const PostLink = ({ hash, children }) => (
  <h1 className="post-title">
    <Link as={`/post/${hash}`} href={`/post?hash=${hash}`}>
      <a>{children}</a>
    </Link>
  </h1>
);

const Layout = ({ posts }) => {
  return (
    <section className="index-page">
      <article className="posts">
        {posts.map(({ hash, title, publishDatetime, summary }) => {
          return (
            <section key={hash} className="post">
              <PostLink hash={hash}>{title}</PostLink>
              <div className="post-info">{moment( publishDatetime ).format( 'YYYY年MM月DD日 HH:mm:ss' )}</div>
              <div className="post-summary">{summary}</div>
            </section>
          );
        })}
      </article>
      <aside className="pane"></aside>
    </section>
  );
};

export default Layout;
