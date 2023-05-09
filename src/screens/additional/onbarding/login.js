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
            url: 'http://110.0.0.106:5000/v1/auth/login',
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
        <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', width: '100vw', maxWidth: '470px', margin: '0 auto', height: '100vh' }}>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ background: '#171717' }}>
                        <h1 style={{ color: '#FFE7D9', fontWeight: '600', fontFamily: 'Poppins', fontSize: '20px' }}>Log in</h1>

                        <form style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center' }}>

                            <div>
                                <input style={{ height: '45px', width: '100%', borderRadius: '12px', border: '2px solid #33302E', background: 'none', color: '#fef3ec', fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', padding: '15px', outline: 'none' }} type="text" placeholder="username or email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                <input style={{ height: '45px', width: '100%', borderRadius: '12px', border: '2px solid #33302E', background: 'none', color: '#fef3ec', fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', padding: '15px', outline: 'none' }} type="password" placeholder="password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                            </div>

                            <div style={{ display: 'flex' }}>
                                <input style={{ outline: 'none', background: 'none' }} type="checkbox" placeholder="Remember me" />Remember me
                            </div>

                            <button onClick={
                                (e) => {
                                    e.preventDefault()
                                    console.log(formData)
                                    // logInUser()
                                    accessLogin()
                                }

                            } style={{ background: '#F3761C', color: '#FFE7D9', height: '45px', width: '100%', border: 'none', borderRadius: '12px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '14px' }}>Log in</button>

                        </form>
                    </div>
                </div>
                <Link to="/create">
                    Create Account
                </Link>
            </div>
        </div>
    )
}

export default LogIn