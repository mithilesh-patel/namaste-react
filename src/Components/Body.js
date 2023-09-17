import { SEARCH_STYLE } from "../utils/constant";
import  MOCK from "../utils/mockData";
import Restaurantcard from "./Restaurantcard";
import { useState } from "react";


const Body = () => {

    const [resArr, setResArr]= useState(MOCK);
  
    return (
    <div className="body">
      <div className="search" style={SEARCH_STYLE}>
        <form action="#" method="post">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search Restaurants"
          />
          <input type="submit" value="Search" id="searchbtn" />
        </form>
        <button className="sortBtn"
          onClick={() => {
            const filteredList = resArr.filter((res) => parseInt(res.info.ratingNew.ratings.DELIVERY.rating) >= 4);
            setResArr(filteredList);
          }}
        >
          Sort
        </button>
      </div>
      <div className="card-display">
        {resArr.map((restaurant) => (
          <Restaurantcard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
    );
  }
  

  export default Body;