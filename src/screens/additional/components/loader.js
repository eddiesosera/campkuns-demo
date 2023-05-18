import React from 'react';
import './loader.css'

export const Loader = () => {
    return (
        <div style={{ width: '100%', height: '100vh', background: 'rgba(21, 21, 21, 0.96)', backdropFilter: 'blur(4px)', marginTop: '-60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'fixed', zIndex: '101' }}>
            <div class="custom-loader"></div>
            <div style={{ color: '#ed6d22', marginTop: '15px', fontFamily: 'Poppins', fontWeight: '500' }}>Just a sec</div>
        </div>
    )
}

export const LoaderTrans = () => {
    return (
        <div style={{ width: '30px', height: '30px', background: 'none', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <div class="small-loader-trans"></div>
        </div>
    )
}
