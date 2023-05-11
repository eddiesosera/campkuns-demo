import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function AccountRouteCont() {

    const accRoutes = [
        {
            path: '/account/grid-view',
            active: ['ri-layout-grid-fill', '#fbd0b8'],
            inActive: ['ri-layout-grid-line', '#685c55']
        },
        {

            path: '/account/gala-view',
            active: ['ri-box-2-fill', '#fbd0b8'],
            inActive: ['ri-box-2-line', '#685c55']
        },
        {
            path: '/account/gala-view',
            active: ['ri-collage-fill', '#fbd0b8'],
            inActive: ['ri-collage-line', '#685c55']
        },

    ]


    const currentPage = window.location.pathname
    const [selectedPage, setSelectedPage] = useState(accRoutes[0].path)

    useEffect(() => {
        console.log('current tab is ' + selectedPage)
    }, [selectedPage])

    const page = () => {
        setSelectedPage(currentPage)
    }


    return (
        <div style={{ height: '50px', borderTop: '1px solid #292929', borderBottom: '1px solid #292929', display: 'flex', alignItems: 'center', justifyContent: 'space-around' }}>

            {
                accRoutes.map((route) =>
                    <NavLink style={{ textDecoration: 'none' }} to={route.path} >
                        <div onClick={page}>
                            <i className={window.location.pathname === route.path ? route.active[0] : route.inActive[0]} style={{ fontSize: '20px', color: window.location.pathname === route.path ? route.active[1] : route.inActive[1] }}></i>
                        </div>
                    </NavLink>
                )
            }
        </div>
    )
}

export default AccountRouteCont