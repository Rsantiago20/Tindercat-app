import React from 'react'
import { Topbar } from './components/Topbar'
import { Navigation } from './components/Navigation'
import { Reactions } from './components/Reactions'
import { CatContextStore } from '../../../contexts/CatContext'

export const ViewCats = () => (
    <div className="view-cats">
        <CatContextStore>
            <Topbar />
            <Navigation />
            <Reactions />
        </CatContextStore>
    </div>
)