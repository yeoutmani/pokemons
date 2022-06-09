import React from "react";

import "./Item.scss";

const Item = ({ title, imageUrl, size }) => {
  console.log(imageUrl);
  return (
    <div className={`${size} item`} onClick={() => console.log("click")}>
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
      </div>
    </div>
  );
};

export default Item;
