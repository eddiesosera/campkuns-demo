import React from 'react';
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from 'react';
import Search from '../../../../search';
import axios from 'axios';

function CardOptions({ cardTag, post }) {

    const navigate = useNavigate()
    const [insertSearch, setInsertSearch] = useState('')

    const saveToCollection = () => {
        alert('Save to Collection')
    }
    const searchSimilar = () => {
        alert(cardTag)
        sessionStorage.setItem('Similar Item', cardTag)
        navigate('/search')
    };
    const sharePost = () => {
        alert('Share')
    };
    const reportPost = () => {
        alert('Report Card')
    }
    const deletePost = () => {

        let config = {
            method: 'delete',
            maxBodyLength: Infinity,
            url: 'http://10.0.0.106:5000/v1/posts/' + post?.id,
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`
            },
        };

        axios.request(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });

    }

    const optionList = [
        {
            icon: 'ri-share-forward-fill',
            label: 'Share',
            function: sharePost,
            color: ['#FFFFFF', '#CDCDCD']
        },
        {
            icon: 'ri-search-line',
            label: 'Search Similar',
            function: searchSimilar,
            color: ['#FFFFFF', '#CDCDCD']
        },
        {
            icon: 'ri-collage-fill',
            label: 'Save to Collection',
            function: saveToCollection,
            color: ['#FFFFFF', '#CDCDCD']
        },
        {
            icon: 'ri-feedback-fill',
            label: 'Report',
            function: reportPost,
            color: ['#ED2615', '#ED2615']
        },
        {
            icon: 'ri-delete-bin-fill',
            label: 'Delete',
            function: deletePost,
            color: ['#ED2615', '#ED2615']
        }
    ]


    return (
        <div style={{
            width: '93vw', position: 'absolute', maxWidth: '470px', display: 'flex', justifyContent: 'flex-end',
            zIndex: '5',
        }}>
            <ul className='option' style={{
                margin: '0', padding: '15px', listStyle: 'none', width: '215px', borderRadius: '15px', backgroundColor: '#232323',
                display: 'flex', flexDirection: 'column', height: 'content-fit', justifyContent: 'space-between', marginTop: '10px',
                marginRight: '10px', minHeight: '200px', boxShadow: '0px 0px 6px 1px rgba(255, 255, 255, 0.05)', border: '0.75px solid rgb(54, 54, 54)'
            }}>
                {
                    optionList?.map((cardoption) => {
                        return (
                            <li onClick={cardoption.function} className='cardOption-wrapper'
                                style={{
                                    cursor: 'pointer', display: 'flex', fontFamily: 'Poppins', alignItems: 'center',
                                    userSelect: 'none'
                                }}>
                                <i style={{ color: cardoption.color[0], fontSize: '22px' }} className={cardoption.icon}></i>
                                <div style={{
                                    marginLeft: '10px', height: '18px', display: 'flex', alignItems: 'center',
                                    fontWeight: '500', fontSize: '15px', color: cardoption.color[1]
                                }}>
                                    {cardoption.label}</div>

                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default CardOptions