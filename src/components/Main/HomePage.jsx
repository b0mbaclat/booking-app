import React, { useState, useEffect ,useRef } from "react";
import icon from "../../asset/airbnbLogo.svg";


import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

import { SpeedInsights } from "@vercel/speed-insights/react";

import Header from "../Header/Header";
import Options from "./Options";
import House from "./House";
import Footer from "../Footer/Footer";
import MobileFooter from "../Footer/MobileFooter";
import { getAllRows } from "../../api/apiRooms";

import "../../input.css";

const Home = () => {

  const slideRef = useRef(null);
  let current = useRef(0);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-300">
      <div className="animate-pulse flex flex-col items-center space-y-4">
        <img src={icon} alt="Logo" className="w-16 h-16" />
        <p className="text-neutral-800 text-lg font-medium animate-bounce">Loading nomadnest...</p>
      </div>
    </div>
  );
};


  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(true);
      setLoading(false); // Simulate loading done
    }, 2000); // Adjust time if needed
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideRef.current) {
        current.current = (current.current + 1) % images.length;
        slideRef.current.style.transform = `translateX(-${current.current * 100}%)`;
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const { startScroll, minimize, userData } = useSelector((state) => state.app);

  const headerRef = useRef(null);

  useQuery({
    queryKey: ["allRows"],
    queryFn: getAllRows,
  });

  const getHeaderClasses = () => {
    const baseClasses =
      "fixed transition-all duration-300 ease-in-out bg-white w-full flex items-start justify-center top-0";
    const zIndexClass = minimize ? "z-50" : "z-10";
    const heightClass = startScroll
      ? minimize
        ? "animate-collapse"
        : "1sm:h-[11rem]"
      : minimize
      ? "animate-expand"
      : "h-[5rem]";

    return `${baseClasses} ${zIndexClass} ${heightClass}`;
  };

  const getOptionsClasses = () => {
    const baseClasses =
      "transition-all duration-300 ease-in-out fixed z-10 w-full bg-white shadow-md 1sm:shadow-none flex-center";
    const visibilityClass = startScroll
      ? "1md:translate-y-0 1sm:translate-y-[3rem]"
      : "1sm:-translate-y-[5.9rem] !shadow-md";
    const positionClass = "1sm:top-[10.8rem] top-[5.7rem]";

    return `${baseClasses} ${visibilityClass} ${positionClass}`;
  };

  return (
      <>
    {loading && <Loader />}
    {!loading && (

    <div className="flex flex-col items-center justify-center relative">
      <div ref={headerRef} id="header" className={getHeaderClasses()}>
        <Header headerRef={headerRef} />
      </div>

      <div className={getOptionsClasses()}>
        <Options />
      </div>

      <div className="w-full flex justify-center items-center mt-[7rem] 2xl:mt-[14rem] 1sm:mt-[13rem]">
        <House />
      </div>

      {userData && (
        <div className="w-full hidden 1smd:flex-center bg-white border-t border-grey-light-50 fixed bottom-0 h-10">
          <Footer />
        </div>
      )}

      <MobileFooter />
      <SpeedInsights />
    </div>
        )}
  </>
  );
};

export default Home;
