import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHouse, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import 'remixicon/fonts/remixicon.css'
import { Link, NavLink } from "react-router-dom";
import Home from "../screens/home";
import Upload from "../screens/upload";
import Stats from "../screens/engage";
import Account from "../screens/account";

function BottomBar() {

    console.log(window.location.pathname)

    const currentPage = window.location.pathname

    //STYLE
    const bottomBarStyle = {
        display: 'flex', justifyContent: "space-around",
        alignItems: 'center', height: '80px', width: '100%', backgroundColor: '#1F1E1D', color: 'white',
        fontFamily: 'Poppins', fontSize: '12px', fontWeight: '500', position: 'fixed', bottom: '0', zIndex: '99'
    };
    const linkStyle = { textDecoration: 'none', textDecorationLine: 'none', color: '#685C55', transition: 'color 0.5s cubic-bezier(0.87, 0, 0.13, 1) 0s' }
    const routeStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center' };


    const navPage = [
        {
            href: '/',
            title: 'Home',
            icon: {
                active: 'ri-sparkling-fill',
                inActive: 'ri-sparkling-line'
            },
            link: linkStyle,
            wrap_style: routeStyle,
            iconSize: '24px',
            class_name: 'navbar_home',
        },
        {
            href: '/expos',
            title: 'Expos',
            icon: {
                active: 'ri-planet-fill',
                inActive: 'ri-planet-line'
            },
            link: linkStyle,
            wrap_style: routeStyle,
            iconSize: '24px',
            class_name: 'navbar_expos',
        },
        {
            href: '/upload',
            title: '',
            icon: {
                active: 'ri-add-circle-fill',
                inActive: 'ri-add-circle-fill'
            },
            link: linkStyle,
            wrap_style: routeStyle,
            iconSize: '36px',
            class_name: 'navbar_upload',
        },
        {
            href: '/engage',
            title: 'Engage',
            icon: {
                active: 'ri-heart-fill',
                inActive: 'ri-heart-line'
            },
            link: linkStyle,
            wrap_style: routeStyle,
            iconSize: '24px',
            class_name: 'navbar_engage',
        },
        {
            href: '/account',
            title: 'Me',
            icon: {
                active: 'ri-user-4-fill',
                inActive: 'ri-user-4-line'
            },
            link: linkStyle,
            wrap_style: routeStyle,
            iconSize: '24px',
            class_name: 'navbar_account',
        }
    ]

    const [selectedPage, setSelectedPage] = useState(navPage[0].title)

    useEffect(() => {
        console.log('Page is ' + selectedPage)
    }, [selectedPage])

    const page = () => {
        setSelectedPage(currentPage)
    }


    return (

        <div className="bottomBar-container" style={bottomBarStyle}>

            {navPage.map(
                (screen) =>
                    <NavLink to={screen.href} style={screen.link} >
                        <div className={screen.class_name} style={screen.wrap_style} onClick={page}>
                            <i
                                className={window.location.pathname === screen.href ? screen.icon.active : screen.icon.inActive}
                                style={{ fontSize: screen.iconSize }} ></i>
                            {screen.title}
                        </div>
                    </NavLink >
            )
            }

        </div >

    )
}

export default BottomBar