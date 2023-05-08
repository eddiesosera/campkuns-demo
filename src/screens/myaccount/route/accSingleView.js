import React from 'react'
import PostCard from '../../additional/components/postCard'
import { SimlarPicks } from '../../additional/components/similarPicks'

function AccountSingleView() {
    return (
        <div style={{ marginBottom: '80px', marginTop: '20px' }}>
            <PostCard />
            <div style={{ marginBottom: '80px', marginTop: '20px' }}>
                <SimlarPicks />
            </div>
        </div>
    )
}

export default AccountSingleView