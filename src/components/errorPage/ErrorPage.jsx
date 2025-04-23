import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-6xl max-w-7xl my-auto flex flex-col items-center">
      <p>Error 404 !</p>
      <p>Page Not Found :(</p>
    </div>
  );
};

export default ErrorPage;
