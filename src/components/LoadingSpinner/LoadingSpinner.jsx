import React from "react";
import { Circles } from "react-loader-spinner";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="loadingContainer">
      <Circles height="80" width="80" color="#4fa94d" ariaLabel="circles-loading" />
      <span className="loadingText">QuickSell</span>
    </div>
  );
};

export default LoadingSpinner;