import React, { useState } from "react";
import Product from "../product/Product.jsx";
import Sidebar from "../sidebar/Sidebar.jsx";
import { useContext } from "react";
import { AllContext } from "../../utilities/utilities.js";

const Products = () => {
  const { allGadgets } = useContext(AllContext);

  const [category, setCategory] = useState("all");

  const handleCategoryClick = (cat) => {
    setCategory(cat);
  };

  return (
    <div className=" flex flex-col items-center pb-30">
      <div className="pt-25 pb-15">
        <h1 className="text-3xl font-bold">Explore Cutting-Edge Gadgets</h1>
      </div>

      <div className="flex">
        <Sidebar handleCategoryClick={handleCategoryClick}></Sidebar>
        <div className="grid grid-cols-3 gap-5">
          {/* {
            category === 'all' && allGadgets.map(gadget => (
              <Product key={gadget.product_id} gadgetInfo={gadget}></Product>
            ))
          } */}

          {/*Repetitive method {
            category === 'Laptops' && allGadgets.map(gadget =>(category.includes(gadget.category)?
            (  <Product key={gadget.product_id} gadgetInfo={gadget}  />) :null
          ))
          } */}

          {/* shorter code and cleaner, cuz of this had to remove the initila map() */}
          {allGadgets.map((gadget) =>
            category === "all" || gadget.category === category ? (
              <Product key={gadget.product_id} gadgetInfo={gadget}></Product>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
