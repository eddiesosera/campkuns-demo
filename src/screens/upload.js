import React, { useContext, useEffect, useState } from "react";
import axios from 'axios';
import './css/upload.css'
import { useNavigate } from "react-router-dom";
import { Widget } from "@uploadcare/react-widget";
import uploadcare from 'uploadcare-widget/uploadcare.lang.en.min.js'
import TopBar from "../components/topBar";
import UploadAddTags from "../components/upload_addTags";
import { BtmBarDisplay } from "../App";


function UploadArt() {

    const navigate = useNavigate()
    const titleInput = document.querySelector('.uploadTitle')
    const [percent, setPercent] = useState(20);
    const [i, setI] = useState(true)
    const [titleTgl, setTitleTgl] = useState(true)
    const [priceTgl, setPriceTgl] = useState(true)
    const [img1, setImg1] = useState('')
    const [sessTag, setSessTag] = useState([])


    //ArtPost upload
    const [formData, setFormData] = useState({})

    // Post to DB
    const handleSubmit = () => {
        const user = JSON.parse(localStorage.getItem('user')).id
        console.log(user)
        if (percent >= 60) {

            setFormData({ ...formData, agreeCount: 0 })
            setFormData({ ...formData, views: 0 })
            setFormData({ ...formData, user })
            // formData.user = user

            axios
                .post("http://10.0.0.106:5000/v1/posts", formData, {

                    headers: {
                        'Content-Type': 'application/json',
                        'authorization': `Bearer ${localStorage.getItem('token')}`
                    },
                })
                .then((result) => {

                    //console.log(result.data.results);
                    // setFormData({})
                    alert(formData.title)
                    navigate('/')
                    //setTimeout(() => { window.location.reload() }, 10)
                    console.log(formData)

                })
                .catch((error) => {

                    alert('Error Saving...');

                }
                );

        } else {
            return null;

        }
    }

    //Close button function
    const back = () => {
        window.history.back()
        setTimeout(() => {
            if (window.location.pathname === '/uplad') {
                navigate('/')
            }
        }, 10)
    }

    useEffect(() => {
        titleInput === 'a' && alert('no t')
    }, [i])


    const titleProg = (e) => {

        setFormData({ ...formData, title: e.target.value })

        if (titleTgl && document.querySelector('.uploadTitle').value !== '') {
            setPercent(percent + 20);
            setTitleTgl(false)
        } else if (document.querySelector('.uploadTitle').value === '') {
            setPercent(percent - 20);
            setTitleTgl(true)
        }
    }

    const priceProg = (e) => {

        setFormData({ ...formData, price: e.target.value * 1.2 })


        if (priceTgl && document.querySelector('.uploadPrice').value !== '') {
            setPercent(percent + 20);
            setPriceTgl(false)

        } else if (document.querySelector('.uploadPrice').value === '') {
            setPercent(percent - 20);
            setPriceTgl(true)
        }
    }

    const categories = [{ label: 'Illustration', value: 'Illustration' },
    { label: ' Photography', value: 'Photography' }, { label: 'Paint', value: 'Paint' },
    { label: 'Digital Design', value: 'Digital Design' }, { label: 'Installation', value: 'Installation' },
    { label: 'Sculptures', value: 'Sculptures' }, { label: '3D Prints', value: '3D Prints' },
    { label: 'New Media Art', value: 'New Media Art' }]


    return (
        <>


            <div style={{ maxWidth: '470px', margin: '0px auto', marginTop: '-60px !important' }}>
                <div className='uploadHeader-wrap' >
                    <div className='upload-header header-wrap'>

                        <div className="header-textIcon">
                            <div className="header-text uploadHeader-text">
                                Upload Artwork
                            </div>
                            <i className='ri-close-line header-icon' onClick={(e) => back()} style={{ cursor: 'pointer' }}></i>
                        </div>

                        <div className='uploadProgress-wrap' style={{ paddingTop: '20px', position: 'sticky', top: 0 }}>
                            <div>
                                <div className='uploadProgress-bar' style={{ width: '100%', height: '5px', background: '#292929', borderRadius: '100px' }}>
                                    <div className='uploadProgress-progress' style={{
                                        background: 'linear-gradient(270deg, #FFE7D9 0%, #554D48 100%)',
                                        width: (percent) + '%', height: '5px', borderRadius: '100px', transition: 'width 1s cubic-bezier(0.67, 0, 0.33, 1) 0s'
                                    }}></div>
                                </div>
                            </div>
                            <div style={{
                                display: 'flex', justifyContent: 'flex-end', marginTop: '20px', fontFamily: 'Montserrat', color: '#454545', fontSize: '12px'
                            }}>
                                <b style={{ fontWeight: '600', marginRight: '5px' }}>{percent}%</b> complete
                            </div>
                        </div>
                    </div>
                </div >

                <form style={{ display: 'flex', flexDirection: 'column', color: 'black' }}>

                    <div style={{ padding: '20px' }}>
                        <div style={{ display: 'flex', fontFamily: 'Montserrat', fontWeight: '500', fontSize: '14px', color: '#FFE7D9', marginBottom: '15px' }}>
                            <div>Images</div>
                            <div style={{ marginLeft: '5px', fontWeight: '400', color: '#4D4845' }}>(7 Images max)</div>
                        </div>

                        <div className="images-wrap" style={{ display: 'flex' }}>
                            <div style={{ display: img1 === '' ? 'none' : 'block' }}>
                                <img src={img1} alt="pst" className="uploadesImg" style={{
                                    width: '75px', height: '75px', borderRadius: '12px', background: '#292625', border: 'none', objectFit: 'cover'
                                }} />
                                <i className="ri-close-circle-fill"></i>
                            </div>
                            <div style={{ width: '75px', height: '75px', borderRadius: '12px', border: 'dashed 1px #5A5451', display: 'flex', strokeDasharray: '22, 23' }}>
                                <Widget publicKey="bc3b6c954405f4e975b2" onChange={(fileInfo) => {
                                    console.log(fileInfo)
                                    setFormData({
                                        ...formData, images: [fileInfo?.originalUrl]
                                    })
                                    setImg1(fileInfo?.originalUrl)
                                }} />
                            </div>
                        </div>

                    </div>

                    <div style={{ padding: '20px' }}>
                        <input className="uploadTitle uploadInput" style={{ marginBottom: '10px', padding: "15px" }} type="text" placeholder='Title' onChange={e => titleProg(e)} required />
                        <textarea style={{ height: '90px', marginBottom: '10px', padding: "15px", resize: 'none' }} className="uploadDescription uploadInput" type="text" placeholder='Description' onChange={(e) => setFormData({ ...formData, description: e.target.value })} ></textarea>
                        <div style={{ display: 'flex', marginBottom: '10px', gap: '10px' }}>
                            <div style={{ width: '70%' }}>
                                <input className="uploadPrice uploadInput" style={{ fontFamily: 'Roboto Mono, monospace', padding: "15px", fontWeight: '550 !important' }} type="number" placeholder='Price' onChange={e => priceProg(e)} required />
                                <div style={{ fontSize: '12px', fontFamily: 'Roboto', color: '#4D4845', marginTop: '10px', marginLeft: '15px' }}><i>1 - 100 000</i></div>
                            </div>

                            <select className="uploadInput" style={{ padding: '0 15px' }} required onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                                <option>Choose Category</option>
                                {categories.map((label) => <option>{label.value}</option>)}
                            </select>
                        </div>
                    </div>

                    <div style={{ padding: '20px' }}
                    //onChange={(e) => { setFormData({ ...formData, tags: [sessTag] }); }}
                    >
                        <UploadAddTags />
                    </div>

                    <div className="submit-btnWrap">
                        <button type="submit" className="submit-btn" id="submit-btn" onClick={(e) => {
                            console.log(formData)
                            handleSubmit()
                            e.preventDefault()
                            sessionStorage.clear('tags')
                        }} >
                            Upload
                        </button>
                    </div>

                </form >

            </div >
        </>
    )
}

export default UploadArt