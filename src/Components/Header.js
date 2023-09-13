import Title from "./Title";

const Header = () => {
    return (
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Cuisines</a>
            </li>
            <li>
              <a href="#">Restaurants</a>
            </li>
            <li>
              <a href="#">Locations</a>
            </li>
            <li>
              <a href="#">Cart</a>
            </li>
          </ul>
        </div>
      </div>
    );
  };


  export default Header;