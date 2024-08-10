import { LOGO_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  console.log("check Header render");
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-56" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="px-4">Cart</li>
          <HeaderButton />
        </ul>
      </div>
    </div>
  );
};

const HeaderButton = () => {
  console.log("check button render");
  const [onClicked, setOnClicked] = useState(false);
  const buttonName = onClicked ? "Log out" : "Login";
  return (
    <button
      className="login-button"
      onClick={() => {
        setOnClicked(!onClicked);
      }}
    >
      {buttonName}
    </button>
  );
};

export default Header;
