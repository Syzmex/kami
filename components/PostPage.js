
import React from 'react';


class PostPage extends React.Component {
  render() {
    const { post = {}, nav } = this.props;
    return (
      <section className="post-page">
        <article className="post-body">
          <h1 className="post-title">{post.title}</h1>
          <div className="post-info">{post.info}</div>
          <section className="post-content">{post.content}</section>
        </article>
        <aside className="pane">
          {nav}
        </aside>
      </section>
    );
  }
}

export default PostPage;
