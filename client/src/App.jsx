import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Movies from './components/movies';
import Customers from './components/customers';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import AddMovieForm from './components/addMovieForm';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/add-movie" component={AddMovieForm}></Route>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
        </Switch>
       </main>
    </React.Fragment>
  );
}

export default App;
