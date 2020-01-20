import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const Movie = props => {
  const [movie, setMovie] = useState();
  console.log("Movie props:", props);
  useEffect(() => {
    // const id = 1;
    const id = props.match.params.id;
    // const id = movie.find(movie1 => `${movie1.id}` === props.match.params.id);

    // const id = props.movie.items.find(
    //   movie1 => `${movie1.id}` === props.match.params.id
    // );
    // const id = props.movie.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

    axios
      .get(`http://localhost:5000/api/movies/${id}`)
      .then(response => {
        setMovie(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  return <MovieCard movie={movie} />;
};

export default Movie;
