import React from 'react';
import {Navigate} from 'react-router-dom'
import {ROUTES, STORAGE_KEYS} from "../utils/consts";
import Sidebar from "../components/sidebar/Sidebar";
import Navbar from "../components/navbar/Navbar";
import "../assets/Layout.css"

const ProtectedRoute = ({children, navbarName}) => {
    if (localStorage.getItem(STORAGE_KEYS.JWT))
        return (
            <div className={"main-layout"}>
                <Sidebar />
                <div className={"page-layout"}>
                    <Navbar name={navbarName}/>
                    <main>{children}</main>
                </div>
            </div>
        )
    return (
        <Navigate to={ROUTES.login}/>
    )
    ;
};

export default ProtectedRoute;