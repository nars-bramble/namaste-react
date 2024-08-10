import React, { useEffect, useState } from "react";

const useOnlineStatus = (resId) => {
  const [onlineStatus, setOnlineStatus] = useState(false);

  useEffect(() => {
    console.log("check useOnlineStatus enter");
    window.addEventListener("offline", () => {
      setOnlineStatus(false);
    });

    window.addEventListener("online", () => {
      console.log("check enterrrr");
      setOnlineStatus(true);
    });
  });
  return onlineStatus;
};

export default useOnlineStatus;
