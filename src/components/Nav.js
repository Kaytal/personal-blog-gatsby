import React from "react";
import Link from "gatsby-link";

class Nav extends React.Component {
  render() {
    const {title} = this.props;

    return (
      <div className="main-navigation">
        <Link to={`/`}>
          { title }
        </Link>
        <Link to={`/about/`}>
          About
        </Link>
      </div>
    )
  }
}

export default Nav;

