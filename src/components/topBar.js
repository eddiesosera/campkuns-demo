import React, { useState } from "react";
import { Link } from "react-router-dom";
import campkunsLogo from '../data/static/assets/campkuns-logo-draft1.svg'
import SelectCategory from "../screens/additional/popup/home/selectCat";

function TopBar(e) {

    e = false

    const topBarStyle = {
        height: '60px', width: '-webkit-fill-available', backgroundColor: '#1F1E1D', color: 'white',
        display: 'flex', alignItems: 'center', position: 'fixed', top: '0', padding: '0 15px'
    }
    const linkStyle = { textDecoration: 'none', textDecorationLine: 'none', zIndex: 99, position: 'relative' }

    const [categToggle, setCategToggle] = useState(false)
    //Category Toggle
    const [toggle, setToggle] = useState(false)

    const closeCat = () => {
        setToggle(false)
        if (toggle) {
            setToggle(false)
        }
    }
    const openCat = () => {
        setToggle(true)
        if (!toggle) {
            setToggle(true)
        } else {
            setToggle(false)
        }
    }


    const showCateg = () => {
        setCategToggle(!categToggle)
        alert('')
    }

    return (
        <>
            <div className="topBar" style={linkStyle}>
                <div className="topBar-container" style={topBarStyle}>

                    <i class="ri-pushpin-line" style={
                        toggle ? {
                            fontSize: '24px', fontWeight: '500',
                            color: '#FFE7D9', backgroundColor: '#292929', height: '45px', width: '45px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '9px',
                            cursor: 'pointer'
                        }
                            : {
                                fontSize: '24px', fontWeight: '500', height: '45px', width: '45px',
                                display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '9px',
                                cursor: 'pointer'
                            }
                    } onClick={showCateg}></i>
                    <Link to="/" style={{ margin: '0 auto' }}>
                        <img src={campkunsLogo} alt="logo" />jkj
                    </Link>

                </div>
            </div>
            <div style={{ zIndex: 99, position: 'absolute' }}>
                <SelectCategory display={categToggle} />
            </div>
        </>
    )
}

export default TopBar