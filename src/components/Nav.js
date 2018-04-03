import React from "react";
import Link from "gatsby-link";

class Nav extends React.Component {
  render() {
    const {title} = this.props;

    return (
      <div className="main-navigation">
        <div className="site-branding">
          <Link to={`/`}>
            { title }
          </Link>
        </div>
        <div className="navigation">
          <Link to={`/about/`}>
            About
          </Link>
        </div>
      </div>
    )
  }
}

export default Nav;

