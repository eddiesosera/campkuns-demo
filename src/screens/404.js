import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error404() {

    const navigate = useNavigate()

    return (
        <div style={{ maxWidth: '470px', width: '100vw', margin: 'auto auto', }}>
            <div className="wrap" style={{
                height: '200px',
                position: 'absolute', top: '0', bottom: '0', left: '0', right: '0', justifyContent: 'space-evenly',
                display: 'flex', alignItems: 'center', flexDirection: 'column',
                background: '#151515', width: '93vw', maxWidth: '470px', margin: 'auto auto', borderRadius: '15px'
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div className="heading" style={{
                        color: '#FFE7D9', fontFamily: 'Poppins', fontSize: '20px', fontWeight: '400',
                        marginBottom: '20px', display: 'flex'
                    }}>
                        <i className="ri-error-warning-line"></i>
                        <div style={{ fontWeight: '600', marginLeft: '10px' }}>Page not found</div>
                    </div>
                </div>


                <button style={{
                    width: '72vw', maxWidth: '400px', background: '#F3761C', borderRadius: '12px', border: 'none', height: '45px',
                    fontFamily: 'Poppins', fontWeight: '600', fontSize: '14px', color: '#FFE7D9'
                }} onClick={(e) => { navigate('/') }}>
                    Go home
                </button>
            </div>
        </div>
    )
}

export default Error404