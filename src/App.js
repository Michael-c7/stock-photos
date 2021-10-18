import React from 'react';
import SearchSection from './SearchSection';
import PhotoSection from './PhotoSection';


// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`


function App() {
  return (
    <main className="site-container">
      <SearchSection/>
      
      <PhotoSection/>
    </main>
  );
}

export default App;
