import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/images/logo.png"

{
  /**
   *
   * Header
   *  -Logo (Title)
   *  -Nav Items
   *  -Cart
   *
   * Body
   *  -Search bar
   *  -Restaurant list
   *    -Restaurant card (many)
   *      -Image
   *      -Name
   *      -Rating
   *      -Cuisines
   *
   * Footer
   *  -Links
   *  -Copyright
   *
   */
}

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Cuisines</a></li>
          <li><a href="#">Restaurants</a></li>
          <li><a href="#">Locations</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>
    </div>
  );
};


const Body = () => (
  <div>
    <h3>Body</h3>
  </div>
);


const Footer = () => (
  <div>
    <h3>Footer</h3>
  </div>
);

const Title = () => (
  <>
  <a href="/">
  <img src={logo} alt="logo" width="100px" />
  </a>
  </>
);

const Content = () => (
  <>
    <Header />
    <Body />
    <Footer />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Content />);
