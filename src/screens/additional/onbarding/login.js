import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
//import campkunsLogo from '../data/static/assets/campkuns-logo-draft1.svg'
import campkunsLogo from '../../../data/static/assets/campkuns-logo-draft1.svg'
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
        <>

            <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', width: '100vw', maxWidth: '470px', margin: '0 auto', height: '100vh' }}>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>

                    <img src={campkunsLogo} alt="logo" style={{ margin: 'auto', position: 'absolute', top: '40px' }} />

                    <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                        <div style={{ background: '#171717', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '15px', padding: '40px 20px' }}>
                            <h1 style={{ color: '#FFE7D9', fontWeight: '600', fontFamily: 'Poppins', fontSize: '20px', marginBottom: '40px' }}>Log in</h1>

                            <form style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', padding: '0 20px' }}>

                                <div>
                                    <input style={{ height: '45px', width: '100%', borderRadius: '12px', border: '2px solid #33302E', background: 'none', color: '#fef3ec', fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', padding: '15px', outline: 'none', marginBottom: '15px' }} type="text" placeholder="username or email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
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

                    <div style={{ position: 'absolute', bottom: 60, borderTop: 'solid 0.5px #343434', width: '100vw', maxWidth: '470px', padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '13px' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <Link style={{ color: '#FFE7D9', textDecoration: 'none', fontWeight: '600', fontFamily: 'Poppins', }} to="/create">
                                I forgot my login details
                            </Link>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <div style={{ color: '#474747', fontFamily: 'Montserrat', fontWeight: '500', marginRight: '5px' }}>
                                Not a memeber yet?
                            </div>
                            <Link style={{ color: '#FFE7D9', textDecoration: 'none', fontWeight: '600', fontFamily: 'Poppins', }} to="/create">
                                Join Campkuns
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LogIn