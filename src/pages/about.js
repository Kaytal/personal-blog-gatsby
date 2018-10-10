import React from "react";
import Img from "gatsby-image";
import Layout from "../components/layout";

export default ({ data }) => (
  <Layout>
    <div className="content-column about-content">
      <h1>About Me!</h1>
      <Img
        className="circle-image"
        title="Josh and Lainey Bryant"
        alt="Me"
        sizes={data.avatarImage.fluid}
      />
      <p>
        Above is me pretty much summed up in a single picture. I'm married to my
        best friend and love of my life. I &hearts; the mountains (specifically
        Colorado). I have a pretty cool beard. I'm a Web Geek.
      </p>
      <p>
        Not pictured is my love of Gardening, Woodworking, Kayaking, Hiking,
        Backpacking, Casual Bike Rides, Trees, and all of my amazing friends.
      </p>
    </div>
  </Layout>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
    avatarImage: imageSharp(original: { src: { regex: "/avatar/" } }) {
      fluid(maxWidth: 250) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`;
