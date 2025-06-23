import React, { useState } from "react";
import WeatherCard from "./WeatherCard";
import Searchbar from "./Searchbar";

function Weather() {
  return (
    <div className="flex flex-col p-6 items-center">
      <Searchbar />
      <div className="w-[100%] bg-zinc-300 h-[2px] m-4"></div>
      <WeatherCard />
    </div>
  );
}

export default Weather;
