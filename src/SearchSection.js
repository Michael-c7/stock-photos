import React, {useState} from 'react'
import { FaSearch } from 'react-icons/fa'
import {accessKey} from "./accessKey"

const SearchSection = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [photoData, setImageData] = useState([]);

    const getPhotoData = async _ => {
      
      try {
        const response = await fetch(`https://api.unsplash.com/photos/?client_id=${accessKey}`)
        const data = await response.json();
        console.log(data)
      } catch(error) {
        console.log(error)
      }
      
    }

    React.useEffect(() => {
      getPhotoData()
    }, []);

    return (
        <section className="search-section">
        <div className="search">
          <input className="search__input" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder="Search"/>
          <button className="search__btn" type="submit" onClick={getPhotoData}>
            <FaSearch className="search__icon"/>
          </button>
        </div>
      </section>
    )
}

export default SearchSection
