import React from 'react'

const PhotoSection = () => {
    return (
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
        </ul>
      </section>
    )
}

export default PhotoSection
