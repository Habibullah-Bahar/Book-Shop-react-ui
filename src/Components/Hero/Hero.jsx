import React from "react";
import Book1 from "../../assets/books/book1.jpg";
import Book2 from "../../assets/books/book2.jpg";
import Book3 from "../../assets/books/book3.jpg";
import Vector from "../../assets/website/blue-pattern.png";

const ImageList = [
  {
    id: 1,
    img: Book1,
    title: "Who's there",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Book2,
    title: "His Life will forever be Changed",
    description:
      "His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Book3,
    title: "Lost Boy",
    description:
      "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Hero = ({handleOrderPopUp}) => {
  const [imageId, setImageId] = React.useState(Book2);
  const [title, setTitle] = React.useState("His Life will forever be Changed");
  const [description, setDescription] = React.useState(
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  );
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  };
  return (
    <div>
      <div
        className="min-h-[550px] sm:min-h-[650px] bg-gray-100 dark:bg-gray-950 dark:text-white flex justify-center items-center"
        style={bgImage}
      >
        <div className="container pt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2">
            <div className="flex flex-col gap-6">
              <h1
                data-aos="zoom-out"
                data-aos-duration="500"
                className="text-5xl sm:text-6xl font-bold"
              >
                {title}
              </h1>
              <p
                data-aos="slide-up"
                className="bg-gradient-to-b from-primary to-secondary text-sm bg-clip-text text-transparent text-right font-semibold "
              >
                by Anonymous
              </p>
              <p data-aos="fade-up" className="text-sm">
                {description}
              </p>
              <div>
                <button
                onClick={handleOrderPopUp}
                  data-aos="zoome-in"
                  className="px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white cursor-pointer rounded-full hover:scale-105"
                >
                  Order Now
                </button>
              </div>
            </div>

            <div className="min-h-[450px] flex flex-col lg:flex-row justify-center order-1 lg:order-2 items-center relative gap-4">
              <div className="overflow-hidden flex justify-center items-center h-[300px] sm:h-[450px]">
                <img
                data-aos="zoome-in"
                data-aos-once="true"
                  src={imageId}
                  alt=""
                  className="w-[300px]  h-[300px] sm:w-[350px] sm:h-[350px] mx-auto object-contain "
                />
              </div>
              <div className="flex gap-4 lg:flex-col items-center lg:absolute lg:right-0 ">
                {ImageList.map((item) => (
                  <img
                  data-aos="zoome-in"
                  data-aos-once="true"
                    src={item.img}
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? Book1 : item.id === 2 ? Book2 : Book3,
                      );
                      setTitle(item.title);
                      setDescription(item.description);
                    }}
                    className="w-[100px] h-[100px] inline-block object-contain hover:scale-110 duration-200"
                    alt=""
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
