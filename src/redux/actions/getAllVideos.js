import axios from 'axios';

function getAllVideos() {
  return async (dispatch) => {
    try {
      let request = await axios.get('https://taller-node.herokuapp.com/videos/list');
      let { data } = request;
      let movies = data.map(item => {
        return {
          id: item.id,
          title: item.title,
          imageUrl: item.image,
          videoUrl: item.url
        }
      })
      dispatch({ type: 'GET_ALL_VIDEOS', payload: movies });
    } catch(error) {
      console.log(error);
    }
  }
}

export default getAllVideos;