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
  return (
    <>
      <div className="container">
        <div className="top-img">
          <img
            src={`https://image.tmdb.org/t/p/original${
              movieDetails ? movieDetails.poster_path : ""
            }`}
            alt=""
            style={{ width: "500px", height: "350px" }}
          />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
