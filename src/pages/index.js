import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";
import moment from "moment";

import Layout from "../components/layout";

export default ({ data }) => {
  return (
    <Layout>
      <div className="post-list content-column">
        <header className="post-list__header">
          <Img
            className="circle-image circle-image--index"
            title="Josh and Lainey Bryant"
            alt="Me"
            sizes={data.avatarImage.fluid}
          />
          <h1 className="post-list__title">Post Archive:</h1>
          <p className="post-list__count">
            {data.allMarkdownRemark.totalCount} Post
            {data.allMarkdownRemark.totalCount > 1 && "s"}
          </p>
        </header>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className="article">
            <Link to={node.fields.slug} className="article__link">
              <h2 className="article__title">{node.frontmatter.title}</h2>
              <p className="article__published">
                Published:{" "}
                {moment(node.frontmatter.date, "DD MMMM, YYYY").format("MMMM Do, YYYY")}
              </p>
              <p className="article__excerpt">{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
    avatarImage: imageSharp(original: { src: {regex: "/cartoon/" }}) {
      fluid(maxWidth: 250) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
