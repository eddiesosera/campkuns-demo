import React, { useEffect, useRef, useState } from "react";
import axios from 'axios';
import './css/upload.css'
import { Navigate, useNavigate } from "react-router-dom";
import { IKContext, IKImage, IKUpload } from 'imagekitio-react';
import { Widget } from "@uploadcare/react-widget";
import uploadcare from 'uploadcare-widget/uploadcare.lang.en.min.js'
import TopBar from "../components/topBar";


function UploadArt() {

    const navigate = useNavigate()
    const [percent, setPercent] = useState(20);
    const [i, setI] = useState(true)
    const [titleTgl, setTitleTgl] = useState(true)
    const [priceTgl, setPriceTgl] = useState(true)

    //ArtPost upload
    const [formData, setFormData] = useState({})

    // Post to DB
    const handleSubmit = () => {

        if (percent >= 60) {

            setFormData({ ...formData, date: Date() })
            setFormData({ ...formData, agreeCount: 0 })
            setFormData({ ...formData, views: 0 })

            axios
                .post("http://10.0.0.106:5000/v1/posts", formData)
                .then((result) => {

                    //console.log(result.data.results);
                    setFormData({})
                    alert(formData.title)
                    //alert(formData.views + 'Suceessful Upload ')
                    //navigate('/')
                    //setTimeout(() => { window.location.reload() }, 10)
                    console.log(formData)

                })
                .catch((error) => {

                    alert('Error Saving...');

                }
                );

        } else {
            return null
        }
    }

    const back = () => {
        navigate('/')
        setTimeout(() => { window.location.reload() }, 10)
    }

    useEffect(() => {
    }, [i])


    // const defValues = (e) => {
    //     setFormData({ ...formData, agreeCount: '0' })
    //     setFormData({ ...formData, views: '0' })
    // }

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

        setFormData({ ...formData, price: e.target.value })


        if (priceTgl && document.querySelector('.uploadPrice').value !== '') {
            setPercent(percent + 20);
            setPriceTgl(false)

        } else if (document.querySelector('.uploadPrice').value === '') {
            setPercent(percent - 20);
            setPriceTgl(true)
        }
    }


    return (
        <>

            <TopBar />

            <div style={{ maxWidth: '470px', margin: '0px auto' }}>
                <div className='uploadHeader-wrap' >
                    <div className='upload-header header-wrap'>

                        <div className="header-textIcon">
                            <div className="header-text uploadHeader-text">
                                Upload Artwork
                            </div>
                            <i className='ri-close-line header-icon' onClick={(e) => back()} style={{ cursor: 'pointer' }}></i>
                        </div>

                        <div className='uploadProgress-wrap' style={{ paddingTop: '20px' }}>
                            <div>
                                <div className='uploadProgress-bar' style={{ width: '100%', height: '5px', background: '#292929', borderRadius: '100px' }}>
                                    <div className='uploadProgress-progress' style={{
                                        background: 'linear-gradient(270deg, #554D48 0%, #FFE7D9 100%)',
                                        width: '20px', height: '5px', borderRadius: '100px'
                                    }}></div>
                                </div>
                            </div>
                            {percent}% complete
                        </div>
                    </div>
                </div>

                <form style={{ display: 'flex', flexDirection: 'column', width: '200px', color: 'black' }}>

                    <Widget publicKey="bc3b6c954405f4e975b2" onChange={(fileInfo) => {
                        console.log(fileInfo)
                        setFormData({ ...formData, images: [fileInfo?.originalUrl] })
                    }} />

                    <input className="uploadTitle" type="text" placeholder='Title' onChange={e => titleProg(e)} required />
                    <input className="uploadDescription" type="text" placeholder='Description' onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                    <input className="uploadPrice" type="number" placeholder='Price' onChange={e => priceProg(e)} required />

                    <select required onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                        <option>digital</option>
                        <option>fine art</option>
                        <option>photography</option>
                    </select>

                    <select onChange={(e) => setFormData({ ...formData, tags: [e.target.value] })}>
                        <option>2023art</option>
                        <option>blackArt</option>
                        <option>folk</option>
                    </select>

                    <div className="submit-btnWrap">
                        <button type="submit" className="submit-btn" id="submit-btn" onClick={(e) => {
                            console.log(formData)
                            handleSubmit()
                        }} onSubmit={e => { e.preventDefault() }}>
                            Upload
                        </button>
                    </div>

                </form>

            </div>
        </>
    )
}

export default UploadArt