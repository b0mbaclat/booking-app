import React from "react";
import globe from "../../asset/globe.svg";
import { useLocation } from "react-router";

const Footer = () => {
  const location = useLocation();
  let onCheckoutPage = location.pathname.includes("book");
  return (
    <div
      className={` w-full px-10 py-4  flex 1smd:flex-row flex-col-reverse justify-between items-start gap-y-1 1smd:items-center  ${
        onCheckoutPage ? "bg-shadow-gray-light" : "bg-white"
      }  h-full `}
    >
      <div className=" flex-col 1md:flex-row flex">
        <span className="text-sm text-nowrap font-light">
          © 2025 nomadnest, Inc
        </span>
      </div>
      <div className="flex gap-x-5">
        <div className="flex items-center gap-x-2">
          <img src={globe} className="h-4 w-4" alt="" />
          <span className="text-sm font-medium">English (In)</span>
        </div>
        <span className="text-sm font-medium">$ USD</span>
        <span className="text-sm font-medium">CSE group Project</span>
      </div>
    </div>
  );
};

export default Footer;
