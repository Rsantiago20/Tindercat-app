import React from 'react'
import { Routers } from './components/Routers'
import { MsgContext } from './contexts/MsgContext'

export const App = () => (
    <MsgContext.Provider value={ 'Hola a todos!!' }>
        <Routers />
    </MsgContext.Provider>
)