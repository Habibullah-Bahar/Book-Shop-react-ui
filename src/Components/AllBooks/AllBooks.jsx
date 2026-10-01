import React from "react";
import { FaStar } from "react-icons/fa";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import { IoBookSharp } from "react-icons/io5";

const BooksData = [
  {
    id: 1,
    img: Book1,
    title: "Who's there",
    rating: 5.0,
    author: "Someone",
  },
  {
    id: 2,
    img: Book2,
    title: "His Life",
    rating: 4.5,
    author: "John",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost Boys",
    rating: 4.7,
    author: "Lost Girl",
  },
  {
    id: 4,
    img: Book2,
    title: "His Life",
    rating: 4.5,
    author: "John",
  },
  {
    id: 5,
    img: Book1,
    title: "Who's there",
    rating: 5.0,
    author: "Someone",
  },
];
const AllBooks = () => {
  return (
    <div>
      <div data-aos="slide-up" className="flex flex-col py-10">
        <div className="text-center">
          <p className="bg-clip-text bg-gradient-to-b from-primary to-secondary text-sm text-transparent font-semibold">
            Trending Books
          </p>
          <h1 className="text-3xl font-bold">Top Books</h1>
          <p className="text-xs text-gray-400">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            iure, corporis
          </p>
        </div>
        {/* card section  */}
        <div className="flex flex-wrap gap-10 px-20 py-20 mx-auto">
          {BooksData.map((item) => (
            <div key={item.id}>
              <div>
                <img
                  src={item.img}
                  alt=""
                  className="h-[200px] w-[150px] object-cover rounded-md pb-3"
                />
              </div>
              <h1 className="font-semibold text-xl">{item.title} </h1>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                {item.author}{" "}
              </p>
              <div className="flex items-center justify-start gap-2">
                <div>
                  <FaStar className="text-yellow-500" />
                </div>
                <span>{item.rating} </span>
              </div>
            </div>
          ))}
        </div>

        <div className="lex items-center justify-center">
          <a href="#">
            <button className="px-5 py-1 bg-gradient-to-t hover:scale-105 to-secondary from-primary rounded-full text-white cursor-pointer flex justify-center items-center mx-auto gap-2">
              View All books
              <span className="flex justify-center items-center">
                <IoBookSharp className="text-sm text-white text-center flex items-center justify-center" />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default AllBooks;
