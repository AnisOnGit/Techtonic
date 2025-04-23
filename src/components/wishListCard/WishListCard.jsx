import { useContext } from "react";
import { AllContext } from "../../utilities/utilities";
import { toast } from "react-toastify";
import { X } from "lucide-react";
import { ShoppingCart } from "lucide-react";

const WishListCard = ({ oneWishListInfo }) => {
  const {
    handleDelFrmWishList,
    gadgetsInCart,
    setGadgetsInCart,
    totalCost,
    setTotalCost,
  } = useContext(AllContext);

  const {
    product_id,
    product_image,
    product_title,
    price,
    // availability,
    description,
    // specification,
    // rating,
  } = oneWishListInfo;

  const handleAddToCart = () => {
    let isAlrInCart = false;

    for (let i = 0; i < gadgetsInCart.length; i++) {
      if (gadgetsInCart[i].product_id === oneWishListInfo.product_id) {
        isAlrInCart = true;
        break;
      }
    }

    if (!isAlrInCart) {
      setGadgetsInCart([...gadgetsInCart, oneWishListInfo]);
      toast.success("Successfully added to Cart");
      setTotalCost(totalCost + price);
    } else {
      // console.log("this already exists in your cart");
      toast.warn("Item already exists in your cart");
    }

    // setGadgetsInCart([...gadgetsInCart,selectedDetails]);
  };

  return (
    <div className="card max-w-7xl lg:w-7xl max-h-48 card-side  p-4 bg-[rgba(234,234,234,255)] shadow-sm my-10 items-center gap-5 border-b-4 border-gray-800">
      <div className="flex items-center lg:w-[200px] lg:h-[124px] w-full h-full rounded-xl ">
        <img
          src={product_image}
          alt={product_title}
          className="w-full rounded-xl h-full object-cover"
        />
      </div>

      <div className="flex flex-auto flex-col lg:h-[124px] gap-4 justify-center ">
        <div className="flex justify-between ">
          <p className="card-title text-black font-bold">
            {product_title}
          </p>
          <X
            onClick={() => handleDelFrmWishList(product_id)}
            className="border-1 border-black text-black rounded-3xl p-0.5 hover:cursor-pointer hover:text-white hover:bg-black"
          ></X>
        </div>

        <p className=" text-gray-800">{description}</p>

        <div className="flex justify-start gap-5">
          <h4 className=" font-bold text-black">Price: $ {price}</h4>

          <ShoppingCart
            className=" p-0.5 text-black hover:bg-black hover:text-white hover:rounded-xl hover:cursor-pointer"
            onClick={handleAddToCart}
          ></ShoppingCart>
        </div>
      </div>
    </div>
  );
};

export default WishListCard;
