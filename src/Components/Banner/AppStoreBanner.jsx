import React from "react";
import bannar from "../../assets/website/board.png";
import PlaStoreImage from "../../assets/website/play_store.png";
import AppStoreImage from "../../assets/website/app_store.png";

const AppStoreBanner = () => {
  return (
    <div
      className="bg-gray-100 dark:bg-gray-800 text-white"
      style={{
        backgroundImage: `url(${bannar})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
    >
      <div
        data-aos="slide-up"
        className="flex flex-col gap-6 py-12 items-center justify-center"
      >
        <div>
          <h1 className="text-white text-2xl sm:text-4xl font-semibold text-center sm">
            Read Books at your fingertips
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center">
          <a href="#">
            <img
              className="max-w-[150px] sm:max-w-[200px]"
              src={PlaStoreImage}
              alt=""
            />
          </a>
          <a href="#">
            <img
              className="max-w-[150px] sm:max-w-[200px]"
              src={AppStoreImage}
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppStoreBanner;
