import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import './AppLess.css'
import store from "./redux/reduxStore";
import {Provider} from "react-redux";




let renderEntireTree = () => {
    ReactDOM.render(
            <Provider store={store}>
                <App/>
            </Provider>,
        document.getElementById('root')
    );

};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
