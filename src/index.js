import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';
import 'firebase/auth';
import {loadState, saveState} from './localStorage'



const persistedState = loadState();
const store = createStore(reducers, persistedState, applyMiddleware(thunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

store.subscribe(() => {
	saveState(store.getState());
})

ReactDOM.render(
    <Provider store={store}>
            <App />
    </Provider>,
    document.querySelector('#root')
)
