import React from 'react'

function Moments() {
    return (
        <div style={{ padding: '10px' }}>
            <div>
                <i class='ri-sparkling-fill' ></i>
                Moments
            </div>
            <div className='moment-wrap'>
                <div style={{ height: '240px', width: '140px', border: '2px solid orange', borderRadius: '12px', background: 'linear-gradient(180deg, #202020 0%, rgba(43, 43, 43, 0) 100%)' }}>
                    <div className='userMoment-wrap' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '10px' }}>
                        <div style={{ height: '30px', width: '30px', background: 'gray', borderRadius: '100px' }}></div>
                        <div style={{ fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '500', color: '#FFE7D9', marginLeft: '10px' }}>Name of ...</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Moments