import React from 'react';
import Item from './item';
import axios from 'axios';

class Movies extends React.Component {
  state = {
    movies: [],
    movie: ''
  }

  async componentDidMount() {
    try {
      let request = await axios.get('https://taller-node.herokuapp.com/videos/list');
      let { data } = request;
      this.setState({
        movies: data.map(item => {
          return {
            id: item.id,
            title: item.title,
            imageUrl: item.image,
            videoUrl: item.url
          }
        })
      })
      console.log(data);
    } catch(error) {
      console.log(error);
    }
  }

  componentWillUnmount() {
    console.log("Adios mundo cruel")
  }

  renderItems = (movies) => {
    return movies.map((item, index) => <Item key={index} movie={item}>
      <code>Aqui va codigo</code>
      <a href="">un link</a>
    </Item>)
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
        <div className="row justify-content-center">
          <form onSubmit={this._onSubmit} className="mb-4 input-group col-sm-5">
            <input
              type="text"
              name="movie"
              className="input-group-text"
              onChange={this._onInputMovieChange}
              value={this.state.movie}/>
            <input type="submit" value="Agregar" className="input-group-button"/>
          </form>
        </div>
        <div className="row">
          {this.renderItems(movies)}
        </div>
      </div>
    );
  } 

}

export default Movies;
