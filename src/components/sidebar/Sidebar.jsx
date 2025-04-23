import React from "react";

const Sidebar = ({ handleCategoryClick }) => {
  const categories = [
    "all",
    "Phones",
    "Smart Watches",
    "Accessories",
    "Laptops",
    "Tablets & Smart Displays",
    "Cameras"
  ];

  return (
    <div className="pr-5">
      <ul className="bg-[rgba(17,17,17,255)] rounded-xl pt-0.5 pb-0.5 px-2">
        {categories.map((cat,idx) => <li className=" text-white bg-[#0C0C0C] text-center rounded-2xl my-6 px-4 py-3 f hover:cursor-pointer hover:bg-white hover:text-black text-xl" key={idx} onClick={()=>handleCategoryClick(cat)}>{cat}</li> )}
      </ul>
    </div>
  );
};

export default Sidebar;
