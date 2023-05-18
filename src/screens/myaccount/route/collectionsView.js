import React from 'react'

export const CollectionsView = () => {

    //Show Navbar
    document.querySelector('#app_nav_wrap').style.display = 'block'
    return (
        <div>
            {/* COLLECTIONS */}
            <div className='collections-wrap' style={{ display: 'flex', justifyContent: myPosts[0].images.length === 1 ? 'flex-start' : 'flex-end' }}>
                <div style={{ display: 'flex', gap: '20px', overflowX: 'scroll', overflowY: 'clip', height: '125px' }}>
                    {
                        myPosts.map((mycollectionBanner) => {
                            return (
                                myPosts[0].images.length !== 0 ?
                                    <div className='collection-item' style={{ width: '250px', height: '125px', borderRadius: '9px' }}>
                                        <div className='collection-overlay' style={{ width: '250px', height: '125px', border: '2px solid #2d2d2d', background: 'linear-gradient(180deg, rgba(41, 41, 41, 0.6) 0%, rgba(41, 41, 41, 0.9) 53.44%, rgba(41, 41, 41, 0.6) 100%)', backdropFilter: 'grayscale(50%)', color: '#FFE7D9', fontFamily: 'Montserrat', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', borderRadius: '9px', fontSize: '14px', textAlign: 'center', position: 'relative', zIndex: '1' }}>
                                            {/* ICON ON EDGE left: -20px; top: -44px; */}
                                            <div className='collectionIcon' style={{ width: 'fit-content', height: 'fit-content', background: '#2d2d2d', borderRadius: '7px 0px 3px 0px', padding: '5px', justifyContent: 'center', alignItems: 'center' }}>
                                                < i className="ri-box-2-line" style={{ height: '20px', width: '20px', fontSize: '20px' }}></i>
                                            </div>
                                            <div className='collectionTitle' style={{ marginTop: '19.8px', padding: '0 20px', fontWeight: '500' }}>
                                                {/* Insert word limit on title */}
                                                My Top 10
                                            </div>
                                        </div>
                                        <img className='collection-cover' src={mycollectionBanner.images[0]} alt='cover' style={{ width: '250px', height: '125px', objectFit: 'cover', borderRadius: '13px', position: 'relative', top: '-125px' }} />
                                    </div>
                                    :
                                    <div className='collection-item' style={{ width: '250px', height: '125px', borderRadius: '9px' }}>
                                        <div className='collection-overlay' style={{ width: '250px', height: '125px', border: '2px solid #2d2d2d', background: 'linear-gradient(180deg, rgba(41, 41, 41, 0.6) 0%, rgba(41, 41, 41, 0.9) 53.44%, rgba(41, 41, 41, 0.6) 100%)', backdropFilter: 'grayscale(50%)', color: '#FFE7D9', fontFamily: 'Montserrat', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', borderRadius: '9px', fontSize: '14px', textAlign: 'center', position: 'relative', zIndex: '1' }}>
                                            <div className='collectionIcon' style={{ width: 'fit-content', height: 'fit-content', background: '#2d2d2d', borderRadius: '7px 0px 12px 0px', padding: '10px', justifyContent: 'center', alignItems: 'center' }}>
                                                < i className="ri-box-2-line" style={{ height: '15px', width: '15px' }}></i>
                                            </div>
                                            <div className='collectionTitle' style={{ marginTop: '19.8px', padding: '0 20px', fontWeight: '500' }}>
                                                {/* Insert word limit on title */}
                                                No Collection yet
                                            </div>
                                        </div>
                                        <div className='collection-cover' style={{ width: '250px', height: '125px', objectFit: 'cover', borderRadius: '13px', position: 'relative', top: '-125px', background: 'red' }} ></div>
                                    </div>
                            )
                        }
                        )
                    }
                </div>

                <div className='overlay' style={{ display: myPosts[0].images.length === 1 ? 'none' : 'block', height: '125px', width: '110px', background: 'linear-gradient(-90deg, #1E1E1E 20%, rgba(30, 30, 30, 0) 100%)', position: 'absolute', marginRight: '-5px', zIndex: '5' }}></div>

            </div>

        </div>
    )
}
