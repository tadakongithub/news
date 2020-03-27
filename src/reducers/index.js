import { combineReducers } from 'redux';
import { fetchNewsReducer } from './fetchNewsReducer';
import { handleChangeReducer } from './handleChangeReducer';




export default combineReducers({
    news: fetchNewsReducer,
    searchString: handleChangeReducer
});