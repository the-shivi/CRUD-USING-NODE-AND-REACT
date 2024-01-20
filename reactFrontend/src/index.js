import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Post from './Post';
import Delete from './Delete';
import Update from './Update';
import Fetch from './Fetch'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <Insert/> */}
    {/* <Post/> */}
    {/* <Delete/> */}
    {/* <Update/> */}
    {/* <Fetch/> */}
  </React.StrictMode>
);
