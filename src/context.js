import React, { useState, createContext } from "react";
// import { useScrollPercentage } from 'react-scroll-percentage'
import {accessKey} from "./accessKey"
const UserContext = createContext();


const UserProvider = ({ children }) => {
  // const searchUrl = `https://api.unsplash.com/search/photos/`
    const [name, setName] = useState("John Doe");
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [stockPhotoData, setStockPhotoData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);


    




    const getPhotoData = async _ => {
      try {
        const response = await fetch(`https://api.unsplash.com/photos/?page=22&client_id=${accessKey}`)
        const data = await response.json();
        console.log(data)
        setStockPhotoData(data)
      } catch(error) {
        console.log(error)
      }
    }


    // const getSearchData = async _ => {
    //   try {
    //     const response = await fetch(`https://api.unsplash.com/search/photos/?query="sunset"?client_id=${accessKey}`)
    //     const data = await response.json();
    //     setStockPhotoData(data)
    //   } catch(error) {
    //     console.log(error)
    //   }
    // }

    return (
      <UserContext.Provider value={
        {
         name,
         getPhotoData,
         searchTerm,
         setSearchTerm,
         stockPhotoData,
         setStockPhotoData,
        }}>
        {children}
      </UserContext.Provider>
    );
  };

export {UserContext, UserProvider}
