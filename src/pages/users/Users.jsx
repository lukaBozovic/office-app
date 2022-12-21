import React from 'react';
import CommonTable from "../../components/tables/CommonTable";
import "../../assets/Header.css"
import "./Users.css"

const Users = () => {
    const columns = [
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'First name',
            dataIndex: 'firstName',
            key: 'firstName',
        },
        {
            title: 'Last name',
            dataIndex: 'lastName',
            key: 'lastName',
        },
    ];
    return (
        <div>
            <h1 className={'header'}>
                Korisnici
            </h1>
            <div className={"users-container"}>
                <CommonTable columns={columns}/>
            </div>
        </div>
    );
};

export default Users;