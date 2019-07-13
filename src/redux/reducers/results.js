const defaultState = [];

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case 'findResults':
            console.log('findResults reducer');
            return payload.map(item => {
                return {
                  id: item.id,
                  title: item.title,
                  imageUrl: item.image,
                  videoUrl: item.url
                }
              });
        default:
            return state;
    }
}

export default reducer;