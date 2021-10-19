import React, {useState, useContext} from 'react'
import { FaSearch } from 'react-icons/fa'
import {UserContext} from "./context"

const SearchSection = () => {
    const {
          getPhotoData,
          searchTerm,
          setSearchTerm,
          } = useContext(UserContext);
    

    

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
