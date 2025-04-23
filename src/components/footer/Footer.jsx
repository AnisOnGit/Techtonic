import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer flex justify-center bg-[rgba(17,17,17,255)] text-base-content border-base-300 border-b  px-10 pb-10 pt-30">
        <aside className="flex justify-center items-center text-center">
          <p>
            <span className="block text-4xl font-bold w-full">Tektonic</span>
            <span className="block w-full pt-5">
              Leading the way in cutting-edge technology and innovation.
            </span>
          </p>
        </aside>
      </footer>

      {/* <div className="w-5xl mx-auto border-b-1 border-b-gray-600"></div> */}

      <footer className="footer sm:footer-horizontal bg-[rgba(17,17,17,255)] text-base-content pt-15 px-10 pb-30">
        <nav className="w-full flex flex-col items-end">
          <h6 className="text-xl font-bold pb-2 text-white">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="w-full flex flex-col items-center">
          <h6 className="text-xl font-bold pb-2 text-white">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="w-full flex flex-col items-start">
          <h6 className="text-xl font-bold pb-2 text-white">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    
      
    </>
  );
};

export default Footer;
