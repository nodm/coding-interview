import React from 'react';
import MoviesList from './MovieList';
import './App.css';

function App() {
  return (
    <>
      <header>
        <h1>STAR WARS MOVIES IN ORDER: HOW TO WATCH THE SAGA CHRONOLOGICALLY</h1>
        <hr/>
      </header>
      <main>
        <MoviesList />
      </main>
      <footer>
        <hr/>
        &copy; {new Date().getFullYear()}
      </footer>
    </>
  );
}

export default App;
