
import React from 'react';
import marked from 'marked';
import dynamic from 'next/dynamic';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/dist/light';
import js from 'react-syntax-highlighter/languages/hljs/javascript';
import Layout from '../components/Layout';

registerLanguage( 'javascript', js );

marked.setOptions({
  gfm: true,
  tables: true,
  breaks: true
});

const Markdown = dynamic( import( 'react-markdown' ));

class CodeBlock extends React.Component {
  render() {
    const { language, literal } = this.props;
    return (
      <SyntaxHighlighter language="javascript" style={docco} className={language}>
        {literal}
      </SyntaxHighlighter>
    );
  }
}

export default function WithPost( options ) {
  return class PostPage extends React.Component {
    renderMarkdown() {
      // If a code snippet contains in the markdown content
      // then use Highlight component
      if ( /~~~/.test( options.content )) {
        const renderers = Object.assign({}, Markdown.renderers, { CodeBlock });
        return (
          <Markdown renderers={renderers} source={options.content} />
        );
      }

      // If not, simply render the generated HTML from markdown
      return (
        <div
          dangerouslySetInnerHTML={{ __html: marked( options.content ) }} />
      );
    }

    render() {
      return (
        <Layout>
          <h1>{options.title}</h1>
          {this.renderMarkdown()}
        </Layout>
      );
    }
  };
}
