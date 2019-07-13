import React from 'react';
import { connect } from 'react-redux';
import findResults from '../../redux/actions/findResults';

class Search extends React.Component {
  state = {
    search: ''
  }

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  }

  _onSubmit = (event) => {
    event.preventDefault();
    this.props.findResults(this.state.search)
    // console.log('Submit')
  }

  render() {
    const { search } = this.state;
    return (
      <form onSubmit={this._onSubmit}>
        <label htmlFor="search">Buscar: </label>
        <input id="search" type="text" onChange={this.handleInputChange} value={search} />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    findResults: (text) => dispatch(findResults(text))
  }
}

export default connect(null, mapDispatchToProps)(Search);