import React from 'react'
import { Topbar } from './components/Topbar'
import { Navigation } from './components/Navigation'
import { Reactions } from './components/Reactions'

export const ViewCats = () => (
    <div className="view-cats">
        <Topbar />
        <Navigation />
        <Reactions />
    </div>
)