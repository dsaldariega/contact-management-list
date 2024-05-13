import React from "react";

export const PageNotFound: React.FC = () => {
  return (
    <div className="container">
      <div className="row fs-2">
        <i className="bi bi-exclamation-circle"></i>
      </div>
      <div className="row">Oops! Page Not Found</div>
      <div className="row">
        Sorry, the requested page is not found. Please check the URL again
      </div>
    </div>
  );
};
