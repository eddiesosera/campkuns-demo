import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import campkunsLogo from '../../../../data/static/assets/campkuns-logo-draft1.svg'
import './selectCat.css'

function SelectCategory({ display }) {

    const [displayCateg, setDisplayCateg] = useState(display)
    const [showCat, setShowCat] = useState('none');




    //HEADER
    const topBarStyle = {
        height: '60px', width: '-webkit-fill-available', color: 'white', transition: 'top 0.5s cubic-bezier(0.5, 0.55, 0.70, 0.35)',
        display: 'flex', alignItems: 'center', position: 'fixed', top: '0', padding: '0 15px'
    }
    const linkStyle = { textDecoration: 'none', textDecorationLine: 'none' }

    //STYLE 
    const activedCat =
    {
        display: 'flex', alignItems: 'center', justifyContent: 'center', userSelect: 'none',
        width: 'fit-content', height: '36px', padding: '0 15px', border: '1px solid #E55C17',
        margin: '5px', color: '#E55C17', borderRadius: '8px', fontFamily: 'Hanken Grotesk', backgroundColor: '#261c18',
        fontWeight: '500', fontSize: '12px', transition: 'all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)'
    };

    const inActivedCat =
    {
        display: 'flex', alignItems: 'center', justifyContent: 'center', userSelect: 'none', cursor: 'pointer',
        width: 'fit-content', height: '36px', padding: '0 15px', border: '0.5px solid #464646',
        margin: '5px', color: '#9D9D9D', borderRadius: '8px', fontFamily: 'Hanken Grotesk',
        fontWeight: '500', fontSize: '12px', transition: 'all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)'
    };

    const CategoryOptions = {
        display: 'flex', flexWrap: 'wrap', padding: '0 15px',
        justifyContent: 'flex-start', transition: 'all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)'
    }

    const inActSort = { userSelect: 'none', color: '#9D9D9D', fontFamily: 'Hanken Grotesk', fontWeight: '500', fontSize: '12px', transition: 'all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)', listStyleType: 'none', border: '0.5px solid #464646', padding: '9px 12px', borderRadius: '8px', width: '', display: 'flex', justifyContent: 'center', cursor: 'pointer' };
    const actSort = { userSelect: 'none', color: '#E55C17', fontFamily: 'Hanken Grotesk', fontWeight: '500', fontSize: '12px', transition: 'all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)', listStyleType: 'none', border: '1px solid #E55C17', padding: '9px 12px', borderRadius: '8px', backgroundColor: '#261c18', width: '', display: 'flex', justifyContent: 'center', cursor: 'pointer' };




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
    }, [displayCateg,])

    const filters = [{ label: 'All', value: 'All' }, { label: 'Illustration', value: 'Illustration' },
    { label: ' Photography', value: 'Photography' }, { label: 'Paint', value: 'Paint' },
    { label: 'Digital Design', value: 'Digital Design' }, { label: 'Installation', value: 'Installation' },
    { label: 'Sculptures', value: 'Sculptures' }, { label: '3D Prints', value: '3D Prints' },
    { label: 'New Media Art', value: 'New Media Art' }, { label: 'Explore Various Categories', value: 'Explore Various Categories' }]

    const sortings = [{ label: 'All', sortFunction: 'function' }, { label: 'Top', sortFunction: 'function' }, { label: 'New', sortFunction: 'function' }]

    const [selectedFilter, setSelectedFilter] = useState(filters[0].value)
    const [selectedSort, setSelectedSort] = useState(sortings[0].label)
    const [posts, setPosts] = useState([])

    useEffect(() => {
        //console.log('fetching Data with', selectedFilter)
        //   fetchData(selectedFilter).then((data)=>{
        //     setPosts(data)
        //   }).catch((err)=>{
        //     alert('Fetching failed')
        //   })
        displayCateg ? setShowCat('block') : setShowCat('none')
    }, [selectedFilter, displayCateg, selectedSort])

    const [pushPin, setPushPin] = useState('ri-pushpin-line')

    return (
        <>



            <div className="" style={linkStyle}>
                {/* Pin Icon colour: #FFE7D9 */}
                <div id="cat_pinIcon" style={topBarStyle}>
                    <i className={toggle ? 'ri-pushpin-fill' : 'ri-pushpin-line'} style={
                        toggle ? {
                            fontSize: '24px', fontWeight: '100',
                            color: '#ed6d22', backgroundColor: '#2c2f30', height: '45px', width: '45px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '9px',
                            cursor: 'pointer', position: 'absolute', transition: 'all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)'
                        } : {
                            fontSize: '24px', fontWeight: '500', height: '45px', width: '45px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '9px',
                            cursor: 'pointer', position: 'absolute', color: '#e8b297', transition: 'all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)'
                        }
                    }
                        onClick={openCat}></i>

                </div>
            </div>

            <div className="selectCategory-wrap" style={{ display: showCat, backgroundColor: '#151515f7', borderTop: '1px solid #303030', backdropFilter: 'blur(10px)', borderRadius: '0 0 15px 15px', paddingBottom: '2px', position: 'fixed', transition: 'all 0.9s cubic-bezier(0.5, 0.55, 0.70, 0.35)' }}>
                <div className="selectCategory-top-sec" style={{ display: 'flex', fontFamily: 'Hanken Grotesk', fontSize: '30px', padding: '15px 15px 15px 15px', alignItems: 'center', justifyContent: 'space-between', transition: 'all 0.2s cubic-bezier(0.5, 0.55, 0.70, 0.35)' }}>
                    <div className="popUp-heading">
                        Select Category
                    </div>
                    < i className="ri-close-line" style={{ color: '#FFE7D9', cursor: 'pointer', }} onClick={openCat}></i>
                </div>
                <div className="selectCategory-bottom-sec">
                    <ul className="selectCategory-options" style={CategoryOptions}>
                        {filters.map((filter, i) => <li className="filter" key={filter.value} style={filter.value === selectedFilter ? activedCat : inActivedCat} onClick={() => setSelectedFilter(filter.value)}>{filter.label}</li>)}
                    </ul>
                </div>
                <div style={{ padding: '0 20px' }}>
                    <hr style={{ border: '0.2px solid #272727', margin: '0' }} />
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', userSelect: 'none', padding: '20px 0px' }}>
                        <div style={{ padding: '10px 15px', background: '#E55C17', borderRadius: '12px', fontFamily: 'Poppins', marginRight: '20px' }}>
                            <Link style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', color: 'black' }} to="/search">
                                <i class="ri-search-2-line" style={{}}></i><div style={{ fontSize: '13px', fontWeight: 500, marginLeft: '5px' }}>Search</div>
                            </Link>
                        </div>
                        <ul style={{ padding: '0', margin: '0', display: 'flex', gap: '12px', width: '100%', justifyContent: 'flex-end' }}>
                            {sortings.map((sort) => <li style={sort.label === selectedSort ? actSort : inActSort} onClick={() => setSelectedSort(sort.label)}>{sort.label}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SelectCategory