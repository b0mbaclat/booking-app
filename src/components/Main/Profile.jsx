import React from "react";
import MobileFooter from "../Footer/MobileFooter";
import Header from "../Header/Header";
import profilePageData from "../../utils/profilePageData";
import LongFooter from "../House-detail/LongFooter";
import { useSelector } from "react-redux";
import MobileProfilePage from "./MobileProfilePage";

// ProfileHeader component for desktop view
const ProfileHeader = ({ userData }) => {
  const firstName = String(userData?.user_metadata?.name).split(" ")[0];

  return (
    <div className="flex-col justify-start">
      <h1 className="text-4xl font-medium">Account</h1>
      <div className="mt-2 flex gap-x-1 items-center">
        <span className="font-light text-lg">Signed in as:</span>
        <span className="font-bold text-lg">{firstName}</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" class="size-5 ml-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
        </svg>
        <span className="text-lg font-bold">:suka@blyat.com</span>
      </div>
    </div>
  );
};

// ProfileCard component for individual cards
const ProfileCard = ({ svg, title1, title2 ,referto}) => {
  return (
    <a href={referto} className="">
    <div className="shadow-priceCardShadow flex flex-col gap-y-6 p-4 w-full max-w-80 rounded-xl">
      <div>
        <img className="w-9 h-9" src={svg} alt="" />
      </div>
      <div className="flex flex-col">
        <span className="font-medium">{title1}</span>
        <span className="text-sm font-light text-grey">{title2}</span>
      </div>
    </div>
    </a>
  );
};

// ProfileGrid component for the grid of cards
const ProfileGrid = ({ profileData }) => {
  return (
    <div className="grid gap-5 mt-10 grid-cols-2 1lg:grid-cols-3">
      {profileData.map((item, i) => (
        <ProfileCard key={i} {...item} />
      ))}
    </div>
  );
};

// DesktopProfile component for desktop view
const DesktopProfile = ({ userData }) => {
  return (
    <div className="w-full hidden 1xz:flex mt-36 mb-20 justify-center">
      <div className="flex flex-col justify-start">
        <ProfileHeader userData={userData} />
        <ProfileGrid profileData={profilePageData} />
      </div>
    </div>
  );
};

// Main Profile component
const Profile = () => {
  const userData = useSelector((state) => state.app.userData);

  return (
    <div>
      <div
        id="header"
        className="z-50 bg-white hidden fixed top-0 w-full 1xz:flex items-start justify-center"
      >
        <Header />
      </div>
      <MobileProfilePage />
      <DesktopProfile userData={userData} />
      <LongFooter />
      <MobileFooter />
    </div>
  );
};

export default Profile;
