import React, { useState } from "react";
import AddToCart from "./AddToCart";
import RemoveFromCart from "./RemoveFromCart";

function PopularItem(props) {
  const [isDone, setIsDone] = useState(false);

  function checkIsDone() {
    setIsDone((prevValue) => {
      return !prevValue;
    });
  }

  return (
    <div className="card h-100">
      <img
        className="card-img-top"
        src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg"
        alt="..."
      />

      <div className="card-body p-4">
        <div className="text-center">
          <h5 className="fw-bolder">Popular Item</h5>
          <div className="d-flex justify-content-center small text-warning mb-2">
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
            <div className="bi-star-fill"></div>
          </div>
          <span className="text-muted text-decoration-line-through">
            Rs.150.00
          </span>
          <span> </span>Rs.120.00
        </div>
      </div>

      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          {isDone ? (
            <RemoveFromCart onRemove={props.onRemove} onCheck={checkIsDone} />
          ) : (
            <AddToCart onAdd={props.onAdd} onCheck={checkIsDone} />
          )}
        </div>
      </div>
    </div>
  );
}

export default PopularItem;
