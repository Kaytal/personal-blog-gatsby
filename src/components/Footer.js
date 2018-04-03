import React from "react";

class Footer extends React.Component {
  render() {
    const today = new Date();

    return (
      <footer className="site-footer">
        <p>Copyright &copy; {today.getFullYear()} Joshua Bryant</p>
        <p>Made with &hearts; on Gatsby</p>
      </footer>
    );
  }
}

export default Footer;
