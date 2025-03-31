import React from "react";
import Navbar from "../components/Navbar/Navbar.jsx";
import Hero from "../components/Hero/Hero";
import Products from "../components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import Banner from "../components/Banner/Banner";
import Discounts from "../components/Subscribe/Discounts.jsx";
import Testimonials from "../components/Testimonials/Testimonials";
import Footer from "../components/Footer/Footer";
import BudgetStore from "../components/BudgetStore.jsx";
import IncredibleIndia from "../components/IncredibleIndia.jsx";

function LandingPage() {
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
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      {/* both nav bars */}
      <Navbar />
      {/* image auto scrolling */}
      <Hero />

      <Products />
      <BudgetStore />
      <Banner />
      <Discounts />
      <IncredibleIndia />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default LandingPage;
