import React, { useRef, useState } from "react";
import axios from 'axios';
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import LogIn from "./login";
import campkunsLogo from '../../../data/static/assets/campkuns-logo-draft1.svg'

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
            <div style={{ display: 'flex', alignContent: 'center', alignItems: 'center', width: '100vw', maxWidth: '470px', margin: '0 auto', height: '90vh' }}>

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', }}>

                    <img src={campkunsLogo} alt="logo" style={{ margin: 'auto', position: 'absolute', top: '40px' }} />

                    <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                        <div style={{ background: '#171717', display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '15px', padding: '40px 10px', marginTop: '0px' }}>
                            <h1 style={{ color: '#FFE7D9', fontWeight: '600', fontFamily: 'Poppins', fontSize: '20px', marginBottom: '40px', userSelect: 'none' }}>Welcome to Campkuns</h1>

                            <form style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', padding: '0 20px' }}>

                                <div>
                                    <input style={{ height: '45px', width: '100%', borderRadius: '12px', border: '2px solid #33302E', background: 'none', color: '#fef3ec', fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', padding: '15px', outline: 'none', marginBottom: '15px' }} type="text" placeholder="username" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                    <input style={{ height: '45px', width: '100%', borderRadius: '12px', border: '2px solid #33302E', background: 'none', color: '#fef3ec', fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', padding: '15px', outline: 'none', marginBottom: '15px' }} type="email" placeholder="email" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                                    <input style={{ height: '45px', width: '100%', borderRadius: '12px', border: '2px solid #33302E', background: 'none', color: '#fef3ec', fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', padding: '15px', outline: 'none', marginBottom: '15px' }} type="password" placeholder="password" onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                    <input style={{ height: '45px', width: '100%', borderRadius: '12px', border: '2px solid #33302E', background: 'none', color: '#fef3ec', fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', padding: '15px', outline: 'none' }} type="password" placeholder="Re-enter password" onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', margin: '20px 0', fontSize: '11px', color: '#555555', fontFamily: 'neue-haas-grotesk-text', textDecoration: 'none', userSelect: 'none' }}>
                                    By tapping <b style={{ marginLeft: '3px', fontWeight: '600' }}> Join Campkuns</b>, you agree to our <Link style={{ margin: '0 3px', color: '#FFE7D9', fontFamily: 'Poppins', textDecoration: 'none', fontWeight: '500' }} to='/legal/Terms'>Terms</Link> and <Link style={{ color: '#FFE7D9', fontFamily: 'Poppins', textDecoration: 'none', fontWeight: '500' }} to='/legal/Terms'>Privacy and Cookie Policy.</Link>
                                    You may receive email notifications from us as you can opt out any time.
                                </div>

                                <button onClick={
                                    (e) => {
                                        e.preventDefault()
                                        console.log(formData)
                                        // logInUser()
                                    }

                                } style={{ background: '#F3761C', color: '#FFE7D9', height: '45px', width: '100%', border: 'none', borderRadius: '12px', fontFamily: 'Poppins', fontWeight: '600', fontSize: '14px', marginTop: '20px' }}>
                                    Join Campkuns
                                </button>

                            </form>
                        </div>
                    </div>

                    <div style={{ position: 'absolute', bottom: '0px', borderTop: 'solid 0.5px #343434', width: '90vw', maxWidth: '470px', padding: '30px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '13px' }}>
                        <div style={{ marginBottom: '15px' }}>
                            <Link style={{ color: '#FFE7D9', textDecoration: 'none', fontWeight: '500', fontFamily: 'Poppins', }} to="/login">
                                Login Instead
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