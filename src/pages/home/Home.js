import axios from "axios";
import React, { useEffect, useState } from "react";
import MovieCard from "../../components/card/MovieCard";
import { Carousel } from "react-responsive-carousel";
import Movie from "../movie/Movie";
const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const res = await axios.get(
          "https://api.themoviedb.org/3/movie/popular?api_key=6a96c70c10d62253b2cf1a9b91f9c96e"
        );
        // console.log(res.data.results);
        setMovies(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getAllMovies();
  }, []);

  console.log(movies);

  return (
    <>
      <Carousel
        autoPlay={true}
        transitionTime={1}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        style={{ width: "100vw", height: "100px" }}
      >
        {movies.map((movie) => (
          <img
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            alt=""
            style={{ width: "100vw", height: "85vh" }}
          />
        ))}
      </Carousel>
      <div className="mt-4">
        <Movie />
      </div>
      {/* <div className="container-fluid mt-3">
        <h1 className="text-center mt-3 mb-3">Top Movies</h1>
        <div className="row mt-4 mb-4">
          {movies.map((movie) => (
            <>
              <div className="col-lg-3 col-md-4 col-sm-12 col-12 text-center">
                <MovieCard movie={movie} />
              </div>
            </>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default Home;
