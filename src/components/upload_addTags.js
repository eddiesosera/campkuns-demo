import React, { useEffect, useState } from 'react'

function UploadAddTags() {
    const [index, setIndex] = useState(0)
    const [tagVal, setTagVal] = useState('')
    const [deleteTag, setDeleteTag] = useState(true)
    const [tagsList, setTagsList] = useState([
        { tag: '', key: '' }
    ])

    useEffect(() => {
        console.log(tagsList)
    }, [index, tagsList, tagVal])

    return (
        <div>
            <div>

                <form>
                    <input className='tagInput' value={tagVal} onChange={e => { setTagVal(e.target.value); }} type='text' placeholder='Add Text' required />
                    <button type='submit' onClick={e => {

                        if (tagVal !== '') {
                            setIndex(index + 1)
                            tagsList.unshift({ tag: tagVal, key: index })
                            e.preventDefault()
                            console.log(tagsList)
                            setTagVal('')
                        } else { return null }

                    }}>
                        <i className='ri-add-line header-icon'></i>
                    </button>
                </form>

                <ul>
                    {tagsList.map((tagItem) =>
                        tagItem.tag !== '' ?
                            <li onClick={e => { setIndex(index - 1) }}>
                                <div style={{ color: 'white' }}>
                                    {tagItem.tag}
                                    <i onClick={e => {
                                        for (let i = 0; i < tagsList.length; i++) {
                                            tagItem.tag === tagsList[i].tag ? tagsList[i].tag = '' : tagsList[i].key = null
                                        }
                                    }} className='ri-close-line'></i>
                                </div>
                            </li> : null
                    )}
                </ul>

            </div>
        </div>
    )
}

export default UploadAddTags