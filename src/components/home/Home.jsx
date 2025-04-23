import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar.jsx";
import Footer from "../footer/Footer.jsx";
import { useLocation } from "react-router-dom";
import HomeContent from "../homeContent/HomeContent.jsx";
import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { AllContext } from "../../utilities/utilities.js";
import { ToastContainer, toast } from "react-toastify";
import Modal from "react-modal";
import { BadgeCheck } from "lucide-react";
Modal.setAppElement("#root");
import { useNavigate } from "react-router-dom";



const Home = () => {
  const location = useLocation();
  const [allGadgets, setAllGadgets] = useState([]);
  const [gadgetsInCart, setGadgetsInCart] = useState([]);
  const [wishListItems, setWishListItems] = useState([]);
  const [totalCost, setTotalCost] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleDelFrmCart = (id) => {
    const itemsAfterDel = gadgetsInCart.filter(
      (items) => items.product_id !== id
    );
    setGadgetsInCart(itemsAfterDel);
    toast.info("Removed from Cart");

  
  };
  const handleDelFrmWishList = (id) => {
    const wishItemsAfterDel = wishListItems.filter(
      (items) => items.product_id !== id
    );
    setWishListItems(wishItemsAfterDel);
    toast.info("Removed from Wish list");
    // console.log('Id of the one we gon del',id)
  };
  useEffect(() => {
    axios
      .get("gadgets.json")
      .then((data) => setAllGadgets(data.data))
      .catch((err) => console.error("Error fetching gadgets:", err));
  }, []);

  const handleCloseModal = () => {
    setGadgetsInCart([]);
    setTotalCost(0);
    navigate('/')
  };

  return (
    <div className="bg-black">
      <Navbar />
      <AllContext.Provider
        value={{
          allGadgets,
          setAllGadgets,

          gadgetsInCart,
          setGadgetsInCart,

          handleDelFrmCart,

          wishListItems,
          setWishListItems,

          handleDelFrmWishList,

          totalCost,
          setTotalCost,

          setShowModal,
        }}
      >
        {location.pathname === "/" && <HomeContent />}
        <Outlet />
        <Modal
          isOpen={showModal}
          onRequestClose={() => setShowModal(false)}
          style={{
            content: {
              top: "50%",
              left: "50%",
              right: "auto",
              bottom: "auto",
              marginRight: "-50%",
              transform: "translate(-50%, -50%)",
            },
          }}
          contentLabel="Purchase Modal"
        >
          <div className="flex flex-col items-center ">
            <BadgeCheck color="green" size={48} />

            <h1 className="text-2xl text-center pt-5 font-bold border-b-2 border-b-gray-100 pb-3  text-black">
              Payment Successful
            </h1>

            <p className="text-gray-500 pt-3 pb-2">Thanks for purchasing</p>

            <p className="text-gray-500 pb-3">Total Paid : ${totalCost}</p>

            <button
              className="btn hover:bg-gray-400"
              onClick={() => {
                setShowModal(false);
                handleCloseModal();
              }}
            >
              Close
            </button>
          </div>
        </Modal>
      </AllContext.Provider>
      <ToastContainer />
      <Footer />
    </div>
  );
};

export default Home;
