import * as serviceWorker from './serviceWorker';
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import './AppLess.css'
import store from "./redux/state";




let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={ state } dispatch={store.dispatch.bind(store)} store={store}/>
        </React.StrictMode>,
        document.getElementById('root')
    );

};

renderEntireTree(store.getState());

store.subscribe(renderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
