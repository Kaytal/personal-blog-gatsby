import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet"
import "../styles/main.scss";

class TemplateWrapper extends React.Component {
  render() {
    const {data, children} = this.props;
    console.log('DATA: ', data);

    return (
      <div className="site-wrapper">
        <Helmet>
          <meta charSet="utf-8" />
          <title>{ data.site.siteMetadata.title }</title>
          <link rel="canonical" href={ data.site.siteMetadata.canonicalBase } />
          <meta property="og:title" content={ data.site.siteMetadata.title } />
          <meta property="og:url" content={ data.site.siteMetadata.canonicalBase } />
          <meta property="og:type" content="article" />
          <meta property="og:description" content={ data.site.siteMetadata.description } />
        </Helmet>
        <Nav title={ data.site.siteMetadata.title } />
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
        tagline
        description
        canonicalBase
      }
    }
  }
`
