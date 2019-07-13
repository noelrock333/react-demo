import React from 'react';
import Item from './item';
import { connect }  from 'react-redux';
import findResults from '../../redux/actions/findResults';
import Search from '../Search';

class Movies extends React.Component {
  state = {
    movies: [],
    movie: ''
  }

  componentDidMount() {
    this.props.findResults();
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
    let movies = this.props.results;
    return (
      <div className="List">
        <Search />
        <div className="row">
          {this.renderItems(movies)}
        </div>
      </div>
    );
  } 

}

// El estado es el contenido de nuestro store
const mapStateToProps = (state) => {
  // state.getState();
  return {
    results: state.results
  } 
}

const mapDispatchToProps = (dispatch) => {
  return {
    findResults: (text) => dispatch(findResults(text))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
