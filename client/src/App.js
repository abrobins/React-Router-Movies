import React, { useState } from "react";
import { Route } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>
        <Route exact path="/">
          <MovieList />
        </Route>
      </div>
      <Route path="/movies/:id" render={props => <Movie {...props} />} />
      {/* <Route path="/movies/:id"> */}
      {/* <Movie />
      </Route> */}
      {/* <Route path="/movies/:id" render={(props) => <Movie {...props} movies={movie} />}
       */}
    </div>
  );
};

export default App;
