import { useContext, useState } from "react";
import { AllContext } from "../../utilities/utilities";
import CartCard from "../cartCard/CartCard";
import WishListCard from "../wishListCard/WishListCard";
import { ArrowUpDown } from "lucide-react";

const DashTabs = () => {
  const {
    gadgetsInCart,
    setGadgetsInCart,
    wishListItems,
    totalCost,
    setShowModal,
  } = useContext(AllContext);

  const [isSortDescend, setSortDescend] = useState(false);

  const handleSortByPrice = () => {
    if (isSortDescend === false) {
      const sortedGadgetsInCart = [...gadgetsInCart].sort((a, b) =>
        a.price < b.price ? 1 : -1
      );
      setGadgetsInCart(sortedGadgetsInCart);
      setSortDescend(true);
    } else {
      setSortDescend(false);
      const sortedGadgetsInCart = [...gadgetsInCart].sort((a, b) =>
        a.price > b.price ? 1 : -1
      );
      setGadgetsInCart(sortedGadgetsInCart);
    }
  };

  return (
    <div>
      {/* Cart Tab */}
      <div className="tabs tabs-border bg-white justify-center">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab border-1 hover:bg-black hover:!text-[white] !text-[black] border-black my-8 mx-2 font-bold text-2xl"
          aria-label="Cart"
          defaultChecked
        />

        <div className="tab-content border-base-300 bg-black p-10">
          <div className="flex justify-between">
            <h1 className="font-bold text-xl">Cart</h1>

            <div className="flex lg:gap-8 items-center">
              <h1 className="font-bold text-xl">Total Cost : $ {totalCost}</h1>
              <button
                onClick={handleSortByPrice}
                className="flex justify-center gap-3 lg:w-[160px] rounded-2xl py-1   border-1 items-center border-white hover:cursor-pointer hover:bg-white hover:text-black"
              >
                <p className="font-bold">
                  Sort By Price
                </p>
                <ArrowUpDown className=" h-5"></ArrowUpDown>
              </button>
              {totalCost > 0 ? (
                <button
                  onClick={() => setShowModal(true)}
                  className="lg:w-[100px] font-bold rounded-2xl py-1 border-1 items-center border-white hover:cursor-pointer hover:bg-white hover:text-black"
                >
                  Purchase
                </button>
              ) : (
                <button className="hidden ">Purchase</button>
              )}
            </div>
          </div>
          
          <div className="w-full flex flex-col items-center">
            {gadgetsInCart.map((oneCartInfo, idx) => (
              <CartCard key={idx} oneCartInfo={oneCartInfo}></CartCard>
            ))}
          </div>
        </div>

        {/* wish list Tab */}
        <input
          type="radio"
          name="my_tabs_2"
          className="tab border-1 !text-[black] border-black hover:bg-black hover:!text-[white] my-8 mx-2 font-bold text-2xl"
          aria-label="Wishlist"
        />

        <div className="tab-content border-base-300  bg-black p-10">
          <h1 className="font-bold text-xl">Wish List</h1>
          <div className="w-full flex flex-col items-center">
            {wishListItems.map((oneWishListInfo, idx) => (
              <WishListCard
                key={idx}
                oneWishListInfo={oneWishListInfo}
              ></WishListCard>
            ))}
          </div>
          {/* <h1>Items in wish List:{wishListItems.length}</h1> */}
        </div>
      </div>
    </div>
  );
};

export default DashTabs;
