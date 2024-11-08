import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  function handelGoToHome() {
    navigate("/");
  }

  return (
    <div className="w-full h-screen flex items-center justify-center gap-5 flex-col">
      <h1 className="font-bold text-4xl">404</h1>
      <p>Page Not Found</p>
      <button onClick={handelGoToHome} className="btn">
        Go To Home
      </button>
    </div>
  );
};

export default ErrorPage;
