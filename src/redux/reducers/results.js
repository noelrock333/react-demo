function reducer(currentState = [], { type, payload }) {
  switch(type) {
    case 'SEARCH_POSTS':
      return currentState.filter(item => item.title.toLocaleLowerCase().includes(payload));
    case 'GET_ALL_VIDEOS':
      return [...payload];
    default:
      return currentState;
  }
}

export default reducer;
