import React from "react";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

class TemplateWrapper extends React.Component {
  render() {
    const {data, children} = this.props;

    return (
      <div className="site-wrapper">
        <Nav title={ data.site.siteMetadata.title } />
        <Hero image={ data.headerImage } />
        {children()}
        <Footer />
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
      sizes(maxWidth: 1240, maxHeight: 300 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
