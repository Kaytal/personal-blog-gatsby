import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import {Helmet} from "react-helmet"
import { StaticQuery, graphql } from 'gatsby';
import "../styles/main.scss";


export default ({children}) => (
  
  <StaticQuery
    query={graphql`
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
    `}
    render={data => (
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
        {children}
        <Footer />
      </div>
    )}
  />
)

