import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";

export default function App() {
    // Estableciendo rutas a vistas Home, pokemones y pokemon seleccionado con parametro :name
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/pokemones" element={<Pokemones />} />
                    <Route path="/pokemones/:name" element={<Pokemones />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

