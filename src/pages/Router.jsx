import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {ROUTES} from "../utils/consts";
import ProtectedRoute from "./ProtectedRoute";
import Login from "./login/Login";
import Users from "./users/Users";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.login} element={<Login/>}/>
                <Route path={ROUTES.home} element={<ProtectedRoute> <h1>Komponenta za home</h1></ProtectedRoute>}/>
                <Route path={ROUTES.users} element={<ProtectedRoute><Users /></ProtectedRoute>}/>
                <Route path="*" element={<h1>404</h1>}/>
            </Routes>
        </BrowserRouter>
    );
};

export default Router;