export const showEachNewsReducer = (state = {}, action) => {
    if(action.type === 'SHOW_EACH_NEWS'){
        return action.payload;
    }
    return state;
}