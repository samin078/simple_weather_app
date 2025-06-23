import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Testing from "./components/Practice/Testing";

import TaskContextProvider, { TaskContext } from "./context/taskContext";
import Searchbar from "./components/Searchbar";
import WeatherCard from "./components/WeatherCard";

function App() {
  return (
    <div className="bg-zinc-200 h-[100vh]">
      <TaskContextProvider>
        <div className="flex flex-col p-8 items-center">
          <WeatherCard />
        </div>
      </TaskContextProvider>

      {/* <Testing /> */}
    </div>
  );
}

export default App;
