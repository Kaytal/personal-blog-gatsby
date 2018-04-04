import React from "react";
import moment from "moment";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div className="content-column single-post article">
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
      frontmatter {
        title
      }
    }
  }
`;
