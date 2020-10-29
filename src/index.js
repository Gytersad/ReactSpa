import React from 'react';
import ReactDOM from 'react-dom';
import './AppLess.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hi', likesCount: 12},
    {id: 2, message: 'Yo', likesCount: 13}
]

let dialogs = [
    {id: 1, name: 'Iakov'},
    {id: 2, name: 'Dima'},
    {id: 3, name: 'Grisha'},
    {id: 4, name: 'Serega'}
]


let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'Yo'},
    {id: 3, message: 'Pog'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
