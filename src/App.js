import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Movie from "./pages/movie/Movie";
import About from "./pages/about/About";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import MovieDetails from "./pages/movie/MovieDetails";
const App = () => {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies/:type" element={<Movie />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
      </Routes>
      <Footer/>
    </>
  );
};

export default App;
