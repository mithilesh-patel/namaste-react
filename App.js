import React from "react";
import ReactDOM from "react-dom/client";
import logo from "./assets/images/logo.png";
import noodles from "./assets/images/noodles.avif";

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


const Title = () => (
  <>
  <a href="/">
  <img src={logo} alt="logo" width="100px" />
  </a>
  </>
);

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
          <li><a href="#">Cart</a></li>
        </ul>
      </div>
    </div>
  );
};


const Restaurantcard=()=>(
  <div className="res-card">
    <h2>Chow India</h2>
    <img src={noodles} alt="noodles" />
    <h2>FreshMenu</h2>      
    <h3>4.3 stars</h3>
  </div>
)

const searchstyle={
    padding: "10px"
}

const Body = () => (
  <div>
    <div className="search" style={searchstyle}>Search</div>
    <Restaurantcard />
  </div>
);


const Footer = () => (
  <div>
    <h3>Footer</h3>
  </div>
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
