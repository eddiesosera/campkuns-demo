import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
// import axios from 'a?xios';

function LogIn() {

    const [formData, setFormData] = useState({})
    const navigate = useNavigate()

    const nav = () => {
        navigate('/')
        window.location.reload()
    }

    const accessLogin = () => {


        let data = JSON.stringify({
            "email": formData.email,
            "password": formData.password
            //"password": "12345678l"
        });

        let config = {
            method: 'POST',
            maxBodyLength: Infinity,
            url: 'http://10.0.0.106:5000/v1/auth/login',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios.request(config)
            .then((response) => {
                const token = response.data.tokens.access.token
                const user = response.data.user

                localStorage.setItem('token', token)
                localStorage.setItem('isLoggedIn', 'true')
                localStorage.setItem('user', JSON.stringify(user))

                navigate('/')

            })
            .catch((error) => {
                console.log(error);
            });


    }


    // const logInUser = () => {
    //     axios.get('http://10.0.0.106:5000/v1/users')
    //         .then((user) => {
    //             console.log(user.data.results)

    //             let users = user.data.results

    //             for (let i = 0; users.length > 0; i++) {
    //                 users[i].email === formData.email ? nav() : alert('wrong')
    //             }
    //         })
    // }


    return (
        <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center' }}>
            <h1>Log in</h1>

            <form style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>

                <input type="text" placeholder="username or email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                <input type="password" placeholder="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                <input type="radio" placeholder="Remember me" />Remember me

                <button onClick={
                    (e) => {
                        e.preventDefault()
                        console.log(formData)
                        // logInUser()
                        accessLogin()
                    }

                }>Log in</button>

            </form>
            <Link to="/create">
                Create Account
            </Link>
        </div>
    )
}

export default LogIn