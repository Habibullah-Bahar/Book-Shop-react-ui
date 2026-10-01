import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Bestbooks from "./Components/Bestbooks/Bestbooks";
import Banner from "./Components/Banner/Banner";
import AppStoreBanner from "./Components/Banner/AppStoreBanner";
import AllBooks from "./Components/AllBooks/AllBooks";
import Testimonial from "./Components/Testimonial/Testimonial";
import Footer from "./Components/Footer/Footer";
import Copyright from "./Components/Copyright/Copyright";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "./Components/PopUp/Popup";

const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);
  const handleOrderPopUp = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
        <Navbar handleOrderPopUp={handleOrderPopUp} />
        <Hero handleOrderPopUp={handleOrderPopUp} />
        <Bestbooks handleOrderPopUp={handleOrderPopUp} />
        <Banner />
        <AppStoreBanner />
        <AllBooks />
        <Testimonial />
        <Footer />
        <Copyright />
        <Popup
          orderPopup={orderPopup}
          setOrderPopup={setOrderPopup}
          handleOrderPopUp={handleOrderPopUp}
        />
      </div>
    </>
  );
};

export default App;
