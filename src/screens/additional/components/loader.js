import React from 'react';
import './loader.css'

export const Loader = () => {
    return (
        <div style={{ width: '100%', height: '100vh', background: 'rgba(21, 21, 21, 0.98)', marginTop: '-60px', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'fixed', zIndex: '101' }}>
            <div class="custom-loader"></div>
        </div>
    )
}
