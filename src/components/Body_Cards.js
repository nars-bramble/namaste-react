import { RestaurantCard } from "./RestaurantCard";
import Shimmer from "./Shimmer";

const listOfRestaurants = [];

const filteredRestaurants = [];

ShowCards = () => {
  console.log("filteredRestaurants: " + filteredRestaurants.length);
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="res-container">
      {filteredRestaurants.map((res) => (
        <RestaurantCard resData={res.info} key={res.info.id} />
      ))}
    </div>
  );
};

export default ShowCards;
