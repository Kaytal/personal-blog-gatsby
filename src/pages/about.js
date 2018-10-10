import React from "react";
import Img from "gatsby-image";

export default ({ data }) => (
  <div className="content-column about-content">
    <h1>About Me!</h1>
    <Img className="circle-image" title="Josh and Lainey Bryant" alt="Me" sizes={data.avatarImage.sizes} />
    <p>
      Above is me pretty much summed up in a single picture.  I'm married to my best friend and love of my life.  I &hearts; the mountains (specifically Colorado).  I have a pretty cool beard.  I'm a Web Geek.
    </p>
    <p>
      Not pictured is my love of Gardening, Woodworking, Kayaking, Hiking, Backpacking, Casual Bike Rides, Trees, and all of my amazing friends.
    </p>
  </div>
);

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        title
      }
    }
    avatarImage: imageSharp(id: { regex: "/avatar3/" }) {
      sizes(maxWidth: 250 ) {
      	...GatsbyImageSharpSizes
      }
    }
  }
`
