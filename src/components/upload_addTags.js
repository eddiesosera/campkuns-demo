import React, { createContext, useEffect, useState } from 'react';
import './upload_addTags.css'

export default function UploadAddTags({ tagList }) {
    const [index, setIndex] = useState(0)
    const [tagVal, setTagVal] = useState('')
    const [deleteTag, setDeleteTag] = useState(true)
    const [tagsList, setTagsList] = useState([{ tag: '', key: '' }])
    const [expSessTags, setExpSessTags] = useState([])

    useEffect(() => {
        console.log(tagsList)
        // tagsList.map((i)=>i.tag)
    }, [index, tagsList, tagVal, expSessTags])

    return (

        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '15px' }}>

            <form className='addTag-wrap'>
                <div style={{ fontWeight: '600', color: '#757575' }}>#</div>
                <input className='tagInput' value={tagVal} onChange={e => { setTagVal(e.target.value.replace(/ /g, '')); }}

                    type='text' placeholder='Keyword' required />
                <button id='addTag-icon-wrap' type='submit' onClick={e => {

                    if (tagVal !== '') {
                        setIndex(index + 1)
                        tagsList.unshift({ tag: tagVal.replace(/ /g, ''), key: index })
                        e.preventDefault()
                        console.log(tagsList)
                        setTagVal('')
                        setExpSessTags(tagsList.map((tag) => tag.tag))
                        sessionStorage.setItem('tags', expSessTags)
                    } else { return null }

                }}>
                    <i className='ri-add-line addTag-icon'></i>
                </button>
            </form>

            <ul className='ul-parent' style={{ padding: 0, display: 'flex', gap: '10px', marginTop: '10px', flexFlow: 'wrap' }}>
                {tagsList.map((tagItem) =>
                    tagItem.tag !== '' ?
                        <li className='newTag-wrap' onClick={e => { setIndex(index - 1) }}>
                            <div style={{ display: 'flex' }}>
                                <div className='newTag-txt' style={{ marginRight: '5px', color: '#FDE5D7', display: 'flex', alignItems: 'center', fontWeight: '600' }}>#{tagItem.tag}</div>
                                <i onClick={e => {
                                    for (let i = 0; i < tagsList.length; i++) {
                                        tagItem.tag === tagsList[i].tag ? tagsList[i].tag = '' : tagsList[i].key = null
                                    }
                                }} className='ri-close-line deleteTag-icon'></i>
                            </div>
                        </li> : null
                )}
            </ul>

        </div>
    )
}