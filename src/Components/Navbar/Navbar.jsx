import React from "react";
import Logo from "../../assets/website/logo.png";
import { IoCaretDownSharp } from "react-icons/io5";
import { IoCart } from "react-icons/io5";
import Darkmode from "./Darkmode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Seller",
    link: "/#services",
  },
];

const DropdownLinks = [
  {
    name: "Trending Books",
    link: "/#",
  },
  {
    name: "Best Selling",
    link: "/#",
  },
  {
    name: "Authors",
    link: "/#",
  },
];
const Navbar = ({handleOrderPopUp}) => {
  return (
    <div className="shadow-lg dark:bg-gray-900 dark:text-white">
      <div className="container py-5 w-full flex justify-between items-center">
        <div className="flex object-center gap-3 cursor-pointer ">
          <img src={Logo} alt="" className="w-10" />
          <h1 className="text-3xl font-bold">Books</h1>
        </div>

        <div className="flex gap-6 items-center">
          <div className="translate-y-4 ">
            <Darkmode />
          </div>
          <h1 className="hover:text-primary cursor-pointer hidden sm:block">Home</h1>
          <h1 className="hover:text-primary cursor-pointer hidden sm:block">Best Seller</h1>
          <div className="group cursor-pointer relative hidden sm:block">
            <div className="flex items-center hover:text-primary  ">
              <h1>Quick Links</h1>
              <div className="group-hover:rotate-180 duration-500">
                <IoCaretDownSharp />
              </div>
            </div>
            <div className="hidden group-hover:block absolute top-full bg-white dark:bg-gray-800 dark:text-white p-2 -left-5 space-y-3 shadow-md">
              <div className="">
                <h1 className="hover:bg-primary/20 dark:hover:bg-primary/40 rounded-lg p-2">Trending Books</h1>
                <h1 className="hover:bg-primary/20 dark:hover:bg-primary/40 rounded-lg p-2">Best Selling</h1>
                <h1 className="hover:bg-primary/20 dark:hover:bg-primary/40 rounded-lg p-2">Authors</h1>
              </div>
            </div>
          </div>
          <button
          onClick={handleOrderPopUp}
          className="bg-gradient-to-r from-primary to-secondary flex items-center gap-2 rounded-full px-4 py-1 text-white cursor-pointer hover:scale-105 "
          >Order
          <span className="text-xl"><IoCart/></span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
