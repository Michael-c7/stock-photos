import React, { useState, }  from 'react'

const PhotoSection = (props) => {
    const {stockImageData, loading, error} = props;
    

    return (
        <section className="photo-section">
        <ul className="photos">
          {stockImageData.map((item) => {
             const {
              id, 
              likes,
              user:{name, profile_image, username},
              urls:{regular},
              } = item;


              if(error) {
                return <h1>There is an error</h1>
              } else {
                return (
                  <li className="photo" key={id}>
                      <img className="photo__img" src={regular} alt=""/>
                      <div className="photo__overlay">
                        <div className="overlay__info">
                          <h2 className="overlay__name">{name}</h2>
                          <h3 className="overlay__likes">{likes} Likes</h3>
                        </div>
        
                        <button className="overlay__author">
                          <a className="overlay__author__link" href={username ? `https://unsplash.com/@${username}` : "https://unsplash.com"} target="_blank" rel="noreferrer">
                            <img className="overlay__author__img" src={profile_image.small ? profile_image.small : ""} alt=""/>
                          </a>
                        </button>
                      </div>
                  </li>
                )
              }
            })}
        </ul>
      </section>
    )
}

export default PhotoSection;