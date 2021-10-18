import React from 'react';
import { FaSearch } from 'react-icons/fa'


// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`


function App() {
  return (
    <main className="site-container">
      <section className="search-section">
        <div className="search">
          <input className="search__input" type="text" placeholder="Search"/>
          <button className="search__btn">
            <FaSearch className="search__icon"/>
          </button>
        </div>
      </section>

      <section className="photo-section">
        <ul className="photos">
          <li className="photo">
            <img className="photo__img" src="https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNzY2ODF8MXwxfGFsbHwxfHx8fHx8Mnx8MTYzNDU3NTAwNQ&ixlib=rb-1.2.1&q=80&w=1080" alt=""/>
            <div className="photo__overlay">
              <div className="overlay__info">
                <h2 className="overlay__name">Tyler Rutherford</h2>
                <h3 className="overlay__likes">1242 Likes</h3>
              </div>

              <button className="overlay__author">
                <a className="overlay__author__link" href="/">
                  <img className="overlay__author__img" src="https://images.unsplash.com/profile-1600096866391-b09a1a53451aimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64" alt=""/>
                </a>
              </button>
            </div>
          </li>

          <li className="photo">
            <img className="photo__img" src="https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNzY2ODF8MXwxfGFsbHwxfHx8fHx8Mnx8MTYzNDU3NTAwNQ&ixlib=rb-1.2.1&q=80&w=1080" alt=""/>
            <div className="photo__overlay">
              <div className="overlay__info">
                <h2 className="overlay__name">Tyler Rutherford</h2>
                <h3 className="overlay__likes">1242 Likes</h3>
              </div>

              <button className="overlay__author">
                <a className="overlay__author__link" href="/">
                  <img className="overlay__author__img" src="https://images.unsplash.com/profile-1600096866391-b09a1a53451aimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64" alt=""/>
                </a>
              </button>
            </div>
          </li>

          <li className="photo">
            <img className="photo__img" src="https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNzY2ODF8MXwxfGFsbHwxfHx8fHx8Mnx8MTYzNDU3NTAwNQ&ixlib=rb-1.2.1&q=80&w=1080" alt=""/>
            <div className="photo__overlay">
              <div className="overlay__info">
                <h2 className="overlay__name">name here</h2>
                <h3 className="overlay__likes">1242 Likes</h3>
              </div>

              <button className="overlay__author">
                <a className="overlay__author__link" href="/">
                  <img className="overlay__author__img" src="https://images.unsplash.com/profile-1600096866391-b09a1a53451aimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64" alt=""/>
                </a>
              </button>
            </div>
          </li>

          <li className="photo">
            <img className="photo__img" src="https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNzY2ODF8MXwxfGFsbHwxfHx8fHx8Mnx8MTYzNDU3NTAwNQ&ixlib=rb-1.2.1&q=80&w=1080" alt=""/>
            <div className="photo__overlay">
              <div className="overlay__info">
                <h2 className="overlay__name">name here</h2>
                <h3 className="overlay__likes">1242 Likes</h3>
              </div>

              <button className="overlay__author">
                <a className="overlay__author__link" href="/">
                  <img className="overlay__author__img" src="https://images.unsplash.com/profile-1600096866391-b09a1a53451aimage?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64" alt=""/>
                </a>
              </button>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default App;
