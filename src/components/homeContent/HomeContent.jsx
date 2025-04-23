import Hero from "../hero/Hero.jsx";
import Products from "../products/Products.jsx";
import BannerImg from "../../assets/banner.jpg";

const HomeContent = () => {
  return (
    <div className="bg-[#0C0C0C]">
      <Hero />

      <div className=" min-h-52 rounded-b-3xl relative z-0 bg-white"></div>

      <div className="flex justify-center mx-auto max-w-[1062px] max-h-[563px] rounded-4xl overflow-hidden -mt-52 z-10 relative">
        <img
          src={BannerImg}
          alt="banner img"
          className="w-full h-auto object-cover rounded"
        />
      </div>

      <Products></Products>
    </div>
  );
};

export default HomeContent;
