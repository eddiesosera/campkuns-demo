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
            icon: 'ri-collage-line',
            label: 'Save to Collection',
            function: saveToCollection,
            color: ['#FFFFFF', '#CDCDCD']
        },
        {
            icon: 'ri-search-line',
            label: 'Search Similar',
            function: searchSimilar,
            color: ['#FFFFFF', '#CDCDCD']
        },
        {
            icon: 'ri-arrow-up-line',
            label: 'Share',
            function: sharePost,
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
        <div>
            <ul className='option' style={{ margin: '0', padding: '0', listStyle: 'none' }}>
                {
                    optionList?.map((cardoption) => {
                        return (
                            <li onClick={cardoption.function} style={{ cursor: 'pointer' }}>
                                <div className='cardOption-wrapper' style={{ display: 'flex', alignItems: 'center' }}>
                                    <i style={{ color: cardoption.color[0] }} className={cardoption.icon}></i>
                                    <div style={{ color: cardoption.color[1] }}>{cardoption.label}</div>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default CardOptions