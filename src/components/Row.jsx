import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const Row = ({ title, fetchURL, rowID }) => {
  const [movies, setMovies] = useState([]);
  const [endLeft, setEndLeft] = useState(false);

  useEffect(() => {
    axios.get(fetchURL).then(({ data: { results } }) => {
      setMovies(results);
    });
  }, [fetchURL]);

  const slideLeft = () => {
    var slider = document.getElementById("slider" + rowID);
    // if (slider.scrollLeft === 0) {
    //   setEndLeft(true);
    // } else {
    //   setEndLeft(false);
    slider.scrollLeft = slider.scrollLeft - 1000;
    // }
  };

  const slideRight = () => {
    // setEndLeft(false);
    var slider = document.getElementById("slider" + rowID);
    slider.scrollLeft = slider.scrollLeft + 1000;
  };

  return (
    <>
      <h2 className="text-white font-bold md:text-xl p-4">{title}</h2>
      <div className="relative flex items-center group">
        {!endLeft && (
          <MdChevronLeft
            onClick={slideLeft}
            size={40}
            className="bg-white rounded-full absolute left-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
          />
        )}

        <div
          id={"slider" + rowID}
          className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
        >
          {movies?.map((movie, id) => (
            <Movie key={id} movie={movie} />
          ))}
        </div>

        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="bg-white rounded-full absolute right-0 opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
