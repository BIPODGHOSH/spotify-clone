import React from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";

const Home = () => {
  return (
    <div className="bg-black h-screen flex">
      <Sidebar />
      <Card />
    </div>
  );
};

export default Home;
