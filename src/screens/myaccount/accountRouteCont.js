import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function AccountRouteCont() {

    const accRoutes = [
        {
            path: '/account/grid-view',
            active: ['ri-layout-grid-fill', '#ed6d22'],
            inActive: ['ri-layout-grid-line', '#ad9485']
        },
        {

            path: '/account/exhibit-view',
            active: ['ri-box-2-fill', '#ed6d22'],
            inActive: ['ri-box-2-line', '#ad9485']
        },
        {
            path: '/account/stories-view',
            active: ['ri-sticky-note-fill', '#ed6d22'],
            inActive: ['ri-sticky-note-line', '#ad9485']
        },
        {
            path: '/account/collections-view',
            active: ['ri-collage-fill', '#ed6d22'],
            inActive: ['ri-collage-line', '#ad9485']
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