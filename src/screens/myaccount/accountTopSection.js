import React, { useEffect } from 'react'

function AccountTopSection({ account }) {

    const isUserVerified = true
    console.log(localStorage.getItem('username'))

    useEffect(() => {

    }, [account])

    return (
        <div className='userAccNav-wrap'>
            <div className='userAccTop-navInfo' style={{ zIndex: '2', display: 'flex', height: '60px', width: '100vw', maxWidth: '470px', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(30, 30, 30, 0.96)', backdropFilter: 'blur(6px)', position: 'fixed', top: '0', padding: '0 20px' }}>
                <i className='ri-arrow-left-line' onClick={(e) => window.history.back()} style={{ fontSize: '24px', color: '#e8b297' }}></i>
                <div className='userAcc' style={{ display: 'flex', alignItems: 'center' }}>
                    <div style={{
                        color: '#ffe7d9', WebkitBackgroundClip: 'text', marginRight: '5px',
                        backgroundClip: 'text', fontFamily: 'Hanken Grotesk', fontSize: '18px', fontWeight: '500'
                    }}>@{localStorage.getItem('username').toLocaleLowerCase()}</div>
                    {account[0]?.user?.name.isUserVerified ? <svg style={{ color: '#2294d7', background: '#fef3ec', borderRadius: '100px' }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.86937 0.468323C5.4938 -0.156108 6.5062 -0.156108 7.13063 0.468323L7.6001 0.937795C7.825 1.16269 8.13003 1.28904 8.44808 1.28904H9.11201C9.99509 1.28904 10.711 2.00491 10.711 2.88799V3.55192C10.711 3.86997 10.8373 4.175 11.0622 4.3999L11.5317 4.86937C12.1561 5.4938 12.1561 6.5062 11.5317 7.13063L11.0622 7.6001C10.8373 7.825 10.711 8.13003 10.711 8.44808V9.11201C10.711 9.99509 9.99509 10.711 9.11201 10.711H8.44808C8.13003 10.711 7.825 10.8373 7.6001 11.0622L7.13063 11.5317C6.5062 12.1561 5.4938 12.1561 4.86937 11.5317L4.3999 11.0622C4.175 10.8373 3.86998 10.711 3.55192 10.711H2.88799C2.00491 10.711 1.28903 9.99509 1.28903 9.11201V8.44807C1.28903 8.13002 1.16269 7.825 0.937792 7.6001L0.468323 7.13063C-0.156108 6.5062 -0.156108 5.4938 0.468323 4.86937L0.937793 4.3999C1.16269 4.175 1.28903 3.86998 1.28903 3.55193V2.88799C1.28903 2.00491 2.00491 1.28904 2.88799 1.28904H3.55192C3.86998 1.28904 4.175 1.16269 4.3999 0.937795L4.86937 0.468323ZM8.38379 4.00131L5.32179 7.06364L3.67287 5.41471L3.20184 5.88574L5.32179 8.00569L8.85515 4.47233L8.38379 4.00131Z" fill="#ed6d22" />
                    </svg> : ''}
                </div>
                <i className='ri-more-fill' style={{ fontSize: '24px', color: '#e8b297' }}></i>
            </div>

            <div className='accContent' style={{ marginTop: '60px', background: 'rgba(30,30,30)', borderRadius: '0px 0px 0px 0px' }}>
                <div className='userAccInfo' style={{ display: 'flex', padding: '0 20px', justifyContent: 'center' }}>
                    <img alt='profile' src='https://ucarecdn.com/3cfda29f-3620-4ce6-b488-7f0757853c6d/'
                        style={{ width: '75px', height: '75px', objectFit: 'cover', borderRadius: '100px', marginRight: '20px', border: 'solid 0.5px #2E2E2E' }}
                    />
                    <div className='userInfo-wrap' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                        <div className='username'>
                            <div style={{ color: '#fef3ec', fontFamily: 'Archive Narrow', fontSize: '16px', fontWeight: '400' }}>{localStorage.getItem('username')}</div>
                            <div style={{ color: '#ffe7d9', fontFamily: 'Hanken Grotesk', fontSize: '13px', fontWeight: '400', background: 'none', padding: '', border: '', borderRadius: '6px', width: 'fit-content', margin: '6px 0' }}>Photographer</div>
                            {/* <div style={{ color: '#848484', fontFamily: 'Montserrat', fontSize: '12px', fontWeight: '500', marginTop: '10px' }}>NOW Gallery, Open Window</div> */}
                        </div>

                    </div>
                </div>


                <div className='userInteractionAndBio-wrap' style={{ marginTop: '20px', padding: '0 20px' }}>

                    <div className='user-stats' style={{ display: 'flex', marginBottom: '20px', width: '100%', maxWidth: '470px', justifyContent: 'space-evenly' }}>

                        <div className='artworks statVal' style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='stats-label' style={{ color: '#fef3ec', fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '400', marginRight: '5px' }}>
                                <i className="ri-layout-grid-fill"></i>
                            </div>
                            <div className='stats-val' style={{ fontFamily: 'Hanken Grotesk', color: '#fef3ec', fontSize: '14px', fontWeight: '400' }}>
                                {account?.length}
                            </div>
                        </div>
                        <div className='followers statVal' style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='stats-label' style={{ color: '#fef3ec', fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '400', marginRight: '5px' }}>
                                <i className="ri-user-received-fill"></i>
                            </div>
                            <div className='stats-val' style={{ fontFamily: 'Hanken Grotesk', color: '#fef3ec', fontSize: '14px', fontWeight: '400' }}>
                                {account?.length * 5}
                            </div>
                        </div>
                        <div className='followers statVal' style={{ display: 'flex', alignItems: 'center' }}>
                            <div className='stats-label' style={{ color: '#fef3ec', fontFamily: 'Montserrat', fontSize: '18px', fontWeight: '400', marginRight: '5px' }}>
                                <i className="ri-user-shared-fill"></i>
                            </div>
                            <div className='stats-val' style={{ fontFamily: 'Hanken Grotesk', color: '#fef3ec', fontSize: '14px', fontWeight: '400' }}>
                                {account?.length * 2}
                            </div>
                        </div>
                    </div>
                    <div style={{ paddingBottom: '20px', width: '100%', display: 'flex', justifyContent: 'center' }}>
                        {/* <button style={{ width: '65%', height: '45px', border: 'none', borderRadius: '12px', background: '#F3761C', fontFamily: 'Poppins', fontWeight: '600', fontSize: '14px', color: '#FFE7D9', marginRight: '10px' }}>Following</button> */}
                        <div style={{ height: '45px', width: '45px', background: '#272727', borderRadius: '12px', color: '#EFE8E8', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', marginRight: '10px' }}>< i class="ri-hand-heart-fill"></i></div>
                        <div style={{ height: '45px', width: 'fit-content', background: '#272727', borderRadius: '12px', color: '#EFE8E8', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '20px', padding: '0 15px' }}>< i style={{ marginRight: '10px' }} class="ri-mail-fill"></i><div style={{ fontSize: '14px', fontFamily: 'Hanken Grotesk', fontWeight: '500' }}>Edit Contacts</div> </div>
                    </div>

                    <div className='userInteractive-bio' style={{ paddingBottom: '40px', paddingTop: '20px', display: 'flex', justifyContent: 'center', color: '#ffe7d9', fontFamily: 'Hanken Grotesk', fontSize: '14px' }}>Hi I'm {localStorage.getItem('username')}</div>
                </div>
            </div>
        </div >
    )
}

export default AccountTopSection