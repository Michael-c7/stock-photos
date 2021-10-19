import React from 'react';
import { useScrollPercentage } from 'react-scroll-percentage'
import SearchSection from './SearchSection';
import PhotoSection from './PhotoSection';


// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`


function App() {
  const [ref, percentage] = useScrollPercentage({
    /* Optional options */
    threshold: 0,
  })
  document.title = `scrolled: ${percentage.toPrecision(2) * 100}%.`

  return (
    <main className="site-container" ref={ref}>
      <SearchSection/>
      
      <PhotoSection/>
    </main>
  );
}

export default App;
