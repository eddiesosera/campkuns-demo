import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHouse, faSquarePlus } from '@fortawesome/free-solid-svg-icons';
import 'remixicon/fonts/remixicon.css'
import { Link, NavLink } from "react-router-dom";
import Home from "../screens/home";
import Upload from "../screens/upload";
import Stats from "../screens/stats";
import Account from "../screens/account";

function BottomBar() {

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
            <NavLink to="/" style={linkStyle}>
                <div className="iconNav" style={routeStyle}>
                    <i class="ri-sparkling-fill" style={{ fontSize: '24px' }}></i>
                    Home
                </div>
            </NavLink>
            <NavLink to="/connect" style={linkStyle}>
                <div className="iconNav" style={routeStyle}>
                    < i class="ri-speak-line" style={{ fontSize: '24px' }}></i>
                    Connect
                </div>
            </NavLink>
            <NavLink to="/upload" style={linkStyle}>
                <div className="iconNav" style={routeStyle}>
                    < i class="ri-add-box-fill" style={{ fontSize: '36px' }}></i>

                </div>
            </NavLink>
            <NavLink to="/stats" style={linkStyle}>
                <div className="iconNav" style={routeStyle}>
                    < i class="ri-heart-line" style={{ fontSize: '24px' }}></i>
                    Engaged
                </div>
            </NavLink>
            <NavLink to="/account" style={linkStyle}>
                <div className="iconNav" style={routeStyle}>
                    <i class="ri-user-4-line" style={{ fontSize: '24px' }}></i>
                    Me
                </div>
            </NavLink>

        </div>
    )
}

export default BottomBar