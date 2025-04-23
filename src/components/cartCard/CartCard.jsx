import { useContext } from "react";
import { AllContext } from "../../utilities/utilities";
import { X } from "lucide-react";

const CartCard = ({ oneCartInfo }) => {
  const { product_id, product_title, product_image, description, price } =
    oneCartInfo;
  const { handleDelFrmCart, totalCost, setTotalCost } = useContext(AllContext);

  return (
    <div className="card max-w-7xl lg:w-7xl max-h-48 card-side p-4 bg-[rgba(234,234,234,255)] border-b-4 border-gray-800 shadow-sm my-10 items-center gap-5">
      
      <div className="flex items-center lg:w-[200px] lg:h-[124px] w-full h-full rounded-xl ">
        <img
          className="w-full rounded-xl h-full object-cover"
          src={product_image}
          alt={product_title}
        />
      </div>

      <div className="flex flex-auto flex-col lg:h-[124px] gap-4 justify-center ">
        
        <div className="flex justify-between">
          <p className="card-title  text-black font-bold">
            {product_title}
          </p>
          <X
            onClick={() => {
              handleDelFrmCart(product_id);
              setTotalCost(totalCost - price);
            }}
            className="border-1 border-black text-black rounded-3xl p-0.5 hover:cursor-pointer hover:text-white hover:bg-black"
          />
        </div>
        <p className=" text-gray-800">{description}</p>
        
        <h4 className=" font-bold text-black">
          Price: $ {price}
        </h4>
      </div>

    </div>
  );
};

export default CartCard;
