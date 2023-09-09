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

const resObj = {
  type: "restaurant",
  info: {
    resId: 20355699,
    name: "Sri Udupi Food Hub",
    image: {
      url: "https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg",
    },
    o2FeaturedImage: {
      url: "https://b.zmtcdn.com/data/pictures/chains/0/18683480/c9759695c5e14e06927dc556c5f5674f_o2_featured_v2.jpg",
    },
    rating: {
      has_fake_reviews: 0,
      aggregate_rating: "3.7",
      rating_text: "3.7",
      rating_subtitle: "Good",
      rating_color: "9ACD32",
      votes: "1,449",
      subtext: "REVIEW",
      is_new: false,
    },
    ratingNew: {
      newlyOpenedObj: null,
      suspiciousReviewObj: null,
      ratings: {
        DINING: {
          rating_type: "DINING",
          rating: "3.3",
          reviewCount: "7",
          reviewTextSmall: "7 Reviews",
          subtext: "7 Dining Reviews",
          color: "#1C1C1C",
          ratingV2: "3.3",
          subtitle: "DINING",
          sideSubTitle: "Dining Reviews",
          bgColorV2: {
            type: "green",
            tint: "500",
          },
        },
        DELIVERY: {
          rating_type: "DELIVERY",
          rating: "4.1",
          reviewCount: "1,442",
          reviewTextSmall: "1,442 Reviews",
          subtext: "1,442 Delivery Reviews",
          color: "#E23744",
          ratingV2: "4.1",
          subtitle: "DELIVERY",
          sideSubTitle: "Delivery Reviews",
          bgColorV2: {
            type: "green",
            tint: "700",
          },
          newOnDelivery: false,
        },
      },
    },
    cft: {
      text: "₹650 for two",
    },
    cfo: {
      text: "₹100 for one",
    },
    locality: {
      name: "Majestic, Bangalore",
      address: "18, 1st Main Road, Gandhi Nagar, Majestic, Bangalore",
      localityUrl: "bangalore/majestic-restaurants",
    },
    timing: {
      text: "",
      color: "",
    },
    cuisine: [
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
        url: "https://www.zomato.com/bangalore/restaurants/south-indian/",
        name: "South Indian",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
        url: "https://www.zomato.com/bangalore/restaurants/chinese/",
        name: "Chinese",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
        url: "https://www.zomato.com/bangalore/restaurants/biryani/",
        name: "Biryani",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
        url: "https://www.zomato.com/bangalore/restaurants/north-indian/",
        name: "North Indian",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
        url: "https://www.zomato.com/bangalore/restaurants/sandwich/",
        name: "Sandwich",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
        url: "https://www.zomato.com/bangalore/restaurants/desserts/",
        name: "Desserts",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY0XCJdfSJd",
        url: "https://www.zomato.com/bangalore/restaurants/juices/",
        name: "Juices",
      },
      {
        deeplink:
          "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
        url: "https://www.zomato.com/bangalore/restaurants/beverages/",
        name: "Beverages",
      },
    ],
    should_ban_ugc: false,
    costText: {
      text: "₹100 for one",
    },
  },
  order: {
    deliveryTime: "32 min",
    isServiceable: true,
    hasOnlineOrdering: true,
    actionInfo: {
      text: "Order Now",
      clickUrl: "/bangalore/sri-udupi-food-hub-majestic-bangalore/order",
    },
  },
  gold: [],
  takeaway: [],
  cardAction: {
    text: "",
    clickUrl: "/bangalore/sri-udupi-food-hub-majestic-bangalore/order",
    clickActionDeeplink: "",
  },
  distance: "1.7 km",
  isPromoted: false,
  promotedText: "",
  trackingData: [
    {
      table_name: "zsearch_events_log",
      payload:
        '{"search_id":"122510fb-aaa3-458b-a1ea-5217c6542f43","location_type":"delivery_cell","location_id":"4300399395616063488","page_type":"delivery","app_type":"new_web_consumer","section":"restaurants","entity_type":"restaurant","entity_id":"20355699","element_type":"listing","rank":1}',
      event_names: {
        tap: '{"action":"tap"}',
        impression: '{"action":"impression"}',
      },
    },
  ],
  allCTA: [],
  promoOffer: "",
  checkBulkOffers: true,
  bulkOffers: [
    {
      text: "20% OFF",
      color: {
        tint: "500",
        type: "blue",
      },
    },
  ],
  isDisabled: false,
  bottomContainers: [],
};

const Restaurantcard = ({ resData }) => (
  <div className="res-card">
    {console.log(resData)}
    <h2>{resData.info.name}</h2>
    <img src={resData.info.o2FeaturedImage.url} alt="" />
    <h3>Address : {resData.info.locality.address}</h3>
    
  </div>
);

const searchstyle = {
  padding: "10px",
};

const Body = () => (
  <>
    <div className="search" style={searchstyle}>
      Search
    </div>
    <div className="card-display">{<Restaurantcard resData={resObj} />}</div>
  </>
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
