import React, { useRef, useState } from "react";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LogIn from "./login";

function CreateAccount() {

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleSubmit = () => {
        setFormData({ ...formData })
        axios
            .post("http://10.0.0.106:5000/v1/users", formData)
            .then((result) => {
                console.log(result.data.results);
                setFormData({})
                alert('Suceessful login')
                navigate('/account')
            })
            .catch((error) => {
                alert('Error loggin in...');

            }
            );
    }

    return (
        <>
            <h1>Create Account</h1>

            <form>
                <input type="text" placeholder="name" />
                <input type="text" placeholder="username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="password" />
                <input type="password" placeholder="re-enter password" />
                <input type="radio" placeholder="Remember me" />Remember me

                <button>Create Account</button>

            </form>

            <Link to="/login">
                Login instead
            </Link>
        </>
    )
}

export default CreateAccount