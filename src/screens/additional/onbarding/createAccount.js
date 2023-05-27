import React, { useRef, useState } from "react";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LogIn from "./login";
import campkunsLogo from '../../../data/static/assets/campkuns-logo-draft1.svg'
import { message } from "antd";
import { LoaderTrans } from "../components/loader";

function CreateAccount() {

    const [formData, setFormData] = useState({});
    const navigate = useNavigate();
    const [password, setPassword] = useState('')
    const [repassword, setRePassword] = useState('')
    const [submitTgl, setSubmitTgl] = useState(false)

    const createAccount = () => {
        setFormData({ ...formData })
        axios
            .post("http://192.168.8.100:5000/v1/auth/register", formData)
            .then((result) => {
                console.log(result);
                setFormData({})
                alert('Welcome')
                navigate('/')

                const token = result.data.tokens.access.token
                const user = result.data.user
                const username = result.data.user.name

                localStorage.setItem('token', token)
                localStorage.setItem('isLoggedIn', 'true')
                localStorage.setItem('user', JSON.stringify(user))
                localStorage.setItem('username', username)

                window.location.reload()

            })
            .catch((error) => {
                alert(error.response.data.message);
                console.log(error)
                console.log(formData);
            }
            );
    }

    return (
        <>
            <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', width: '100vw', maxWidth: '470px', margin: '0 auto', height: '90vh' }}>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>

                    <img src={campkunsLogo} alt="logo" style={{ margin: 'auto', position: 'absolute', top: '40px' }} />

                    <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                        <div style={{ background: '#171717', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '15px', padding: '40px 10px', marginTop: '0px' }}>
                            <h1 style={{ color: '#FFE7D9', fontWeight: '600', fontFamily: 'Poppins', fontSize: '20px', marginBottom: '40px', userSelect: 'none' }}>Welcome to Campkuns</h1>

                            <form style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', padding: '0 20px' }}>

                                <div>
                                    <input style={{ height: '45px', width: '100%', borderRadius: '12px', border: '2px solid #33302E', background: 'none', color: '#fef3ec', fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', padding: '15px', outline: 'none', marginBottom: '15px' }} type="text" placeholder="Username" onChange={(e) => { setFormData({ ...formData, username: e.target.value }); setFormData({ ...formData, name: e.target.value }) }} />
                                    <input style={{ height: '45px', width: '100%', borderRadius: '12px', border: '2px solid #33302E', background: 'none', color: '#fef3ec', fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', padding: '15px', outline: 'none', marginBottom: '15px' }} type="email" placeholder="Email" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                    <input style={{ height: '45px', width: '100%', borderRadius: '12px', border: '2px solid #33302E', background: 'none', color: '#fef3ec', fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', padding: '15px', outline: 'none', marginBottom: '15px' }} type="password" placeholder="Password" onChange={(e) => { setPassword(e.target.value); }} />
                                    <input style={{ height: '45px', width: '100%', borderRadius: '12px', border: '2px solid #33302E', background: 'none', color: '#fef3ec', fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', padding: '15px', outline: 'none' }} type="password" placeholder="Re-enter password" onChange={(e) => { setFormData({ ...formData, password: e.target.value }) }} />
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', margin: '20px 0', fontSize: '11px', color: '#555555', fontFamily: 'neue-haas-grotesk-text', textDecoration: 'none', userSelect: 'none' }}>
                                    By tapping <b style={{ marginLeft: '3px', fontWeight: '600' }}> Join Campkuns</b>, you agree to our <Link style={{ margin: '0 3px', color: '#FFE7D9', fontFamily: 'Poppins', textDecoration: 'none', fontWeight: '500' }} to='/legal/Terms'>Terms</Link> and <Link style={{ color: '#FFE7D9', fontFamily: 'Poppins', textDecoration: 'none', fontWeight: '500' }} to='/legal/Terms'>Privacy and Cookie Policy.</Link>
                                    You may receive email notifications from us as you can opt out any time.
                                </div>

                                <button onClick={
                                    (e) => {
                                        e.preventDefault()
                                        createAccount()
                                        console.log(formData)
                                        // logInUser()
                                        setFormData({ ...formData })
                                        setSubmitTgl(true)
                                    }

                                } style={{ background: '#F3761C', color: '#FFE7D9', height: '45px', width: '100%', border: 'none', borderRadius: '12px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '14px', marginTop: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <div style={{ display: submitTgl ? 'none' : 'block' }}>Join Campkuns</div>
                                    <div style={{ display: submitTgl ? 'block' : 'none' }}><LoaderTrans /></div>
                                </button>

                            </form>
                        </div>
                    </div>

                    <div style={{ position: 'absolute', bottom: '0px', borderTop: 'solid 0.5px #343434', width: '90vw', maxWidth: '470px', padding: '30px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '13px' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <Link style={{ color: '#FFE7D9', textDecoration: 'none', fontWeight: '500', fontFamily: 'Poppins', }} to="/login">
                                Login instead
                            </Link>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center' }}>

                            <Link style={{ color: '#FFE7D9', textDecoration: 'none', fontWeight: '500', fontFamily: 'Poppins', }} to="/forgotPassword">
                                I forgot my password
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default CreateAccount