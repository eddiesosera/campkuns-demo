import React from 'react'

function AccountTopSection() {

    const isUserVerified = true
    return (
        <div>
            <div className='userAccNav-wrap'>
                <i className='ri-arrow-left-line'></i>
                <div className='userAcc'>
                    <div>@eddie</div>
                    {isUserVerified ? <svg style={{ color: '#2294d7', background: '#fef3ec', borderRadius: '100px' }} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.86937 0.468323C5.4938 -0.156108 6.5062 -0.156108 7.13063 0.468323L7.6001 0.937795C7.825 1.16269 8.13003 1.28904 8.44808 1.28904H9.11201C9.99509 1.28904 10.711 2.00491 10.711 2.88799V3.55192C10.711 3.86997 10.8373 4.175 11.0622 4.3999L11.5317 4.86937C12.1561 5.4938 12.1561 6.5062 11.5317 7.13063L11.0622 7.6001C10.8373 7.825 10.711 8.13003 10.711 8.44808V9.11201C10.711 9.99509 9.99509 10.711 9.11201 10.711H8.44808C8.13003 10.711 7.825 10.8373 7.6001 11.0622L7.13063 11.5317C6.5062 12.1561 5.4938 12.1561 4.86937 11.5317L4.3999 11.0622C4.175 10.8373 3.86998 10.711 3.55192 10.711H2.88799C2.00491 10.711 1.28903 9.99509 1.28903 9.11201V8.44807C1.28903 8.13002 1.16269 7.825 0.937792 7.6001L0.468323 7.13063C-0.156108 6.5062 -0.156108 5.4938 0.468323 4.86937L0.937793 4.3999C1.16269 4.175 1.28903 3.86998 1.28903 3.55193V2.88799C1.28903 2.00491 2.00491 1.28904 2.88799 1.28904H3.55192C3.86998 1.28904 4.175 1.16269 4.3999 0.937795L4.86937 0.468323ZM8.38379 4.00131L5.32179 7.06364L3.67287 5.41471L3.20184 5.88574L5.32179 8.00569L8.85515 4.47233L8.38379 4.00131Z" fill="#ed6d22" />
                    </svg> : ''}
                </div>
                <i className='ri-more-fill'></i>
            </div>
            <div className='userAccInfo'>
                <img alt='profile' src='https://ucarecdn.com/d0989976-b3db-4d17-b2c6-3e41b45cf44d/'
                    style={{ width: '200px', height: '200px', objectFit: 'cover' }}
                />
                <div className='userInfo-wrap'>
                    <div className='username'>
                        <div>Eddie</div>
                        <div>Artist</div>
                    </div>
                    <div className='user-stats'>
                        <div className='netValue'>
                            <div className='stats-val'>
                                R 1000
                            </div>
                            <div className='stats-label'>
                                price
                            </div>
                        </div>
                        <div className='followers'>
                            <div className='stats-val'>
                                50
                            </div>
                            <div className='stats-label'>
                                followers
                            </div>
                        </div>
                        <div className='artworks'>
                            <div className='stats-val'>
                                4
                            </div>
                            <div className='stats-label'>
                                artworks
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='userInteractionAndBio-wrap'>
                <div>
                    <button>Follow</button>
                    < i class="ri-mail-line"></i>
                </div>
                <div className='userInteractive-bio'>I’m a designer and dev/design student interested in collabs with like-minded peers.</div>
            </div>
        </div>
    )
}

export default AccountTopSection