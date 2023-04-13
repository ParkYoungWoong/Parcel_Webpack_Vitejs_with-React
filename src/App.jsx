import React, { useState } from 'react'
import { fetchMovies } from '~/core/movie'

export default function App() {
  const [inputText, setInputText] = useState('')
  const [movies, setMovies] = useState([])

  function pressEnterKey(event) {
    if (event.key === 'Enter') {
      assignMovies()
    }
  }
  async function assignMovies() {
    if (!inputText) return
    const movies = await fetchMovies(inputText)
    setMovies(movies || [])
  }

  return (
    <>
      <div className="search">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={pressEnterKey}
        />
        <button
          title="a"
          className="search"
          onClick={assignMovies}>
          Search
        </button>
      </div>
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID}>{movie.Title}</li>
        ))}
      </ul>
    </>
  )
}
