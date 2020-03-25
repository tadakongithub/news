import newsapi from '../apis/newsapi';

export const fetchNews = (string) => {
    return async (dispatch, getState) => {
        //get today's date
        let today = new Date();
        let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const url = `?q=${string}&from=${date}&sortBy=popularity&apiKey=2d0b01e1b28a4ab386a4ca788fcaa4d5`;

        //API call
        const response = await newsapi.get(url);
        
        dispatch({type: 'FETCH_NEWS', payload: response.data.articles});
    }
}

export const handleTypingSearchString = (string) => {
    return {
        type: 'HANDLE_TYPING_SEARCH_STRING',
        payload: string
    }
}

export const showEachNews = (news) => {
    return {
        type: 'SHOW_EACH_NEWS',
        payload: news
    }
}

export const toggleBetweenListAndEachNews = (list_or_eachNews) => {
    return {
        type: 'TOGGLE_BETWEEN_LIST_AND_EACHNEWS',
        payload: list_or_eachNews
    }
}