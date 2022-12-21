import React from 'react';
import CommonTable from "../../components/tables/CommonTable";
import "../../assets/Header.css"
import "./Users.css"

const Users = () => {
    return (
        <div>
            <div className={"users-container"}>
                <CommonTable />
            </div>
        </div>
    );
};

export default Users;