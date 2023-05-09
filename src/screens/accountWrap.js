import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Account from './account'
import AccountGridView from './myaccount/route/accGridView'
import AccountSingleView from './myaccount/route/accSingleView'
import Gala from './myaccount/route/Gala'

export const AccountWrap = () => {
    return (
        <div>
            <Routes>
                <Route path='/account/view' element={<Account />}>
                    <Route path='grid-view' index element={<AccountGridView />} />
                    <Route path='single-view' index element={<AccountSingleView />} />
                    <Route path='gala-view' index element={<Gala />} />
                </Route>
            </Routes>
        </div>
    )
}
