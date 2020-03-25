export const toggleListReducer = (state = 'list', action) => {
    if(action.type === 'TOGGLE_BETWEEN_LIST_AND_EACHNEWS'){
        return action.payload;
    }
    return state;
}