import React, {useState} from 'react';
import {login} from "../../services/user";
import {Routes, useNavigate} from 'react-router-dom'
import {ROUTES, STORAGE_KEYS} from "../../utils/consts";
import "./Login.css"

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const onFinish = (e) => {
        e.preventDefault();
        login({email, password}).then(response => {
            localStorage.setItem(STORAGE_KEYS.JWT, response.data.access_token);
            localStorage.setItem(STORAGE_KEYS.REFRESH_TOKEN, response.data.refresh_token)
            //save user
           //save token
            //navigate(-1) back
            navigate(ROUTES.home)
        });
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <form onSubmit={onFinish} className={"login-form"}>
            <img src="logo.png"/>
            <label>
                Email:
                <input type="text" value={email} onChange={event => setEmail(event.target.value)} />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} />
            </label>
            <button type="submit" className={"login-button"}>Log in</button>
            <a href="/forgot-password">Forgot password?</a>
        </form>
    );
};

export default Login;