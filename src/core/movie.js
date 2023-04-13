import axios from 'axios'

export async function fetchMovies(inputText) {
  const { data } = await axios({
    url: `https://omdbapi.com/?apikey=7035c60c&s=${inputText}`,
    method: 'GET',
  })
  // if (data.Search === undefined) {
  //   return []
  // }
  // && 그리고 연산자 (And operator)
  // || 또는 연산자 (Or operator)
  return data.Search || []
}
