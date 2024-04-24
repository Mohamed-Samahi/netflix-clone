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
      <h2 className="p-4 font-bold text-white md:text-xl">{title}</h2>
      <div className="relative flex items-center group">
        {!endLeft && (
          <MdChevronLeft
            onClick={slideLeft}
            size={40}
            className="absolute left-0 z-10 hidden bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block"
          />
        )}

        <div
          id={"slider" + rowID}
          className="relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {movies?.map((movie, id) => (
            <Movie key={id} movie={movie} />
          ))}
        </div>

        <MdChevronRight
          onClick={slideRight}
          size={40}
          className="absolute right-0 z-10 hidden bg-white rounded-full opacity-50 cursor-pointer hover:opacity-100 group-hover:block"
        />
      </div>
    </>
  );
};

export default Row;
