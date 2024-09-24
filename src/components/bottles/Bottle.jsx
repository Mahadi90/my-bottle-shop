import React from "react";

const Bottle = ({bottle , handleAddcart}) => {
    const {name, image, description, price, id} = bottle;
  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img
        className="h-96 w-[100%]"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
        <p>Price : ${price}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleAddcart(id)} className="btn btn-primary">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Bottle;
