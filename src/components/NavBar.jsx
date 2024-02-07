import React from "react";
import { useState } from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";

const NavBar = () => {
  const [leftArrow, setLeftArrow] = useState("gray");
  const [rightArrow, setRightArrow] = useState("gray");
  const [isBellActive, setIsBellActive] = useState(false);

  const handleLeftArrow = () => {
    setLeftArrow("white");
    setRightArrow("gray");
  };

  const handleRightArrow = () => {
    setRightArrow("white");
    setLeftArrow("gray");
  };

  const handleBell = () => {
    setIsBellActive(!isBellActive);
  };
  return (
    <div className=" flex justify-between items-center h-14  w-full  px-5 py-2">
      <div className=" flex gap-4">
        <div
          className="bg-black rounded-full m-auto p-1 cursor-pointer"
          onClick={handleLeftArrow}
        >
          <IoIosArrowBack color={leftArrow} size="1.5rem" />
        </div>
        <div
          className="bg-black rounded-full  m-auto p-1 cursor-pointer"
          onClick={handleRightArrow}
        >
          <IoIosArrowForward color={rightArrow} size="1.5rem" />
        </div>
      </div>
      <div className="flex gap-2 items-center ">
        <div className="bg-white rounded-full h-8 px-4 pt-1 cursor-pointer">
          <button className=" font-semibold">Explore Premium</button>
        </div>

        <div className="flex items-center font-semibold px-2 rounded-full h-8 gap-1 bg-black text-white cursor-pointer">
          <MdOutlineDownloadForOffline />
          Install App
        </div>
        <div
          className="bg-black p-2 rounded-full cursor-pointer"
          onClick={handleBell}
        >
          {isBellActive ? (
            <FaBell color="white" size="1.1rem" />
          ) : (
            <FaRegBell color="white" size="1.1rem" />
          )}
        </div>
        <div className="bg-black p-1 rounded-full">
          <MdAccountCircle color="white" size="1.5rem" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
