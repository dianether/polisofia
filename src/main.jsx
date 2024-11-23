import React from 'react';
import ReactDOM from 'react-dom/client'; // Importa desde react-dom/client
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './Firebase/firebase'

const root = ReactDOM.createRoot(document.getElementById('root')); // Usa createRoot
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
);
