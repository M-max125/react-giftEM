import React, { useState } from "react";
import Footer from "../components/Footer";
import GiftSection from "../components/GiftSection";
import InfoSection from "../components/InfoSection";
import {
  homeFirstObj,
  homeSecondObj,
  homeThirdObj,
} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Sidebar from "../components/Sidebar";

const Home = () => {
  /*The function responsible to toggle the menu when clicking the Icon */
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <GiftSection />
      <InfoSection {...homeFirstObj} />
      <InfoSection {...homeSecondObj} />
      <Services />
      <InfoSection {...homeThirdObj} />
      <Footer />
    </>
  );
};

export default Home;
