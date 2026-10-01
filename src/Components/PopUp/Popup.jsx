import React from "react";
import { IoClose } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  return (
    <>
      {orderPopup && (
        <div className="w-screen h-screen fixed top-0 left-0 backdrop-blur-sm z-50 ">
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] rounded-md shadow-md bg-white dark:bg-gray-900">
            <div className="flex flex-col px-4 py-7 space-y-3">
              <div className="flex justify-between items-center">
                <h1 className="text-xl font-semibold">Order Your Book</h1>
                <IoClose
                  onClick={()=> setOrderPopup(false)}
                  className="text-xl cursor-pointer"
                />
              </div>
              <div className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-2 py-1 border border-gray-500 rounded-full"
                />
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full px-2 py-1 border border-gray-500 rounded-full"
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="w-full px-2 py-1 border border-gray-500 rounded-full"
                />
              </div>
              <div className="mx-auto">
                <button className="text-center rounded-full py-2 px-4 text-white bg-primary cursor-pointer hover:scale-103 hover:bg-secondary">
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
