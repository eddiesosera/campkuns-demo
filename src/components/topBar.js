import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import campkunsLogo from '../data/static/assets/campkuns-logo-draft1.svg'
import SelectCategory from "../screens/additional/popup/home/selectCat";

function TopBar(e) {

    e = false
    const [topPos, setTopPos] = useState('0')

    const topBarStyle = {
        height: '60px', width: '-webkit-fill-available', background: '#151515f5', color: 'white', transition: 'top 0.5s cubic-bezier(0.2, 0.55, 0.90, 0.35)',
        display: 'flex', alignItems: 'center', position: 'fixed', padding: '0 15px', backdropFilter: 'blur(10px)', top: topPos
    }
    const linkStyle = { textDecoration: 'none', textDecorationLine: 'none', zIndex: 99, position: 'relative', }

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


    var prevScrollpos = window.scrollY;
    const windowScrll = function () {
        var currentScrollPos = window.scrollY;
        if (prevScrollpos > currentScrollPos) {
            document.getElementById("topBar-container").style.top = topPos;
            document.getElementById("cat_pinIcon").style.top = topPos;
            setTopPos('0')
        } else {
            document.getElementById("topBar-container").style.top = topPos;
            document.getElementById("cat_pinIcon").style.top = topPos;
            setTopPos('-60px')
        }
        prevScrollpos = currentScrollPos;
    }

    window.addEventListener('scroll', windowScrll)



    return (
        <>
            <div className="topBar" id="topBar" style={linkStyle}>

                <div className="topBar-container" id="topBar-container" style={topBarStyle}>

                    <Link to="/" style={{
                        margin: '0 auto', textDecoration: 'none', fontFamily: 'Montserrat', fontSize: '11px', fontWeight: '500',
                        display: 'flex', justifyContent: 'center', color: '#848484'
                    }}>
                        <img src={campkunsLogo} alt="logo" />beta
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