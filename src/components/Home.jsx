import React from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <div className=" bg-black h-screen w-screen ">
      <div className="flex h-5/6 ">
        <Sidebar />
        <div className="w-full m-2  bg-zinc-950 rounded-md">
          <NavBar />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Home;
