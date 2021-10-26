import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

const SearchSection = (props) => {
    const {fetchSearch,setTypeOfSearch, searchQuery, setSearchQuery,fetchData} = props
    

    const handleSubmit = e => {
      e.preventDefault()
      fetchSearch()
    }

    


    return (
      <section className="search-section">
        <div className="search">
          <input className="search__input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} type="text" placeholder="Search" autoFocus/>
          <button className="search__btn" type="submit" onClick={handleSubmit}>
            <FaSearch className="search__icon"/>
          </button>
        </div>
      </section>
    )
}

export default SearchSection
