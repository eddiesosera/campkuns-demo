import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHouse, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import 'remixicon/fonts/remixicon.css'
import { Link, NavLink } from "react-router-dom";
import Home from "../screens/home";
import Upload from "../screens/upload";
import Stats from "../screens/stats";
import Account from "../screens/account";

function BottomBar() {

    console.log(window.location.pathname)

    var currentPage = window.location.pathname
    const [home, setHome] = useState('ri-sparkling-fill')
    const [expo, setExpo] = useState('ri-planet-line')

    useEffect(() => {

        if (window.location.pathname === '/') { setHome('ri-sparkling-fill') }
        else {
            setHome('ri-sparkling-line'); alert('Sparkling')
        }
        if (window.location.pathname === '/connect') { setExpo('ri-planet-fill') }
        else {
            setExpo('ri-planet-line'); alert('Planet')
        }

    }, [home, expo])

    const changeHomeIcon = () => {
        if (window.location.pathname === '/') { setHome('ri-sparkling-fill'); alert('Sparkling') }
        else {
            setHome('ri-sparkling-line')
        }
    }
    const changePlanetIcon = () => {
        if (window.location.pathname === '/connect') { setExpo('ri-planet-fill'); alert('Planet') }
        else {
            setExpo('ri-planet-line')
        }
    }

    const navPage = [
        {

        }
    ]

    //STYLE
    const bottomBarStyle = {
        display: 'flex', justifyContent: "space-around",
        alignItems: 'center', height: '80px', width: '100%', backgroundColor: '#1F1E1D', color: 'white',
        fontFamily: 'Poppins', fontSize: '12px', fontWeight: '500', position: 'fixed', bottom: '0', zIndex: '99'
    };
    const linkStyle = { textDecoration: 'none', textDecorationLine: 'none', color: '#685C55' }
    const routeStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center' };

    return (
        <div className="bottomBar-container" style={bottomBarStyle}>
            <NavLink to="/" style={linkStyle} >
                <div className="iconNav" style={routeStyle} onClick={changeHomeIcon}>
                    <i className={home} style={{ fontSize: '24px' }}></i>
                    Home
                </div>
            </NavLink>
            <NavLink to="/connect" style={linkStyle}>
                <div className="iconNav" style={routeStyle} onClick={changePlanetIcon}>
                    < i className={expo} style={{ fontSize: '24px' }}></i>
                    Expos
                </div>
            </NavLink>
            <NavLink to="/upload" style={linkStyle}>
                <div className="iconNav" style={routeStyle}>
                    < i className="ri-add-box-fill" style={{ fontSize: '36px' }}></i>

                </div>
            </NavLink>
            <NavLink to="/stats" style={linkStyle}>
                <div className="iconNav" style={routeStyle}>
                    < i className="ri-heart-line" style={{ fontSize: '24px' }}></i>
                    Engage
                </div>
            </NavLink>
            <NavLink to="/account" style={linkStyle}>
                <div className="iconNav" style={routeStyle}>
                    <i className="ri-user-4-line" style={{ fontSize: '24px' }}></i>
                    Me
                </div>
            </NavLink>

        </div>
    )
}

export default BottomBar