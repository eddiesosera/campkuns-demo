import React from 'react'
import PostCard from '../../additional/components/postCard'
import { SimlarPicks } from '../../additional/components/similarPicks'

function AccountExhibitView() {

    //Show Navbar
    document.querySelector('#app_nav_wrap').style.display = 'block'
    return (
        <div style={{ marginBottom: '80px', marginTop: '20px' }}>
            FROM OPENSPACE THIS EVENTS/EXHIBITIONS
        </div>
    )
}

export default AccountExhibitView