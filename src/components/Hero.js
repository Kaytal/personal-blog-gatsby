import React from "react";
import Img from "gatsby-image";

class Hero extends React.Component {
  render() {
    return (
      <header className="hero">
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
