import React from "react";
import { useRouteError } from "react-router";

export const Error = () => {
  const err = useRouteError();
  console.dir("check err: " + JSON.stringify(err));
  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something went wrong!</h2>
      <h4>
        {err.status}: {err.statusText}
      </h4>
      <h4>{err.data}</h4>
    </div>
  );
};

export default Error;
