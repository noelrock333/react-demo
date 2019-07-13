import React from 'react';
import Item from './item';
// import axios from 'axios';
import Search from '../Search';
import { connect } from 'react-redux';
import getAllVideos from '../../redux/actions/getAllVideos';
import { bindActionCreators } from 'redux';

class Movies extends React.Component {
  state = {
    movie: ''
  }

  componentDidMount() {
    this.props.getAllVideos();
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
    let { results } = this.props;
    return (
      <div className="List">
        <div className="row justify-content-center">
          <Search />
        </div>
        <div className="row">
          {this.renderItems(results)}
        </div>
      </div>
    );
  } 

}

const mapStateToProps = (state) => {
  return {
    results: state.results
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getAllVideos
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);
