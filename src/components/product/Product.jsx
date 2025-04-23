import React from "react";
import { Link } from "react-router-dom";

const Product = ({ gadgetInfo }) => {
  const { product_id, product_image, product_title, price } = gadgetInfo;

  return (
    <div className="card max-w-80 lg:w-80 rounded-2xl bg-[rgba(17,17,17,255)] shadow-sm">
      <figure className="px-5 pt-5">
        <img
          src={product_image}
          alt={product_title}
          className="w-[280px] h-[210px] object-cover rounded-xl max-w-full"
        />
      </figure>

      <div className="card-body">
        <h2 className="card-title">{product_title}</h2>
        <p>$ {price}</p>
        <div className="card-actions ">
          <Link className="border-1 rounded-2xl border-white px-3 py-2 hover:cursor-pointer hover:bg-white hover:text-black hover:font-bold" to={`/detail/${product_id}`}>
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;

// image
// device Name
// Price
