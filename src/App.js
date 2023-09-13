import React from "react";
import ReactDOM from "react-dom/client";
import logo from "../assets/images/logo.png";
import Title from "./Components/Title";

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

const resArr = [
  {
    "type": "restaurant",
    "info": {
      "resId": 19209813,
      "name": "Paakashala",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/3/19209813/98662a5e0bbd80f8735b5bb48ebbfc8d_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/3/19209813/98662a5e0bbd80f8735b5bb48ebbfc8d_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.2",
        "rating_text": "4.2",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "2,653",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "4.2",
            "reviewCount": "303",
            "reviewTextSmall": "303 Reviews",
            "subtext": "303 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "4.2",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            }
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.1",
            "reviewCount": "2,350",
            "reviewTextSmall": "2,350 Reviews",
            "subtext": "2,350 Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.1",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹250 for two"
      },
      "cfo": {
        "text": "₹150 for one"
      },
      "locality": {
        "name": "MG Road, Bangalore",
        "address": "46/10, MG Road, Bangalore",
        "localityUrl": "bangalore/mg-road-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/south-indian/",
          "name": "South Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/biryani/",
          "name": "Biryani"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/chinese/",
          "name": "Chinese"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/street-food/",
          "name": "Street Food"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/sandwich/",
          "name": "Sandwich"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/ice-cream/",
          "name": "Ice Cream"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/beverages/",
          "name": "Beverages"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹150 for one"
      }
    },
    "order": {
      "deliveryTime": "23 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/bangalore/paakashala-mg-road-bangalore/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/bangalore/paakashala-mg-road-bangalore/order",
      "clickActionDeeplink": ""
    },
    "distance": "1.5 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"b04172da-7656-4132-a499-559cdbbdd7e2\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19209813\",\"element_type\":\"listing\",\"rank\":1}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "50% OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": [
      {
        "image": {
          "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          "aspect_ratio": 2.66666666667
        },
        "text": "Follows all Max Safety measures to ensure your food is safe"
      }
    ]
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 18088641,
      "name": "Burger King",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/5/61555/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/5/61555/8c49ba335683507ba6ddee2dc84966e8_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.0",
        "rating_text": "4.0",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "12.5K",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "3.8",
            "reviewCount": "750",
            "reviewTextSmall": "750 Reviews",
            "subtext": "750 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "3.8",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "600"
            }
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.1",
            "reviewCount": "11.7K",
            "reviewTextSmall": "11.7K Reviews",
            "subtext": "11.7K Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.1",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹400 for two"
      },
      "cfo": {
        "text": "₹150 for one"
      },
      "locality": {
        "name": "Commercial Street, Bangalore",
        "address": "111/4, Asha Gallery, Commercial Street, Bangalore",
        "localityUrl": "bangalore/commercial-street-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/burger/",
          "name": "Burger"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/fast-food/",
          "name": "Fast Food"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/desserts/",
          "name": "Desserts"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/beverages/",
          "name": "Beverages"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹150 for one"
      }
    },
    "order": {
      "deliveryTime": "24 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/bangalore/burger-king-commercial-street/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/bangalore/burger-king-commercial-street/order",
      "clickActionDeeplink": ""
    },
    "distance": "1.8 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"b04172da-7656-4132-a499-559cdbbdd7e2\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18088641\",\"element_type\":\"listing\",\"rank\":2}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "60% OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": [
      {
        "image": {
          "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          "aspect_ratio": 2.66666666667
        },
        "text": "Follows all Max Safety measures to ensure your food is safe"
      }
    ]
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 54264,
      "name": "Vijayalakshmi Veg",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/9/54259/2220a26c3db9c45bd2da2765d4d09b33_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/9/54259/2220a26c3db9c45bd2da2765d4d09b33_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.0",
        "rating_text": "4.0",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "17.1K",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "4.0",
            "reviewCount": "101",
            "reviewTextSmall": "101 Reviews",
            "subtext": "101 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "4.0",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            }
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.0",
            "reviewCount": "17K",
            "reviewTextSmall": "17K Reviews",
            "subtext": "17K Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.0",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹300 for two"
      },
      "cfo": {
        "text": "₹150 for one"
      },
      "locality": {
        "name": "Frazer Town, Bangalore",
        "address": "112, MM Road, Frazer Town, Bangalore",
        "localityUrl": "bangalore/frazer-town-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/south-indian/",
          "name": "South Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/chinese/",
          "name": "Chinese"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTI4XCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/sichuan/",
          "name": "Sichuan"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹150 for one"
      }
    },
    "order": {
      "deliveryTime": "32 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/bangalore/vijayalakshmi-veg-frazer-town-bangalore/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/bangalore/vijayalakshmi-veg-frazer-town-bangalore/order",
      "clickActionDeeplink": ""
    },
    "distance": "3.8 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"b04172da-7656-4132-a499-559cdbbdd7e2\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"54264\",\"element_type\":\"listing\",\"rank\":3}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "20% OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": [
      {
        "image": {
          "url": "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          "aspect_ratio": 2.0625
        },
        "text": "Restaurant partner follows WHO protocol"
      }
    ]
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 19160541,
      "name": "Brahmins' Thatte Idli",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/9/60809/d732afa04ceb91ce8b70532b4a564122_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/9/60809/d732afa04ceb91ce8b70532b4a564122_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.1",
        "rating_text": "4.1",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "2,674",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "3.9",
            "reviewCount": "4",
            "reviewTextSmall": "4 Reviews",
            "subtext": "4 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "3.9",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "600"
            }
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.2",
            "reviewCount": "2,670",
            "reviewTextSmall": "2,670 Reviews",
            "subtext": "2,670 Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.2",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹150 for two"
      },
      "cfo": {
        "text": "₹150 for one"
      },
      "locality": {
        "name": "Malleshwaram, Bangalore",
        "address": "15, 2nd Main Road, Vyalikaval, Malleshwaram, Bangalore",
        "localityUrl": "bangalore/malleshwaram-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/south-indian/",
          "name": "South Indian"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹150 for one"
      }
    },
    "order": {
      "deliveryTime": "30 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/bangalore/brahmins-thatte-idli-1-malleshwaram-bangalore/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/bangalore/brahmins-thatte-idli-1-malleshwaram-bangalore/order",
      "clickActionDeeplink": ""
    },
    "distance": "4 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"b04172da-7656-4132-a499-559cdbbdd7e2\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19160541\",\"element_type\":\"listing\",\"rank\":4}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "20% OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": [
      {
        "image": {
          "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          "aspect_ratio": 2.66666666667
        },
        "text": "Follows all Max Safety measures to ensure your food is safe"
      }
    ]
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 56024,
      "name": "McDonald's",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/4/50674/81e0a7ce3fd974da8f088084ccfa3154_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/4/50674/81e0a7ce3fd974da8f088084ccfa3154_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "3.6",
        "rating_text": "3.6",
        "rating_subtitle": "Good",
        "rating_color": "9ACD32",
        "votes": "18.8K",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "3.3",
            "reviewCount": "411",
            "reviewTextSmall": "411 Reviews",
            "subtext": "411 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "3.3",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "500"
            }
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "3.9",
            "reviewCount": "18.4K",
            "reviewTextSmall": "18.4K Reviews",
            "subtext": "18.4K Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "3.9",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "600"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹400 for two"
      },
      "cfo": {
        "text": "₹150 for one"
      },
      "locality": {
        "name": "Hosur Road, Bangalore",
        "address": "1-1-1 Ground Floor, Koramangala Industrial Layout, Koramangala, Hosur Road, Bangalore",
        "localityUrl": "bangalore/hosur-road-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTY4XCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/burger/",
          "name": "Burger"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/fast-food/",
          "name": "Fast Food"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/desserts/",
          "name": "Desserts"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/beverages/",
          "name": "Beverages"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹150 for one"
      }
    },
    "order": {
      "deliveryTime": "32 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/bangalore/mcdonalds-hosur-road-bangalore/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/bangalore/mcdonalds-hosur-road-bangalore/order",
      "clickActionDeeplink": ""
    },
    "distance": "4.7 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"b04172da-7656-4132-a499-559cdbbdd7e2\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"56024\",\"element_type\":\"listing\",\"rank\":5}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "Free Fries (M)",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": [
      {
        "image": {
          "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          "aspect_ratio": 2.66666666667
        },
        "text": "Follows all Max Safety measures to ensure your food is safe"
      }
    ]
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 60453,
      "name": "FreshMenu",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/9/59179/d500edec7041e0150a1212c8dcc24cfa_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/9/59179/d500edec7041e0150a1212c8dcc24cfa_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "3.9",
        "rating_text": "3.9",
        "rating_subtitle": "Good",
        "rating_color": "9ACD32",
        "votes": "21.4K",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "",
            "reviewCount": "0",
            "reviewTextSmall": "0 Reviews",
            "subtext": "Does not offer Dining",
            "color": "",
            "ratingV2": "-",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Reviews",
            "bgColorV2": {
              "type": "grey",
              "tint": "500"
            }
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "3.9",
            "reviewCount": "21.4K",
            "reviewTextSmall": "21.4K Reviews",
            "subtext": "21.4K Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "3.9",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "600"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹500 for two"
      },
      "cfo": {
        "text": "₹150 for one"
      },
      "locality": {
        "name": "Richmond Road, Bangalore",
        "address": "2, 4th Floor, Agaabdulla Street, Richmond Town, Richmond Road, Bangalore",
        "localityUrl": "bangalore/richmond-road-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzVcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/continental/",
          "name": "Continental"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjc4XCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/oriental/",
          "name": "Oriental"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiM1wiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/asian/",
          "name": "Asian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTQzXCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/health-food/",
          "name": "Healthy Food"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMzA0XCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/sandwich/",
          "name": "Sandwich"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/chinese/",
          "name": "Chinese"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/desserts/",
          "name": "Desserts"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹150 for one"
      }
    },
    "order": {
      "deliveryTime": "29 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/bangalore/freshmenu-richmond-road/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/bangalore/freshmenu-richmond-road/order",
      "clickActionDeeplink": ""
    },
    "distance": "1.5 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"b04172da-7656-4132-a499-559cdbbdd7e2\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"60453\",\"element_type\":\"listing\",\"rank\":6}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "Everything @ ₹149 only",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": [
      {
        "image": {
          "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          "aspect_ratio": 2.66666666667
        },
        "text": "Follows all Max Safety measures to ensure your food is safe"
      }
    ]
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 54223,
      "name": "Thalassery Restaurant",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/8/53088/02c120045aa412d79229dbed37b1d8be_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/8/53088/02c120045aa412d79229dbed37b1d8be_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.0",
        "rating_text": "4.0",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "11K",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "3.9",
            "reviewCount": "458",
            "reviewTextSmall": "458 Reviews",
            "subtext": "458 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "3.9",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "600"
            }
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.0",
            "reviewCount": "10.6K",
            "reviewTextSmall": "10.6K Reviews",
            "subtext": "10.6K Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.0",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹850 for two"
      },
      "cfo": {
        "text": "₹150 for one"
      },
      "locality": {
        "name": "Kammanahalli, Bangalore",
        "address": "20/1, Vishnu Priya, Nehru Road, Yadava Layout, Arvind Nagar, Kammanahalli, Bangalore",
        "localityUrl": "bangalore/kammanahalli-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNjJcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/kerala/",
          "name": "Kerala"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/chinese/",
          "name": "Chinese"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTc4XCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/kebab/",
          "name": "Kebab"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiN1wiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/biryani/",
          "name": "Biryani"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/desserts/",
          "name": "Desserts"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/beverages/",
          "name": "Beverages"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹150 for one"
      }
    },
    "order": {
      "deliveryTime": "40 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/bangalore/thalassery-restaurant-kammanahalli/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/bangalore/thalassery-restaurant-kammanahalli/order",
      "clickActionDeeplink": ""
    },
    "distance": "6.3 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"b04172da-7656-4132-a499-559cdbbdd7e2\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"54223\",\"element_type\":\"listing\",\"rank\":7}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "40% OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": [
      {
        "image": {
          "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          "aspect_ratio": 2.66666666667
        },
        "text": "Follows all Max Safety measures to ensure your food is safe"
      }
    ]
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 59727,
      "name": "Kaapi Katte",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/7/59727/7e0861efc40ab8c2296852ff59037bb3_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/7/59727/7e0861efc40ab8c2296852ff59037bb3_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "3.9",
        "rating_text": "3.9",
        "rating_subtitle": "Good",
        "rating_color": "9ACD32",
        "votes": "211",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "3.8",
            "reviewCount": "3",
            "reviewTextSmall": "3 Reviews",
            "subtext": "3 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "3.8",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "600"
            }
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.0",
            "reviewCount": "208",
            "reviewTextSmall": "208 Reviews",
            "subtext": "208 Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.0",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹100 for two"
      },
      "cfo": {
        "text": "₹150 for one"
      },
      "locality": {
        "name": "Seshadripuram, Bangalore",
        "address": "186/7, 19, Gubbi Veeranna Road, Seshadripuram, Bangalore",
        "localityUrl": "bangalore/seshadripuram-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/south-indian/",
          "name": "South Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/beverages/",
          "name": "Beverages"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹150 for one"
      }
    },
    "order": {
      "deliveryTime": "25 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/bangalore/kaapi-katte-2-seshadripuram-bangalore/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/bangalore/kaapi-katte-2-seshadripuram-bangalore/order",
      "clickActionDeeplink": ""
    },
    "distance": "3.1 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"b04172da-7656-4132-a499-559cdbbdd7e2\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"59727\",\"element_type\":\"listing\",\"rank\":8}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [],
    "isDisabled": false,
    "bottomContainers": []
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 50628,
      "name": "Madurai Idly Shop",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/8/50628/f72101d8dfd889fe9d5d66b024f57147_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/8/50628/f72101d8dfd889fe9d5d66b024f57147_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "3.7",
        "rating_text": "3.7",
        "rating_subtitle": "Good",
        "rating_color": "9ACD32",
        "votes": "4,444",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "3.4",
            "reviewCount": "578",
            "reviewTextSmall": "578 Reviews",
            "subtext": "578 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "3.4",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "500"
            }
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.0",
            "reviewCount": "3,866",
            "reviewTextSmall": "3,866 Reviews",
            "subtext": "3,866 Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.0",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹300 for two"
      },
      "cfo": {
        "text": "₹150 for one"
      },
      "locality": {
        "name": "Koramangala 7th Block, Bangalore",
        "address": "507, Ko 338-419, KHB Colony, 1st B Main Road, Koramangala 7th Block, Bangalore",
        "localityUrl": "bangalore/koramangala-7th-block-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/south-indian/",
          "name": "South Indian"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹150 for one"
      }
    },
    "order": {
      "deliveryTime": "40 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/bangalore/madurai-idly-shop-1-koramangala-7th-block-bangalore/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/bangalore/madurai-idly-shop-1-koramangala-7th-block-bangalore/order",
      "clickActionDeeplink": ""
    },
    "distance": "4.5 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"b04172da-7656-4132-a499-559cdbbdd7e2\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"50628\",\"element_type\":\"listing\",\"rank\":9}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "₹150 OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": [
      {
        "image": {
          "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          "aspect_ratio": 2.66666666667
        },
        "text": "Follows all Max Safety measures to ensure your food is safe"
      }
    ]
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 19122738,
      "name": "New Udupi Grand",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/8/19122738/f4982bf2b6976b8da0f2dcc89ead0e10_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/8/19122738/f4982bf2b6976b8da0f2dcc89ead0e10_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "3.7",
        "rating_text": "3.7",
        "rating_subtitle": "Good",
        "rating_color": "9ACD32",
        "votes": "1,082",
        "subtext": "REVIEW",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "3.2",
            "reviewCount": "13",
            "reviewTextSmall": "13 Reviews",
            "subtext": "13 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "3.2",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "500"
            }
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.1",
            "reviewCount": "1,069",
            "reviewTextSmall": "1,069 Reviews",
            "subtext": "1,069 Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.1",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹600 for two"
      },
      "cfo": {
        "text": "₹150 for one"
      },
      "locality": {
        "name": "Koramangala 8th Block, Bangalore",
        "address": "10, 2nd Main Road, Adugodi, Koramangala 8th Block, Bangalore",
        "localityUrl": "bangalore/koramangala-8th-block-restaurants"
      },
      "timing": {
        "text": "Temporarily closed for dining, will be back soon!",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/south-indian/",
          "name": "South Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/street-food/",
          "name": "Street Food"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/beverages/",
          "name": "Beverages"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/chinese/",
          "name": "Chinese"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/shake/",
          "name": "Shake"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹150 for one"
      }
    },
    "order": {
      "deliveryTime": "25 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/bangalore/new-udupi-grand-1-koramangala-8th-block-bangalore/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/bangalore/new-udupi-grand-1-koramangala-8th-block-bangalore/order",
      "clickActionDeeplink": ""
    },
    "distance": "3.4 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"b04172da-7656-4132-a499-559cdbbdd7e2\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"19122738\",\"element_type\":\"listing\",\"rank\":10}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "30% OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": [
      {
        "image": {
          "url": "https://b.zmtcdn.com/data/o2_assets/695598f38d29d0e5d3f8ffe57cfdb94c1613145422.png",
          "aspect_ratio": 2.0625
        },
        "text": "Restaurant partner follows WHO protocol"
      }
    ]
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 18724780,
      "name": "Chai Point",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/0/52860/6750c2fe1f25a444991eee4d7afd5dd9_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/0/52860/6750c2fe1f25a444991eee4d7afd5dd9_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.1",
        "rating_text": "4.1",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "2,450",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "4.1",
            "reviewCount": "287",
            "reviewTextSmall": "287 Reviews",
            "subtext": "287 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "4.1",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            }
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.1",
            "reviewCount": "2,163",
            "reviewTextSmall": "2,163 Reviews",
            "subtext": "2,163 Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.1",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹250 for two"
      },
      "cfo": {
        "text": "₹150 for one"
      },
      "locality": {
        "name": "Church Street, Bangalore",
        "address": "Metro Station, Church Street, Bangalore",
        "localityUrl": "bangalore/church-street-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTYzXCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/tea/",
          "name": "Tea"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/beverages/",
          "name": "Beverages"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA2NlwiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/shake/",
          "name": "Shake"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNDBcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/fast-food/",
          "name": "Fast Food"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAyM1wiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/rolls/",
          "name": "Rolls"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAwXCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/desserts/",
          "name": "Desserts"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTA0MFwiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/coffee/",
          "name": "Coffee"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹150 for one"
      }
    },
    "order": {
      "deliveryTime": "27 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/bangalore/chai-point-church-street-bangalore/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/bangalore/chai-point-church-street-bangalore/order",
      "clickActionDeeplink": ""
    },
    "distance": "1.4 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"b04172da-7656-4132-a499-559cdbbdd7e2\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"18724780\",\"element_type\":\"listing\",\"rank\":11}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "₹175 OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": [
      {
        "image": {
          "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          "aspect_ratio": 2.66666666667
        },
        "text": "Follows all Max Safety measures to ensure your food is safe"
      }
    ]
  },
  {
    "type": "restaurant",
    "info": {
      "resId": 60760,
      "name": "Priyadarshini Grand",
      "image": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/0/60760/3579c898a8049ba8d6286e1d55a04187_o2_featured_v2.jpg"
      },
      "o2FeaturedImage": {
        "url": "https://b.zmtcdn.com/data/pictures/chains/0/60760/3579c898a8049ba8d6286e1d55a04187_o2_featured_v2.jpg"
      },
      "rating": {
        "has_fake_reviews": 0,
        "aggregate_rating": "4.2",
        "rating_text": "4.2",
        "rating_subtitle": "Very Good",
        "rating_color": "5BA829",
        "votes": "33.6K",
        "subtext": "REVIEWS",
        "is_new": false
      },
      "ratingNew": {
        "newlyOpenedObj": null,
        "suspiciousReviewObj": null,
        "ratings": {
          "DINING": {
            "rating_type": "DINING",
            "rating": "4.0",
            "reviewCount": "638",
            "reviewTextSmall": "638 Reviews",
            "subtext": "638 Dining Reviews",
            "color": "#1C1C1C",
            "ratingV2": "4.0",
            "subtitle": "DINING",
            "sideSubTitle": "Dining Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            }
          },
          "DELIVERY": {
            "rating_type": "DELIVERY",
            "rating": "4.4",
            "reviewCount": "33K",
            "reviewTextSmall": "33K Reviews",
            "subtext": "33K Delivery Reviews",
            "color": "#E23744",
            "ratingV2": "4.4",
            "subtitle": "DELIVERY",
            "sideSubTitle": "Delivery Reviews",
            "bgColorV2": {
              "type": "green",
              "tint": "700"
            },
            "newOnDelivery": false
          }
        }
      },
      "cft": {
        "text": "₹300 for two"
      },
      "cfo": {
        "text": "₹150 for one"
      },
      "locality": {
        "name": "Basaveshwara Nagar, Bangalore",
        "address": "315, 3rd Stage, 4th Block, Siddhaiah Puranika Road, Basaveshwara Nagar, Bangalore",
        "localityUrl": "bangalore/basaveshwara-nagar-restaurants"
      },
      "timing": {
        "text": "",
        "color": ""
      },
      "cuisine": [
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiODVcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/south-indian/",
          "name": "South Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiNTBcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/north-indian/",
          "name": "North Indian"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjVcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/chinese/",
          "name": "Chinese"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiOTBcIl19Il0%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/street-food/",
          "name": "Street Food"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMTAxNVwiXX0iXQ%3D%3D",
          "url": "https://www.zomato.com/bangalore/restaurants/mithai/",
          "name": "Mithai"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjcwXCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/beverages/",
          "name": "Beverages"
        },
        {
          "deeplink": "zomato://search?deeplink_filters=WyJ7XCJjb250ZXh0XCI6XCJhbGxcIn0iLCJ7XCJjdWlzaW5lX2lkXCI6W1wiMjMzXCJdfSJd",
          "url": "https://www.zomato.com/bangalore/restaurants/ice-cream/",
          "name": "Ice Cream"
        }
      ],
      "should_ban_ugc": false,
      "costText": {
        "text": "₹150 for one"
      }
    },
    "order": {
      "deliveryTime": "43 min",
      "isServiceable": true,
      "hasOnlineOrdering": true,
      "actionInfo": {
        "text": "Order Now",
        "clickUrl": "/bangalore/priyadarshini-grand-basaveshwara-nagar/order"
      }
    },
    "gold": [],
    "takeaway": [],
    "cardAction": {
      "text": "",
      "clickUrl": "/bangalore/priyadarshini-grand-basaveshwara-nagar/order",
      "clickActionDeeplink": ""
    },
    "distance": "6.5 km",
    "isPromoted": false,
    "promotedText": "",
    "trackingData": [
      {
        "table_name": "zsearch_events_log",
        "payload": "{\"search_id\":\"b04172da-7656-4132-a499-559cdbbdd7e2\",\"location_type\":\"delivery_cell\",\"location_id\":\"4300399395616063488\",\"page_type\":\"delivery\",\"app_type\":\"new_web_consumer\",\"section\":\"restaurants\",\"entity_type\":\"restaurant\",\"entity_id\":\"60760\",\"element_type\":\"listing\",\"rank\":12}",
        "event_names": {
          "tap": "{\"action\":\"tap\"}",
          "impression": "{\"action\":\"impression\"}"
        }
      }
    ],
    "allCTA": [],
    "promoOffer": "",
    "checkBulkOffers": true,
    "bulkOffers": [
      {
        "text": "₹50 OFF",
        "color": {
          "tint": "500",
          "type": "blue"
        }
      }
    ],
    "isDisabled": false,
    "bottomContainers": [
      {
        "image": {
          "url": "https://b.zmtcdn.com/data/o2_assets/0b07ef18234c6fdf9365ad1c274ae0631612687510.png",
          "aspect_ratio": 2.66666666667
        },
        "text": "Follows all Max Safety measures to ensure your food is safe"
      }
    ]
  }
]

const Restaurantcard = (props) =>{
const {resData} = props;  
const {name}= resData?.info;
const {url}= resData?.info?.o2FeaturedImage;
const {address}= resData?.info?.locality;

 return (
  <div className="res-card">

    <h2>{name}</h2>
    <img src={url} alt="" />
    <h3>Address : {address}</h3>
    
  </div>
)};

const searchstyle = {
  padding: "10px",
};

const Body = () => (
  <div className="body">
    <div className="search" style={searchstyle}>
      <form action="#" method="post">
      <input type="text" name="search" id="search" placeholder="Search Restaurants" />
        <input type="submit" value="Search" id="searchbtn" />
      </form>
    </div>
    <div className="card-display">

      {
        resArr.map((restaurant)=>(
          <Restaurantcard key={restaurant.info.resId} resData={restaurant} />
        ))
      }
    </div>
  </div>
);

const Footer = () => (
  <div className="footer">
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
