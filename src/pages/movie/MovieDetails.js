import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movieDetails, setMovieDetails] = useState();
  const { id } = useParams();

  const getMovieDetails = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=6a96c70c10d62253b2cf1a9b91f9c96e`
      );
      setMovieDetails(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  console.log(movieDetails);
  return (
    <>
      <div className="container mt-5 mb-5 m-3">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 col-12 mt-3 mb-3 text-center">
            <div className="top-img">
              <img
                src={`https://image.tmdb.org/t/p/original${
                  movieDetails ? movieDetails.poster_path : ""
                }`}
                alt=""
                className="rounded"
                style={{ width: "400px", height: "600px" }}
              />
            </div>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 col-12 mt-3 mb-3 ">
            <h3 className="mt-3 mb-3 text-center">
              {movieDetails ? movieDetails.title : ""}
            </h3>
            <h5 className="mt-3 mb-3 text-center text-secondary">
              {movieDetails ? movieDetails.tagline : ""}
            </h5>
            <div className="d-flex ms-4">
              {movieDetails?.genres.map((movie) => (
                <>
                  <b className="mt-3 mb-3 ms-4 bg-danger p-1 rounded">
                    {movie.name}
                  </b>
                </>
              ))}
            </div>
            <p className="mt-3 mb-3">
              {movieDetails ? movieDetails.overview : ""}
            </p>
            <p className="mt-3 mb-3">
              Average Rating:
              {movieDetails
                ? movieDetails.vote_count + " / " + movieDetails.vote_average
                : ""}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
