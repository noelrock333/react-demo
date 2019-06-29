import React from 'react';

const movieStyle = {
  fontSize: 20,
  display: 'block',
  padding: 10,
  color: 'white'
}

const Item = ({ movie }) => {
  const { imageUrl, name } = movie;
  return (
    <div className="movie-item">
      <div className="image" style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'url(https://imgplaceholder.com/350x225/ff7f7f/333333/fa-image)'}}></div>
      <a href="#" style={movieStyle}>{name}</a>
    </div>
  )
}

export default Item;
