import React, { useState } from 'react'

export const Moments = () => {

    const [momentsList, setMomentsList] = useState([
        {
            user: {
                username: 'eddie',
                name: 'Eddie',
                profile_imageURL: 'https://ucarecdn.com/898b6c8b-21b4-4f3f-a8e7-0ac311a322b4/',
            },
            content_banner: 'https://fastly.picsum.photos/id/342/2896/1944.jpg?hmac=_2cYDHi2iG1XY53gvXOrhrEWIP5R5OJlP7ySYYCA0QA',
            moment_content: [''],
            moment_engaged: '',
            date: '',
            moment_interactive: {
                location: '',
                exhibition: '',
                link: ''
            }
        },
        {
            user: {
                username: 'jadep27',
                name: 'Jade P',
                profile_imageURL: 'https://ucarecdn.com/898b6c8b-21b4-4f3f-a8e7-0ac311a322b4/',
            },
            content_banner: 'https://fastly.picsum.photos/id/342/2896/1944.jpg?hmac=_2cYDHi2iG1XY53gvXOrhrEWIP5R5OJlP7ySYYCA0QA',
            moment_content: [''],
            moment_engaged: '',
            date: '',
            moment_interactive: {
                location: '',
                exhibition: '',
                link: ''
            }
        },
        {
            user: {
                username: 'eddie',
                name: 'Eddie',
                profile_imageURL: 'https://ucarecdn.com/898b6c8b-21b4-4f3f-a8e7-0ac311a322b4/',
            },
            content_banner: 'https://fastly.picsum.photos/id/342/2896/1944.jpg?hmac=_2cYDHi2iG1XY53gvXOrhrEWIP5R5OJlP7ySYYCA0QA',
            moment_content: [''],
            moment_engaged: '',
            date: '',
            moment_interactive: {
                location: '',
                exhibition: '',
                link: ''
            }
        },
        {
            user: {
                username: 'eddie',
                name: 'Eddie',
                profile_imageURL: 'https://ucarecdn.com/898b6c8b-21b4-4f3f-a8e7-0ac311a322b4/',
            },
            content_banner: 'https://fastly.picsum.photos/id/342/2896/1944.jpg?hmac=_2cYDHi2iG1XY53gvXOrhrEWIP5R5OJlP7ySYYCA0QA',
            moment_content: [''],
            moment_engaged: '',
            date: '',
            moment_interactive: {
                location: '',
                exhibition: '',
                link: ''
            },
        },
        {
            user: {
                username: 'eddie',
                name: 'Eddie',
                profile_imageURL: 'https://ucarecdn.com/898b6c8b-21b4-4f3f-a8e7-0ac311a322b4/',
            },
            content_banner: 'https://fastly.picsum.photos/id/342/2896/1944.jpg?hmac=_2cYDHi2iG1XY53gvXOrhrEWIP5R5OJlP7ySYYCA0QA',
            moment_content: [''],
            moment_engaged: '',
            date: '',
            moment_interactive: {
                location: '',
                exhibition: '',
                link: ''
            }
        }
    ])

    return (
        <div style={{ padding: '10px', width: '100vw', maxWidth: '470px', margin: '0 auto', borderBottom: '0.3px solid #333333', marginTop: '10px', overflow: 'clip', flexWrap: 'wrap' }}>
            <div style={{ fontFamily: 'Poppins', fontWeight: '500', display: 'flex', color: '#685c55', margin: '10px 0', marginBottom: '20px' }}>
                <i class='ri-sparkling-fill' style={{ marginRight: '10px' }} ></i>
                Where-its-At
            </div>
            <div className='moment-wrap' style={{ width: '99%', maxWidth: '470px', margin: '10px auto', overflowY: 'scroll', marginTop: '10px', display: 'flex', gap: '15px' }}>
                <div onClick={(e) => { window.location.reload() }}>
                    <div style={{ height: '240px', width: '140px', border: '2px solid #685c55', borderRadius: '15px', background: 'linear-gradient(180deg, #202020 10%, rgba(30, 30, 30, 0) 100%)', backdropFilter: 'grayscale(70%)' }}>
                        <div o className='userMoment-wrap-overlay' style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '10px' }}>
                            <img src='https://fastly.picsum.photos/id/342/2896/1944.jpg?hmac=_2cYDHi2iG1XY53gvXOrhrEWIP5R5OJlP7ySYYCA0QA' alt='mimg' style={{ height: '20px', width: '20px', background: 'gray', borderRadius: '100px' }} />
                            <div style={{ fontFamily: 'Montserrat', fontSize: '12px', fontWeight: '500', color: '#FFE7D9', marginLeft: '5px' }}>
                                {localStorage.getItem('username')}
                            </div>
                        </div>
                    </div>
                    <div style={{ marginTop: '-240px' }}>
                        <div style={{ height: '234px', width: '134px', margin: '3px', borderRadius: '12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', fontFamily: 'Poppins', fontSize: '14px', fontWeight: '500' }} >
                            < i style={{ fontSize: '30px', zIndex: '1', color: '#ed6d22' }} class="ri-add-line"></i><br />
                            <div style={{ color: '#ed6d22', marginTop: '-10px' }}>My moment</div>
                        </div>
                    </div>
                </div>
                {momentsList.map((moment) => {
                    return (
                        <div>
                            <div style={{ height: '240px', width: '140px', border: '2px solid #ed6d22', borderRadius: '15px', background: 'linear-gradient(180deg, #202020 10%, rgba(30, 30, 30, 0) 100%)', backdropFilter: 'grayscale(70%)' }}>
                                <div className='userMoment-wrap-overlay' style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: '10px' }}>
                                    <img src={moment.user.profile_imageURL} alt='mimg' style={{ height: '20px', width: '20px', background: 'gray', borderRadius: '100px' }} />
                                    <div style={{ fontFamily: 'Montserrat', fontSize: '12px', fontWeight: '500', color: '#FFE7D9', marginLeft: '5px' }}>{moment.user.username}</div>
                                </div>
                            </div>
                            <div style={{ marginTop: '-240px' }}><img src={moment.content_banner} alt='moment' style={{ height: '234px', width: '134px', margin: '3px', objectFit: 'cover', borderRadius: '12px' }} /></div>

                        </div>
                    )
                })}
            </div>
        </div>
    )
}



export const MomentScreen = () => {
    return (
        <div style={{ height: '100vh', width: '100vw', maxWidth: '470px', zIndex: '99', background: 'black' }}>
            Moments
        </div>
    )
}
