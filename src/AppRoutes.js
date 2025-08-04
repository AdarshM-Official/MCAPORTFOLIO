import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Index from "./pages/index.js";


const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Welcome />} />
            <Route exact path="/index" element={<Index />} />
        </Routes>
    );
};

export default AppRoutes;
