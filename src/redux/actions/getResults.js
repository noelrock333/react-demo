import axios from 'axios';
function getResults(text) {
  return { type: 'SEARCH_POSTS', payload: text }
}

export default getResults;
