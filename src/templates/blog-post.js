import React from "react";
import moment from "moment";
import {Helmet} from "react-helmet";

export default ({ data }) => {
  const post = data.markdownRemark;
  const canonical = `http://${ data.site.host}/posts/${post.frontmatter.path}`;
  return (
    <div className="content-column single-post article">
      <Helmet>
        <meta charSet="utf-8" />
        <title>{ data.site.siteMetadata.title } | { post.frontmatter.title }</title>
        <link rel="canonical" href={canonical} />
        <meta property="og:title" content={post.frontmatter.title} />
        <meta property="og:url" content={canonical} />
        <meta property="og:type" content="article" />
        <meta property="og:description" content={post.excerpt} />        
      </Helmet>
      <header className="article__header">
        <h1 className="article__title">
          {post.frontmatter.title}
        </h1>
        <p className="article__published">Published: {moment(post.frontmatter.date).format('MMMM Do, YYYY')}</p>
      </header>
      <main className="article__content" dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        date
        path
      }
    }
    site {
      host
      siteMetadata {
        title
      }
    }
  }
`;
