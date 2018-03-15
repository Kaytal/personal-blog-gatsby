import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";

class TemplateWrapper extends React.Component {
  render() {
    const {data, children} = this.props;
    console.log(data);
    return (
      <div>
        <Nav title={ data.site.siteMetadata.title } />
        <Hero image={ data.headerImage } />
        {children()}
      </div>
    )
  }
}

export default TemplateWrapper;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
      }
    }
    headerImage: imageSharp(id: { regex: "/" }) {
      sizes(maxWidth: 1240 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
