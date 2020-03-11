import newsapi from '../apis/newsapi';

export const fetchNews = () => {
    return async (dispatch, getState) => {
        const response = await newsapi.get('?q=Apple&apiKey=2d0b01e1b28a4ab386a4ca788fcaa4d5');
        
        dispatch({type: 'FETCH_NEWS', payload: response.data.articles});
    }
}