import React from "react";
import LibraryImage from "../../assets/website/library.jpg";
import { GrSecure } from "react-icons/gr";

const Banner = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-13">
        {/* image section  */}
        <div className="flex justify-center items-center">
          <img
          data-aos="zoom-out"
            src={LibraryImage}
            alt=""
            className="w-full max-w-[400px] h-[350px] object-cover drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] block mx-auto "
          />
        </div>

        {/* textsection  */}
        <div
        data-aos="slide-up"
        className=" space-y-5">
          <h1 className="text-4xl font-bold">Library at your fingertips</h1>
          <p className="text-sm text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero odio
            minus enim sint quia architecto distinctio quisquam autem suscipit
            praesentium?
          </p>
          <div className="flex gap-3 items-center">
            <GrSecure className="w-13 h-13 p-4 rounded-full bg-violet-100 shadow-sm  dark:bg-violet-400" />
            <h1 className=" text-lg ">Quality Books</h1>
          </div>
          <div className="flex gap-3 items-center">
            <GrSecure className="w-13 h-13 p-4 rounded-full bg-yellow-100 shadow-sm dark:bg-yellow-400" />
            <h1 className=" text-lg ">Fast Delivery</h1>
          </div>
          <div className="flex gap-3 items-center">
            <GrSecure className="w-13 h-13 p-4 rounded-full bg-orange-100 shadow-sm  dark:bg-orange-400" />
            <h1 className=" text-lg ">Easy Payment method</h1>
          </div>
          <div className="flex gap-3 items-center">
            <GrSecure className="w-13 h-13 p-4 rounded-full bg-gray-100 shadow-sm  dark:bg-gray-400" />
            <h1 className=" text-lg ">Get offers on books</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
