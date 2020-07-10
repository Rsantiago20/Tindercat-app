import React, { createContext, useEffect, useState } from 'react'

const initialState = false

export const AboutContext = createContext(initialState)

export const AboutContextStore = ({ children }) => {

    const [ aboutPanel, setAboutPanel ] = useState(false)

    useEffect ( () => {
        const showState = window.innerWidth > 768
        setAboutPanel(showState)
    }, [])

    return(
        <AboutContext.Provider value={{ aboutPanel, setAboutPanel }}>
            { children }
        </AboutContext.Provider>
    )
}