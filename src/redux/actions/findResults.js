import axios from 'axios';
// Action creator
export const type = 'findResults';

const findResults = (text) => {
    return async dispatch => {
        try {
            let request = await axios.get('https://taller-node.herokuapp.com/videos/list');
            let { data } = request;
            let results = data;
            if (text) {
                results = data.filter(item => item.title.includes(text))
            }
            dispatch({ type, payload: results });
        } catch(error) {
            console.log(error);
        }
    }
}

export default findResults;
