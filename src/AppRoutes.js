import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/index.js";


const AppRoutes = () => {
    return (
        <Routes>
            {/* <Route exact path="/" element={<Welcome />} /> */}
            <Route exact path="/" element={<Index />} />
            <Route path="/teachers" element={<techers />} />
        </Routes>
    );
};

export default AppRoutes;
