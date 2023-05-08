import React from 'react'
import { SimlarPicks } from '../../additional/components/similarPicks'

function AccountGridView() {
    return (
        <div style={{ padding: '20px', marginBottom: '60px' }}>

            <div className='collections-wrap'>
                <div className='collection-item' style={{ width: '250px', height: '125px', borderRadius: '9px' }}>
                    <div className='collection-overlay' style={{ width: '250px', height: '125px', border: '2px solid #2d2d2d', background: 'linear-gradient(180deg, rgba(41, 41, 41, 0.6) 0%, rgba(41, 41, 41, 0.9) 53.44%, rgba(41, 41, 41, 0.6) 100%)', backdropFilter: 'grayscale(90%)', color: '#FFE7D9', fontFamily: 'Montserrat', display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', borderRadius: '9px', fontSize: '14px', textAlign: 'center', position: 'relative', zIndex: '1' }}>
                        {/* ICON ON EDGE left: -20px; top: -44px; */}
                        <div className='collectionIcon' style={{ width: 'fit-content', height: 'fit-content', background: '#2d2d2d', borderRadius: '7px 0px 12px 0px', padding: '10px', justifyContent: 'center', alignItems: 'center' }}>
                            < i class="ri-box-2-line" style={{ height: '15px', width: '15px' }}></i>
                        </div>
                        <div className='collectionTitle' style={{ marginTop: '19.8px', padding: '0 20px', fontWeight: '500' }}>
                            {/* Insert word limit on title */}
                            2023
                        </div>
                    </div>
                    <img className='collection-cover' src='https://ucarecdn.com/196dd167-5fe7-45b4-9e21-e1b53478869f/' alt='cover' style={{ width: '250px', height: '125px', objectFit: 'cover', borderRadius: '13px', position: 'relative', top: '-125px' }} />
                </div>
            </div>

            {/* <hr style={{ width: '100vw', maxWidth: '470px', margin: '20px auto', border: '0.5px solid #292929', position: 'absolute', left: '0', right: '0' }} /> */}

            <div className='gridposts-wrap' style={{ width: '100%', marginTop: '20px', marginBottom: '0px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2px' }}>
                {/* https://ucarecdn.com/0741b9fc-75ab-464d-b442-a80cb2c1e033/870f608f74c132310fabf55d88328559.jpg */}
                <img style={{ width: '175px', height: '175px', borderRadius: '3px', objectFit: 'cover' }} className='gridImg' src='https://ucarecdn.com/66ac9006-0d4b-44f0-aa28-f47b8c6fcd49/ScreenShot20140622at13211PM800x802.png' alt='gridImg' />
                <img style={{ width: '175px', height: '175px', borderRadius: '3px', objectFit: 'cover' }} className='gridImg' src='https://ucarecdn.com/0741b9fc-75ab-464d-b442-a80cb2c1e033/870f608f74c132310fabf55d88328559.jpg' alt='gridImg' />
                <img style={{ width: '175px', height: '175px', borderRadius: '3px', objectFit: 'cover' }} className='gridImg' src='https://ucarecdn.com/c6f9933b-a595-4c41-a5ae-bbe892021985/' alt='gridImg' />
                <img style={{ width: '175px', height: '175px', borderRadius: '3px', objectFit: 'cover' }} className='gridImg' src='https://ucarecdn.com/196dd167-5fe7-45b4-9e21-e1b53478869f/' alt='gridImg' />
                <img style={{ width: '175px', height: '175px', borderRadius: '3px', objectFit: 'cover' }} className='gridImg' src='https://ucarecdn.com/66ac9006-0d4b-44f0-aa28-f47b8c6fcd49/ScreenShot20140622at13211PM800x802.png' alt='gridImg' />
                <img style={{ width: '175px', height: '175px', borderRadius: '3px', objectFit: 'cover' }} className='gridImg' src='https://ucarecdn.com/0741b9fc-75ab-464d-b442-a80cb2c1e033/870f608f74c132310fabf55d88328559.jpg' alt='gridImg' />
                <img style={{ width: '175px', height: '175px', borderRadius: '3px', objectFit: 'cover' }} className='gridImg' src='https://ucarecdn.com/c6f9933b-a595-4c41-a5ae-bbe892021985/' alt='gridImg' />
                <img style={{ width: '175px', height: '175px', borderRadius: '3px', objectFit: 'cover' }} className='gridImg' src='https://ucarecdn.com/196dd167-5fe7-45b4-9e21-e1b53478869f/' alt='gridImg' />
            </div>

            <hr style={{ width: '100vw', maxWidth: '470px', margin: '20px auto', border: '0.5px solid #292929', position: 'absolute', left: '0', right: '0' }} />

            <div className='gridposts-wrap' style={{ width: '100%', marginTop: '40px', marginBottom: '40px', display: 'flex' }}>
                <SimlarPicks />
            </div>
        </div>

    )
}

export default AccountGridView