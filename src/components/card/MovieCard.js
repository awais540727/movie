import React from "react";
import { Link, useParams } from "react-router-dom";

const MovieCard = ({ movie }) => {

  return (
    <>
      <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
        <div className="parent">
          <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt=""
            style={{ width: "300px", height: "350px" }}
            className="mt-2 mb-2 rounded"
          />
          <div className="row ms-3">
            <h4 style={{ fontSize: "20px" }} className="mt-3">
            {movie.title}
          </h4>
          </div>
          <div className="row ms-3 me-5">
            <div className="col-6">
              <p style={{ fontSize: "16px" }} className="release">
                {movie.release_date}
              </p>
            </div>
            <div className="col-6">
              <p style={{ fontSize: "16px" }} className="text-end me-4">
                Rating: {Math.round(movie.vote_average)}
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default MovieCard;
