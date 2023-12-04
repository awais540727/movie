import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieCard from "../../components/card/MovieCard";

const Movie = () => {
  const { type } = useParams();
  console.log(type);
  const [movies, setMovies] = useState([]);

  const getAllMovies = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${
          type ? type : "popular"
        }?api_key=6a96c70c10d62253b2cf1a9b91f9c96e`
      );
      setMovies(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllMovies();
  }, []);

  useEffect(() => {
    getAllMovies();
  }, [type]);

  return (
    <>
      <div className="container-fluid mt-3">
        <h1 className="text-center mt-3 mb-3">
          {(type ? type : "popular").toUpperCase()}
        </h1>
        <div className="row mt-4 mb-4">
          {movies.map((movie) => (
            <>
              <div className="col-lg-3 col-md-4 col-sm-12 col-12 text-center">
                <MovieCard movie={movie} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Movie;
