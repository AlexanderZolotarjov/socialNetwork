import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addPost, changeAreaPost, addChat, changeAreaChat } from './redux/state';

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App state={state} addpost={addPost} changeareapost={changeAreaPost} addchat={addChat} changeareachat={changeAreaChat} />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
