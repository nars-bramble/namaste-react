import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RestaurantCard } from "./RestaurantCard";
import { restaurantsList } from "../utils/mockData";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState();
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  let serTxt;
  useEffect(() => {
    if (listOfRestaurants === undefined) fetchData();
    //fetchData();
  });

  fetchData = async () => {
    console.log("check enter");
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&page_type=DESKTOP_WEB_LISTING"
    );

    const jsData = await data.json();
    const rests =
      jsData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(rests);
    setFilteredRestaurants(rests);
  };

  const onlineStatus = useOnlineStatus();
  console.log("check status: " + onlineStatus);

  function setTopRated() {
    const newList = listOfRestaurants.filter((res) => {
      if (res.info.avgRating > 4.3) {
        return res;
      }
    });
    setFilteredRestaurants(newList);
  }

  function filterRestaurants(filterText) {
    console.log("List of restaurants b: " + listOfRestaurants.length);
    const newList = listOfRestaurants.filter((res) => {
      let nameLC = res.info.name.toLowerCase();
      console.log("Name: " + nameLC);
      console.log("filterText: " + filterText);
      if (nameLC.includes(filterText.toLowerCase())) {
        return res;
      }
    });
    setFilteredRestaurants(newList);
  }

  ShowCards = () => {
    return filteredRestaurants.length === 0 ? (
      <Shimmer />
    ) : (
      <div className="flex wrap rounded-lg">
        {filteredRestaurants.map((res) => (
          <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
            <RestaurantCard resData={res.info} key={res.info.id} />
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div className="body">
      <div className="filter">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              filterRestaurants(e.target.value);
            }}
          />
          <button className="px-4 py-4 bg-green-100 m-4" onClick={() => {}}>
            Search
          </button>
        </div>
        <button className="filter-btn" onClick={setTopRated}>
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants(restaurantsList);
          }}
        >
          Show All
        </button>
      </div>
      <div className="">
        <ShowCards />
      </div>
    </div>
  );
};

export default Body;
