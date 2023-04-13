import React, { useState } from 'react'
import { fetchMovies } from '~/core/movie.js'

export default function App() {
  const [inputText, setInputText] = useState('')
  const [movies, setMovies] = useState([])
  async function pressEnterKey(event) {
    if (event.key === 'Enter') {
      if (inputText.trim() === '') return
      const movieList = await fetchMovies(inputText)
      setMovies(movieList)
    }
  }

  return (
    <>
      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          console.log(e.target.value)
          setInputText(e.target.value)
        }}
        onKeyDown={pressEnterKey}
      />
      <div>{inputText}</div>
      {movies.length ? (
        <ul>
          {movies.map((movie) => (
            <li key={movie.imdbID}>{movie.Title}</li>
          ))}
        </ul>
      ) : (
        <div>검색 결과가 없습니다.</div>
      )}
    </>
  )
}
