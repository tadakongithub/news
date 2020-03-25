import { combineReducers } from 'redux';
import { fetchNewsReducer } from './fetchNewsReducer';
import { handleChangeReducer } from './handleChangeReducer';
import { showEachNewsReducer } from './showEachNewsReducer';
import { toggleListReducer } from './toggleListReducer';


export default combineReducers({
    news: fetchNewsReducer,
    searchString: handleChangeReducer,
    eachNews: showEachNewsReducer,
    list_or_eachNews: toggleListReducer
});