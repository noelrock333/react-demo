import React from 'react';
import { Link } from 'react-router-dom';

const movieStyle = {
  fontSize: 20,
  display: 'block',
  padding: 10
}

const Item = ({ movie, children }) => {
  const { imageUrl, title, id } = movie;
  return (
    <div className="movie-item col-sm-4">
      <div className="image" style={{ backgroundImage: imageUrl ? `url(${imageUrl})` : 'url(https://imgplaceholder.com/350x225/ff7f7f/333333/fa-image)'}}></div>
      <Link to={`/video/${id}`} style={movieStyle}>{title}</Link>
      {children}
    </div>
  )
}

export default Item;
