import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurantData = useRestaurantMenu(resId);
  console.log("check restaurantData: " + JSON.stringify(restaurantData));

  const resInfo = restaurantData?.data?.cards[2]?.card.card.info;
  const items =
    restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap.REGULAR.cards[1]
      .card.card.carousel;

  return resInfo != undefined ? (
    <div className="menu">
      <h1>{resInfo.name}</h1>
      <h2>{resInfo.costForTwoMessage}</h2>
      <h2>{resInfo.cuisines.join(", ")}</h2>
      <ul>
        {items.map((item) => {
          return <li key={item.title}>{item.title}</li>;
        })}
      </ul>
    </div>
  ) : (
    <div>Enter</div>
  );
  //return <div>Enter</div>;
};

export default RestaurantMenu;
