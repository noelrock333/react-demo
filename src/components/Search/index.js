import React, { Component } from 'react';
import { connect } from 'react-redux';
import getResults from '../../redux/actions/getResults';
import { bindActionCreators } from 'redux';

class Search extends Component {
  state = {
    search: ''
  }

  handleInputChagne = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  _onSubmit = (event) => {
    event.preventDefault();
    const { search } = this.state;
    this.props.getResults(search);
  }

  render() {
    const { search } = this.state;
    return (
      <form onSubmit={this._onSubmit}>
        <input
          type="text"
          onChange={this.handleInputChagne}
          value={search}
          placeholder="Encuentra tu pelicula"
          />
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getResults
  }, dispatch)
}

export default connect(null, mapDispatchToProps)(Search)
