import React from 'react';

class Movies extends React.Component {
  state = {
    movies: [
      'Como si fuera la primera vez',
      'Godzilla',
      'Toistori',
      'MIB',
      'Aladino'
    ],
    movie: ''
  }

  renderItems = (movies) => {
    return movies.map((item, index) => <li key={index}>{item}</li>)
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
