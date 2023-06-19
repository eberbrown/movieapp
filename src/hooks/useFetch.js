import { useEffect, useState } from 'react';

export default function useFetch(apiPath, queryTerm="") {

    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`;

    const [data, setData] = useState([]);
    useEffect(() => {
        async function fetchMovies() {
          const resp = await fetch(url);
          const respData = await resp.json();
          setData(respData.results);
        }
    
        fetchMovies();
    
      }, [url]);

  return (
    { data }
  )
}
