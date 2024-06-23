import React from "react";

export const Button = ({props}) => {
  return (
    <div className="btnn2">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
        <span className="btnn2-text">
            {props}
        </span>
      </button>
    </div>
  );
};
