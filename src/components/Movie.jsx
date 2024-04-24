import React, { useState } from "react";

import { FaHeart, FaRegHeart } from "react-icons/fa";

import { UserAuth } from "../context/AuthContext";
import {
  updateDoc,
  arrayUnion,
  arrayRemove,
  doc,
  // onSnapshot,
} from "firebase/firestore";
import { db } from "../firebase";

const Movie = ({ movie }) => {
  const [like, setLike] = useState(false);
  const { user } = UserAuth();

  const movieID = doc(db, "users", `${user?.email}`);

  // onSnapshot(movieID, (doc) => {
  //   const data = doc.data()?.savedShows;
  //   console.log(data);
  // });

  const saveShow = async () => {
    if (user?.email) {
      setLike(true);
      await updateDoc(movieID, {
        savedShows: arrayUnion({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
          // like: like,
        }),
      });
    } else {
      alert("please log in to save a movie");
    }
  };

  const removeShow = async () => {
    if (user?.email) {
      setLike(false);
      await updateDoc(movieID, {
        savedShows: arrayRemove({
          id: movie.id,
          title: movie.title,
          img: movie.backdrop_path,
          // like: like,
        }),
      });
    } else {
      alert("please log in to save a movie");
    }
  };

  const movieDbHandler = like ? removeShow : saveShow;

  return (
    <>
      {movie?.backdrop_path && (
        <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2">
          <>
            <img
              className="block w-full h-auto"
              src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
              alt={movie?.title}
            />
            <div className="absolute top-0 left-0 w-full h-full text-white opacity-0 hover:bg-black/80 hover:opacity-100">
              <p className="flex items-center justify-center h-full text-xs font-bold text-center white-space-normal md:text-sm">
                {movie.title}
              </p>
              <p onClick={movieDbHandler}>
                {like ? (
                  <FaHeart className="absolute text-gray-300 top-4 left-4" />
                ) : (
                  <FaRegHeart className="absolute text-gray-300 top-4 left-4" />
                )}
              </p>
            </div>
          </>
        </div>
      )}
    </>
  );
};

export default Movie;
