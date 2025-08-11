import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/index.js";
import Teachers from "./pages/teachers.js";


const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/teachers" element={<Teachers />} />
        </Routes>
    );
};

export default AppRoutes;
