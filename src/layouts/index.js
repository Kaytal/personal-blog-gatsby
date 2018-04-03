import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import "../styles/main.scss";

class TemplateWrapper extends React.Component {
  render() {
    const {data, children} = this.props;

    return (
      <div className="site-wrapper">
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
      }
    }
  }
`
