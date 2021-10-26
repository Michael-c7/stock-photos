import { useState, useEffect, useRef, useCallback } from 'react';
import SearchSection from './SearchSection';
import PhotoSection from './PhotoSection';
import {accessKey} from "./accessKey"

// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const clientID = `?client_id=${accessKey}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`


function App() {
  const [stockImageData, setStockImageData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [typeOfSearch, setTypeOfSearch] = useState("main")
  const [searchQuery, setSearchQuery] = useState("");
  let page = `&page=${currentPage}`
  let query = `&query=${searchQuery}`

  const fetchData = async () => {
    let url = "";
    url = `${mainUrl}${clientID}${page}`

    try {
      setLoading(true)
      // if(typeOfSearch === "main") {
      //   url = `${mainUrl}${clientID}${page}`
      //   setStockImageData([])
      // } else if(typeOfSearch === "search") {
      //   url = `${searchUrl}${clientID}${page}${query}`
      //   setStockImageData([])
      // }

      let response = await fetch(url);
      const data = await response.json()

      setLoading(false)
      // setStockImageData([])
      setStockImageData(data)
    } catch(error) {
      setLoading(false)
      setError(true)
      console.log(error)
    }
  }


  const fetchSearch = async () => {
    let url = "";

    try {
      setLoading(true)
      url = `${searchUrl}${clientID}${page}${query}`
      let response = await fetch(url);
      const data = await response.json()
      setLoading(false)
      setStockImageData([])
      setStockImageData(data.results)
    } catch(error) {
      setLoading(false)
      setError(true)
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()

    const scrollEvent = window.addEventListener("scroll", (e) => {
    if( (window.innerHeight + window.scrollY) >= document.body.clientHeight) {
      setCurrentPage(currentPage + 1)
      setStockImageData((oldData) => {
        return [...oldData,...stockImageData];
      })
    }
    })
    return () => window.removeEventListener("scroll", scrollEvent);  
  }, [currentPage, typeOfSearch])

  
  /*
  getting old state values from useState,
  scrollBy,
  document window height
  */

  /*STEPS
  1. get initial data [x]
  2. display initial data [x]
  3. set up infinite load [x]
  4, set up search functionality
  */

  return (
    <main className="site-container">
      <SearchSection fetchSearch={fetchSearch} setTypeOfSearch={setTypeOfSearch} fetchData={fetchData} searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
      {loading ? <h1>Loading now...</h1> : <PhotoSection stockImageData={stockImageData} loading={loading} error={error}/>}
      
    </main>
  );
}

export default App;
