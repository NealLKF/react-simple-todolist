import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TodoList from './pages/TodoList';
import '@fortawesome/fontawesome-free/js/all.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TodoList toast={toast}/>
    <ToastContainer
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss={false}
      draggable={false}
      pauseOnHover
      theme="dark" />
  </React.StrictMode>
);