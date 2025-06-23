import React, { useEffect, useRef, useState } from "react";
import clear_d from "../assets/sun.png";
import clear_n from "../assets/full_moon.png";
import few_cloud_d from "../assets/cloudy.png";
import few_cloud_n from "../assets/cloudy_half_moon.png";
import cloud from "../assets/scattered_cloud.png";
import broken_cloud from "../assets/broken_cloudy.png";
import rain from "../assets/rain.png";
import drizzle_d from "../assets/drizzle_d.png";
import drizzle_n from "../assets/drizzle_n.png";
import storm from "../assets/storm.png";
import snow from "../assets/snow.png";
import fog from "../assets/fog.png";
import { MdWater } from "react-icons/md";
import { FaWind } from "react-icons/fa";
import Searchbar from "./Searchbar";

function WeatherCard() {
  const [weatherData, setWeatherData] = useState(false);
  const inputRef = useRef();
  const allIcons = {
    "01d": clear_d,
    "01n": clear_n,
    "02d": few_cloud_d,
    "02n": few_cloud_n,
    "03d": cloud,
    "03n": cloud,
    "04d": broken_cloud,
    "04n": broken_cloud,
    "09d": rain,
    "09n": rain,
    "10d": drizzle_d,
    "10n": drizzle_n,
    "11d": storm,
    "11n": storm,
    "13d": snow,
    "13n": snow,
    "50d": fog,
    "50n": fog,
  };
  const search = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${
        import.meta.env.VITE_API_KEY
      }`;
      const response = await fetch(url);
      const data = await response.json();
      const icon = allIcons[data.weather[0].icon] || snow;
      console.log(data);
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    search("Dhaka");
  }, []);

  return (
    <>
      <Searchbar />
      <div className="flex flex-col border-none bg-linear-to-t from-sky-700 to-indigo-500 w-[20rem] rounded-xl shadow-lg gap-2 z-10 m-2">
        <div className="flex items-center justify-between m-20 mt-10 mb-4">
          <img src={weatherData.icon} alt="" />
        </div>
        <div className="flex flex-col justify-around items-center m-4 font-bold text-4xl gap-2 text-zinc-300">
          <p>{weatherData.temperature}°C</p>
          <p>{weatherData.location}</p>
        </div>

        <div className="flex items-stretch justify-between m-4 text-zinc-200 text-2xl">
          <div className="self-stretch flex flex-row items-center  gap-3">
            <MdWater />
            <div>
              <p>{weatherData.humidity} %</p>
              <p className="text-lg">Humidity</p>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center  gap-3">
            <FaWind />
            <div>
              <p>{weatherData.windSpeed} Km/h</p>
              <p className="text-lg">Wind Speed</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
