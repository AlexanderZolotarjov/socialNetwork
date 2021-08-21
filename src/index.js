import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, changeAreaPost, addChat, changeAreaChat, getRerenderEntireTree } from './redux/state';





let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addpost={addPost} changeareapost={changeAreaPost} addchat={addChat} changeareachat={changeAreaChat} />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

getRerenderEntireTree(rerenderEntireTree);

rerenderEntireTree(state);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
