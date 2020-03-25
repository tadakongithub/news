export const fetchNewsReducer = (state = [], action) => {
    if(action.type === 'FETCH_NEWS'){
        return action.payload
    }
    return state;
}

