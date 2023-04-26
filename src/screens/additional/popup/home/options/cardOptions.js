import React from 'react'

function CardOptions() {

    const saveToCollection = () => {
        alert('Save to Collection')
    }
    const searchSimilar = () => {
        alert('Search Similar')
    };
    const sharePost = () => {
        alert('Share')
    };
    const reportPost = () => {
        alert('Report Card')
    }

    const optionList = [
        {
            icon: 'ri-arrow-up-line',
            label: 'Share',
            function: sharePost,
            color: ['#FFFFFF', '#CDCDCD']
        },
        {
            icon: 'ri-search-line',
            label: 'Search Similar',
            function: searchSimilar,
            color: ['#FFFFFF', '#CDCDCD']
        },
        {
            icon: 'ri-collage-line',
            label: 'Save to Collection',
            function: saveToCollection,
            color: ['#FFFFFF', '#CDCDCD']
        },
        {
            icon: 'ri-feedback-line',
            label: 'Report',
            function: reportPost,
            color: ['#ED2615', '#ED2615']
        }
    ]


    return (
        <div style={{
            width: '100vw', position: 'absolute', maxWidth: '470px', display: 'flex', justifyContent: 'flex-end',
            zIndex: '5'
        }}>
            <ul className='option' style={{
                margin: '0', padding: '15px', listStyle: 'none', width: '215px', borderRadius: '15px', backgroundColor: '#232323',
                display: 'flex', flexDirection: 'column', height: '150px', justifyContent: 'space-between', marginTop: '10px',
                marginRight: '10px'
            }}>
                {
                    optionList?.map((cardoption) => {
                        return (
                            <li onClick={cardoption.function} className='cardOption-wrapper'
                                style={{ cursor: 'pointer', display: 'flex', fontFamily: 'Poppins', alignItems: 'center' }}>
                                <i style={{ color: cardoption.color[0], fontSize: '22px' }} className={cardoption.icon}></i>
                                <div style={{
                                    marginLeft: '10px', height: '18px', display: 'flex', alignItems: 'center',
                                    fontWeight: '500', fontSize: '15px', color: cardoption.color[1]
                                }}>
                                    {cardoption.label}</div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default CardOptions