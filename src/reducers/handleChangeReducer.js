export const handleChangeReducer = (state = '', action) => {
    if(action.type === 'HANDLE_TYPING_SEARCH_STRING'){
        return action.payload;
    }
    return state;
}