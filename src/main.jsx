import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import './css/index.css';
import App from './App.jsx';
import { FavoritesProvider } from "./context/FavoritesContext";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <FavoritesProvider>
    <App />
    </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>,
)

