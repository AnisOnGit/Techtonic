import { useLoaderData, useParams } from "react-router-dom";
import { AllContext } from "../../utilities/utilities";
import { useContext } from "react";
import { toast } from "react-toastify";
import { Rating } from "@smastrom/react-rating";
import { Heart } from "lucide-react";


const ProdDetails = () => {
  const { product_id } = useParams();
  const loadedData = useLoaderData();

  const {
    gadgetsInCart,
    setGadgetsInCart,
    wishListItems,
    setWishListItems,
    totalCost,
    setTotalCost,
  } = useContext(AllContext);

  const selectedDetails = loadedData.find(
    (prodDet) => prodDet.product_id === product_id
  );

  const {
    product_image,
    product_title,
    price,
    availability,
    description,
    specification,
    rating,
  } = selectedDetails;

  const handleAddToCart = () => {
    let isAlrInCart = false;

    for (let i = 0; i < gadgetsInCart.length; i++) {
      if (gadgetsInCart[i].product_id === selectedDetails.product_id) {
        isAlrInCart = true;
        break;
      }
    }

    if (!isAlrInCart) {
      setGadgetsInCart([...gadgetsInCart, selectedDetails]);
      toast.success("Successfully added to Cart");
      setTotalCost(totalCost + selectedDetails.price);
    } else {
      toast.info("this already exists in your cart");
    }

    // setGadgetsInCart([...gadgetsInCart,selectedDetails]);
  };

  const handleAddToWishList = () => {
    let isAlrInWishList = false;

    for (let i = 0; i < wishListItems.length; i++) {
      if (wishListItems[i].product_id === selectedDetails.product_id) {
        isAlrInWishList = true;
        break;
      }
    }

    if (!isAlrInWishList) {
      setWishListItems([...wishListItems, selectedDetails]);
      toast.success("Successfully added to Wish List");
    } else {
      toast.info("this item already exists in your cart");
    }
  };

  return (
    <>
      <div>
        <div className="flex flex-col items-center py-18 bg-white text-[rgba(17,17,17,255)]">
          <h1 className="text-3xl font-bold pb-5">Product Details</h1>
          <p className="max-w-2xl text-center">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
        </div>
      </div>

      <div className="w-full bg-white  min-h-62 relative z-0"></div>

      <div className="max-w-4xl rounded-2xl flex justify-center mx-auto  mb-30 bg-[rgba(17,17,17,255)]   overflow-hidden -mt-62 z-10 relative">
        <div className=" max-w-7xl card card-side rounded-2xl m-5 bg-[rgba(234,234,234,255)] text-[rgba(17,17,17,255)] ">
          <figure className="w-full lg:w-[424.31px] lg:h-[503px] rounded-2xl">
            <img src={product_image} alt={product_title} />
          </figure>

          <div className="flex flex-col pl-5 gap-2 justify-center">
            <h2 className="card-title font-bold">{product_title}</h2>

            <p className="font-bold">Price : $ {price}</p>
            {availability ? (
              <div className="border-1 border-green-600 rounded-2xl text-green-600 text-xs bg-green-100 max-w-18 flex justify-center py-0.5 font-bold ">
                In Stock
              </div>
            ) : (
              <div className="border-1 border-red-600 rounded-2xl text-red-600 text-xs bg-red-100 max-w-20 flex justify-center py-0.5 font-bold ">
                Stock Out
              </div>
            )}

            <p className="text-gray-600">{description}</p>

            <p className="text-xl font-bold">Specifications: </p>

            {/* <p>{specification}</p> */}
            <ol className="list-decimal list-inside text-gray-600">
              {specification.map((spec, idx) => (
                <li key={idx}>{spec}</li>
              ))}
            </ol>
            <p className="font-bold">Rating</p>
            <div className="flex">
              <Rating style={{ maxWidth: 100 }} value={rating} readOnly />
              <p className="ml-4 bg-gray-300 rounded-xl p-1 text-xs">
                {rating}
              </p>
            </div>

            <div className="card-actions justify-start mb-1 mr-4 mt-3 items-center">
              
              <button onClick={handleAddToCart} className=" hover:bg-black rounded-xl py-1 px-2 hover:text-white text-black bg-white hover:cursor-pointer">
                Add to Cart
              </button>

              <Heart onClick={handleAddToWishList} className=" hover:cursor-pointer  w-8 h-7 p-1 rounded-xl hover:bg-black hover:text-white text-black"></Heart>

              {/* <button onClick={handleAddToWishList} className=" hover:bg-black rounded-xl py-1 px-2 hover:text-white text-black bg-white hover:cursor-pointer">
                Add to wish list
              </button>
             */}
            </div>
          </div>
        </div>
      </div>
    </>
    // lg:w-[128px] lg:h-[567px]
  );
};

export default ProdDetails;
