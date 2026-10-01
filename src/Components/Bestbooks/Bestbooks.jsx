import React from "react";
import img1 from "../../assets/books/book2.jpg";
import img2 from "../../assets/books/book1.jpg";
import img3 from "../../assets/books/book3.jpg";
import { FaStar } from "react-icons/fa";

const BooksData = [
  { 
    id: 1,
    img: img1,
    title: "His Life",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque pariatur dolor, unde id dolorum maxime quam nisi quia. Ex, quis?",
  },
  {
    id: 2,
    img: img2,
    title: "Who's there",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque pariatur dolor, unde id dolorum maxime quam nisi quia. Ex, quis?",
  },
  {
    id: 3,
    img: img3,
    title: "Lost Boy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque pariatur dolor, unde id dolorum maxime quam nisi quia. Ex, quis?",
  },
];
const Bestbooks = ({handleOrderPopUp}) => {
  return (
    <div className="dark:bg-gray-900 dark:text-white">
      {/* text part  */}
      <div className="container py-20">
        <div className="text-center">
          <p className="bg-clip-text bg-gradient-to-b from-primary to-secondary text-sm text-transparent font-semibold">
            Trending Books
          </p>
          <h1 className="text-3xl font-bold">Best Books</h1>
          <p className="text-xs text-gray-400">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            iure, corporis
          </p>
        </div>
      </div>

      {/* card section  */}

      <div className="flex gap-30 sm:gap-10 px-12 py-3 flex-wrap sm:flex-nowrap">
        {BooksData.map((books) => (
          <div
          data-aos="fade-up"
            key={books.id}
            className="group space-y-3 bg-white shadow-lg p-4 text-center hover:bg-primary hover:text-white rounded-2xl max-h-[350px] dark:bg-gray-800 dark:text-white  "
          >
            <div className="flex items-center justify-center relative object-contain">
              <img src={books.img} alt="" className="w-[100px] absolute -translate-y-3 group-hover:scale-105 " />
            </div>
            <div className="flex justify-center items-center pt-15">
              <div className="flex">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold" > {books.title} </h1>
              <p className="text-gray-500 duration-300 text-sm line-clamp-2 group-hover:text-white">{books.description} </p>
            </div>
            <div>
              <button 
              onClick={handleOrderPopUp}
              className="px-4 py-2 rounded-full text-white bg-primary text-center cursor-pointer hover:scale-105 group-hover:bg-white group-hover:text-primary duration-300">
                Order Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bestbooks;
