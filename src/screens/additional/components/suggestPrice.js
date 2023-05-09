import React, { useEffect, useState } from 'react';
import { Radio, Select, Space } from 'antd';


function SuggestPrice({ display, Img, title, price, hide, submit }) {

    const [size, setSize] = useState(0);
    const handleSizeChange = (e) => {
        setSize(e.target.value);
    };

    const [displayStatus, setDisplayStatus] = useState('block');
    const displayToggle = display;

    useEffect(() => {

        displayToggle ? setDisplayStatus('flex') : setDisplayStatus('none')

    }, [display])


    return (

        <div style={{
            position: 'fixed', zIndex: '99', top: '0', left: '0', right: '0', bottom: '0', width: '100vw', display: displayStatus,
            justifyContent: 'center', alignItems: 'center', background: 'rgba(30, 30, 30, 0.5)', flexDirection: 'column'
        }}>

            <div className='suggestPrice-close' style={{
                width: '370px', height: '24px', display: 'flex', flexDirection: 'column', alignContent: 'flex-end',
                flexWrap: 'wrap', justifyContent: 'center', marginBottom: '-20px', zIndex: '99', marginLeft: '10px', cursor: 'pointer'
            }}>

                < i class="ri-close-line" style={{
                    color: '#FFE7D9', padding: '5px', fontSize: '18px', backgroundColor: '#232323', display: 'flex',
                    borderRadius: '50px', border: '0.75px solid #363636', height: '40px', justifyContent: 'center',
                    alignItems: 'center'
                }} onClick={hide}></i>
            </div>

            <form onSubmit={(e) => e.preventDefault()} style={{ display: displayStatus, flexDirection: 'column', height: 'fit-content', width: '370px', backgroundColor: '#232323', padding: '20px', border: '0.75px solid #363636', borderRadius: '15px' }}>
                <div className="suggestPrice-head" style={{
                    fontSize: '24px', fontWeight: '600', fontFamily: 'Poppins', color: '#FFE7D9', marginBottom: '20px'
                }}>
                    Place your Bid
                </div>
                <div className='artContent-wrap' style={{ padding: '15px', display: 'flex', borderRadius: '9px', background: '#2A2A2A' }}>
                    <img src={Img} alt='Suggestion' style={{ width: '75px', height: '75px', objectFit: 'cover', borderRadius: '6px' }} />
                    <div className='artMeta-wrap' style={{
                        marginLeft: '10px', height: '75px', display: 'flex', flexDirection: 'column',
                        justifyContent: 'space-around', color: '#FFE7D9'
                    }}>
                        <div className='artMeta-title' style={{
                            fontFamily: 'Montserrat', fontSize: '14px', fontWeight: '600',
                            height: 'fit-content', maxHeight: '35px', overflow: 'clip'
                        }}>
                            {title}
                        </div>
                        <div className='artMeta-price-wrap' style={{ fontFamily: 'Roboto Condensed' }}>
                            <i class="ri-price-tag-3-fill" style={{ fontSize: '18px', marginRight: '5px' }}></i>
                            R{price}
                        </div>
                    </div>
                </div>

                <div className='suggestPice-wrap'>
                    <div className="suggestPrice-top-wrap" style={{
                        display: 'flex', padding: '0',
                        alignItems: 'center', justifyContent: 'space-between'
                    }}>

                    </div>
                    <input type='number' placeholder='Suggest price' required style={{
                        height: '45px', width: '100%', border: '0.75px solid #333333', fontFamily: 'Roboto Condensed',
                        borderRadius: '12px', background: 'none', padding: '15px', marginTop: '20px', marginBottom: '10px'
                    }} />

                    <button type='submit' onClick={submit} style={{ marginTop: '20px', height: '45px', border: 'none', fontWeight: '600', width: '100%', borderRadius: '12px', background: '#E55C17', fontFamily: 'Poppins', fontSize: '15px' }}>
                        Bid Price
                    </button>

                    {/* <hr style={{ border: '0.75px solid #343434', width: '100%', marginTop: '30px', marginBottom: '30px', padding: '0' }} />

                    <div style={{ marginLeft: '15px', fontFamily: 'Poppins', color: 'rgba(117,117,117)' }}>
                        Highest Bid
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', marginTop: '10px', fontFamily: 'Roboto Condensed !important' }}>
                        <Radio.Group value={size} onChange={handleSizeChange} >
                            <Radio.Button value={price - price * 0.50}>{price - price * 0.50}</Radio.Button>
                            <Radio.Button value={price - price * 0.25}>{price - price * 0.25}</Radio.Button>
                            <Radio.Button value={price}>{price}</Radio.Button>
                            <Radio.Button value={price + price * 0.20}>{price + price * 0.20}</Radio.Button>
                            <Radio.Button value={price + price * 0.50}>{price + price * 0.50}</Radio.Button>
                        </Radio.Group>
                    </div> */}
                </div>

            </form>

        </div >

    )
}

export default SuggestPrice