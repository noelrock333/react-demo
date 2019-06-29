import React from 'react';
import Item from './item';

class Movies extends React.Component {
  state = {
    movies: [
      { name: 'Como si fuera la primera vez', imageUrl: 'https://i.ytimg.com/vi/qu20bckIBF8/maxresdefault.jpg' },
      { name: 'Godzilla', imageUrl: 'https://pics.filmaffinity.com/godzilla_king_of_the_monsters-188251207-large.jpg'},
      { name: 'Toistori', imageUrl: 'https://imagenes.canalrcn.com/lomaslike/toy-story-4-pelicula-taquilla-norteamericana-critica-.jpg' }
    ],
    movie: ''
  }

  renderItems = (movies) => {
    return movies.map((item, index) => <Item key={index} movie={item}/>)
  }

  _onSubmit = (event) => {
    event.preventDefault();
    const { movie, movies } = this.state;
    if (movie) {
      this.setState({
        movies: [...movies, movie]
      }, () => {
        this.setState({ movie: '' })
      })
    }
  }

  _onInputMovieChange = (event) => {
    this.setState({
      movie: event.target.value
    });
  }

  render() {
    let { movies } = this.state;
    return (
      <div className="List">
        <form onSubmit={this._onSubmit}>
          <input
            type="text"
            name="movie"
            onChange={this._onInputMovieChange}
            value={this.state.movie}/>
          <input type="submit" value="Agregar"/>
        </form>
        <ul>
          {this.renderItems(movies)}
        </ul>
      </div>
    );
  } 

}

export default Movies;
