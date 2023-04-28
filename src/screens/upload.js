import React, { useState } from "react";
import axios from 'axios'
import { Navigate, useNavigate } from "react-router-dom";
function Upload() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({})
    const handleSubmit = () => {
        axios
            .post("http://localhost:5000/v1/posts", formData)
            .then((result) => {
                console.log(result.data.results);
                setFormData({})
                alert('saved')
                navigate('/')
            })
            .catch((error) => {
                alert('error saving...');
                navigate('/')
            }
            );
    }


    return (
        <div>
            <div className='uploadHeader-wrap'>
                <div className='upload-header'>
                    <div>
                        Upload Artwork
                        <i className='ri-close-line'></i>
                    </div>
                    <div className='uploadProgress-wrap'>
                        <div>
                            <div className='uploadProgress-bar'></div>
                        </div>
                        % complete
                    </div>
                </div>
            </div>
            <form style={{ display: 'flex', flexDirection: 'column', width: '200px', color: 'black' }}>
                <input type="text" placeholder='Title' onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                <input type="text" placeholder='Description' onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
                <input type="text" placeholder='Price' onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
                <input type="text" placeholder='Image URL' onChange={(e) => setFormData({ ...formData, images: [e.target.value] })} />
                <select onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
                    <option>digital</option>
                    <option>fine art</option>
                    <option>photography</option>
                </select>
                <select onChange={(e) => setFormData({ ...formData, tags: [e.target.value] })}>
                    <option>2023art</option>
                    <option>blackArt</option>
                    <option>folk</option>
                </select>
                <button onClick={(e) => {
                    e.preventDefault()
                    console.log(formData)
                    handleSubmit()
                }}>Upload</button>
            </form>
        </div>
    )
}

export default Upload