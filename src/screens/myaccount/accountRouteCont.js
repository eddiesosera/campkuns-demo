import React from 'react'
import { NavLink } from 'react-router-dom'

function AccountRouteCont() {
    return (
        <div style={{ height: '60px', borderTop: '1px solid #292929', borderBottom: '1px solid #292929', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>
            <NavLink to='/account/'>
                <i class="ri-layout-grid-line" style={{ fontSize: '20px', color: '#685c55' }}></i>
            </NavLink>
            <NavLink to='/account/'>
                <i class="ri-layout-bottom-2-line" style={{ fontSize: '20px', color: '#685c55' }}></i>
            </NavLink>
            <i class="ri-collage-line" style={{ fontSize: '20px', color: '#685c55' }}></i>
        </div>
    )
}

export default AccountRouteCont