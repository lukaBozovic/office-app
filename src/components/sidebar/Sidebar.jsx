import React from 'react';
import "./Sidebar.css"
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaCog } from 'react-icons/fa';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <img src="logo.png" alt="" className={"logo"}/>
            <nav>
                <ul>
                    <li>
                        <Link to="/">
                            <FaHome /> Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/profile">
                            <FaUser /> Profile
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings">
                            <FaCog /> Settings
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;