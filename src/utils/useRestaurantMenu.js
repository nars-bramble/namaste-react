import React, { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
  const [restaurantData, setResData] = useState();

  useEffect(() => {
    if (restaurantData === undefined) fetchMenu();
  });

  const fetchMenu = async () => {
    console.log("enter: " + resId);
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=" +
        resId
    );
    const jsData = await data.json();
    console.log("check jsDat: " + JSON.stringify(jsData));
    setResData(jsData);
  };

  console.log("check jsData 2: " + JSON.stringify(restaurantData));
  return restaurantData;
};

export default useRestaurantMenu;
