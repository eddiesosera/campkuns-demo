import React from 'react';
import './loader.css'

export const Loader = () => {
    return (
        <div style={{ width: '100%', height: '100vh', background: 'rgba(21, 21, 21, 0.96)', backdropFilter: 'blur()4px', marginTop: '-60px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'fixed', zIndex: '101' }}>
            <div style={{ color: '#fef3ec', marginBottom: '50px', fontFamily: 'Montserrat', fontWeight: '600' }}>Just a sec</div>
            <div class="custom-loader"></div>
        </div>
    )
}
