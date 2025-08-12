import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/index.js";
import Teachers from "./pages/teachers.js";
import Gallery from "./pages/gallery.js";


const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/teachers" element={<Teachers />} />
            <Route path="/gallery" element={<Gallery />} />
            {/* Add more routes as needed */}
        </Routes>
    );
};

export default AppRoutes;
