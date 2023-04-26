import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import campkunsLogo from '../../../../data/static/assets/campkuns-logo-draft1.svg'

function SelectCategory({ display }) {

    const [displayCateg, setDisplayCateg] = useState(display)
    const [showCat, setShowCat] = useState('none')

    //HEADER
    const topBarStyle = {
        height: '60px', width: '-webkit-fill-available', backgroundColor: '#1F1E1D', color: 'white',
        display: 'flex', alignItems: 'center', position: 'fixed', top: '0', padding: '0 15px'
    }
    const linkStyle = { textDecoration: 'none', textDecorationLine: 'none' }

    //STYLE 
    const activedCat =
    {
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 'fit-content', height: '36px', padding: '0 15px', border: '2px solid #E55C17',
        margin: '5px', color: '#E55C17', borderRadius: '12px', fontFamily: 'Poppins',
        fontWeight: '600', fontSize: '12px'
    };

    const inActivedCat =
    {
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        width: 'fit-content', height: '36px', padding: '0 15px', border: '1px solid #464646',
        margin: '5px', color: '#9D9D9D', borderRadius: '12px', fontFamily: 'Poppins',
        fontWeight: '600', fontSize: '12px'
    };

    const CategoryOptions = {
        display: 'flex', flexWrap: 'wrap', padding: '0 15px',
        justifyContent: 'flex-start'
    }

    //FUNCTION

    //Select Category
    const [activeCat, setActiveCat] = useState(activedCat)
    const selectCat = (e) => {
        setActiveCat(inActivedCat)

    }

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

        setDisplayCateg(!displayCateg)

    }

    useEffect(() => {
        displayCateg ? setShowCat('block') : setShowCat('none')
    }, [displayCateg])

    const filters = [{ label: 'All', value: 'All' }, { label: 'Illustration', value: 'Illustration' },
    { label: 'Sculpture', value: 'Sculpture' }, { label: 'Paint', value: 'Paint' },
    { label: 'Digital Design', value: 'Digital Design' }, { label: '3D Prints', value: '3D Prints' },
    { label: 'Fine Art', value: 'Fine Art' }]

    const [selectedFilter, setSelectedFilter] = useState(filters[0].value)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        console.log('fetching Data with', selectedFilter)
        //   fetchData(selectedFilter).then((data)=>{
        //     setPosts(data)
        //   }).catch((err)=>{
        //     alert('Fetching failed')
        //   })
        displayCateg ? setShowCat('block') : setShowCat('none')
    }, [selectedFilter, displayCateg])

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
                    }
                        onClick={openCat}></i>
                    <Link to="/" style={{ margin: '0 auto' }}>
                        <img src={campkunsLogo} alt="logo" />
                    </Link>
                </div>
            </div>

            <div className="selectCategory-wrap" style={
                {
                    display: showCat, backgroundColor: '#1F1E1D', borderTop: '1px solid #303030',
                    borderRadius: '0 0 15px 15px', paddingBottom: '2px', position: 'fixed',
                }

            }>
                <div className="selectCategory-top-sec" style={{ display: 'flex', fontSize: '30px', padding: '15px 15px 0 15px', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div className="popUp-heading">
                        Select Category
                    </div>
                    < i className="ri-close-line" style={{ color: '#FFE7D9' }} onClick={openCat}></i>
                </div>
                <div className="selectCategory-bottom-sec">
                    <ul className="selectCategory-options" style={CategoryOptions}>
                        {filters.map((filter, i) => <li className="filter" key={filter.value} style={filter.value === selectedFilter ? activeCat : inActivedCat} onClick={() => setSelectedFilter(filter.value)}>{filter.label}</li>)}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SelectCategory