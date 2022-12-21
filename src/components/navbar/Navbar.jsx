import React from 'react';
import "../../assets/Header.css"
import "./Navbar.css"

const Navbar = ({name}) => {
    return (
        <div className={"navbar-background"}>
            <h1 className={"header"}>
                {name}
            </h1>
        </div>
    );
};

export default Navbar;