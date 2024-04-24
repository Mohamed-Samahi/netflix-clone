import React, { useEffect } from "react";
import axios from "axios";

import requests from "../Requests";
import { useState } from "react";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then(({ data: { results } }) => {
      setMovies(results);
    });
  }, []);

  const truncateMovieOverview = (movieOverview, textLength) => {
    const movieSplit = movieOverview?.split(" ");
    if (movieSplit?.length > textLength) {
      movieSplit.length = textLength;
      return movieSplit?.join(" ") + "...";
    } else {
      return movieOverview;
    }
  };
  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="object-cover w-full h-full"
          src={
            movie
              ? `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`
              : ""
          }
          alt={movie?.title}
        />
        <div className="absolute w-full p-4 md:p-8 top-[20%]">
          <h1 className="text-3xl font-bold md:text-5xl">{movie?.title}</h1>
          <div className="my-4">
            <button className="px-5 py-2 text-black bg-gray-300 border border-gray-300">
              Play
            </button>
            <button className="px-5 py-2 ml-4 text-white border border-gray-300">
              Watch Later
            </button>
          </div>
          <p className="text-sm text-gray-400">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateMovieOverview(movie?.overview, 30)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
