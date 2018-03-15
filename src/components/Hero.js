import React from "react";
import Img from "gatsby-image";

class Hero extends React.Component {
  render() {
    return (
      <header className="hero">
        <h1>Hello World</h1>
        <Img
          title="Bearded Robots"
          alt="Can't see the forest through the trees"
          sizes={this.props.image.sizes}
        />
      </header>
    );
  }
}

export default Hero;
