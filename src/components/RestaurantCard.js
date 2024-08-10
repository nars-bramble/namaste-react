import { CON_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log(resData);
  const { name, cuisines, costForTwo, avgRating, cloudinaryImageId, sla } =
    resData;
  return (
    <div className="m-4 p-4 w-[200px] bg-gray-100">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CON_URL + cloudinaryImageId}
      ></img>
      <h3>{name}</h3>
      <div className="res-details">
        <ul>
          <li>{avgRating}</li>
          <li>{sla.deliveryTime} mintures</li>
        </ul>
      </div>
      {/* <h4>{avgRating} stars</h4>
      <h4>{sla.deliveryTime} mintures</h4> */}
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export { RestaurantCard };
