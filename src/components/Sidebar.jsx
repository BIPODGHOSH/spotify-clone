import React from "react";
import { GoHomeFill } from "react-icons/go";
import { FiSearch } from "react-icons/fi";
import { VscLibrary } from "react-icons/vsc";
import { FaPlus } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";

const Sidebar = () => {
  const [isactiveHome, setIsActiveHome] = useState();
  const [isactiveSearch, setIsActiveSearch] = useState();

  const handleSearch = () => {
    setIsActiveSearch("white");
    setIsActiveHome("gray");
  };

  const handleHome = () => {
    setIsActiveHome("white");
    setIsActiveSearch("gray");
  };
  return (
    <div className=" text-white flex flex-col p-2 w-1/4 ">
      <div className="flex flex-col gap-4 bg-zinc-950 p-4 rounded-md mb-2">
        <div className="flex gap-3 cursor-pointer" onClick={handleHome}>
          <GoHomeFill color={isactiveHome} fontSize="1.6rem" />
          {isactiveHome === "gray" ? (
            <p className=" text-gray-400">Home</p>
          ) : (
            <p>Home</p>
          )}
        </div>
        <div className="flex gap-3 cursor-pointer" onClick={handleSearch}>
          <FiSearch color={isactiveSearch} fontSize="1.6rem" />
          {isactiveSearch === "gray" ? (
            <p className="text-gray-400">Search</p>
          ) : (
            <p className="">Search</p>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-4 bg-zinc-950 p-4 rounded-md h-full">
        <div className=" flex text-gray-400 justify-between">
          <div className="flex gap-2">
            <VscLibrary color="gray" fontSize="1.6rem" />
            <h1 className="">Your Library</h1>
          </div>
          <div className="flex gap-2">
            <FaPlus
              color="gray"
              fontSize="1.2rem"
              className=" cursor-pointer"
            />
            <FaArrowRight
              color="gray"
              fontSize="1.2rem"
              className=" cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-zinc-800 p-4 rounded-md">
          <div className="">
            <h1 className=" font-bold">Create your first playlist</h1>
            <p className="">it's easy,we'll help you</p>
          </div>

          <button className=" max-w-36 bg-slate-50 text-black rounded-lg font-semibold">
            Create Playlist
          </button>
        </div>
        <div className="flex flex-col gap-4 bg-zinc-800 p-4 rounded-md">
          <div className="">
            <h1 className="font-bold">Let's find some prodcusts to follow</h1>
            <p className="">We'll keep updated on new episodes</p>
          </div>

          <button className=" max-w-36 bg-slate-50 text-black rounded-lg font-semibold">
            Browse Prodcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
