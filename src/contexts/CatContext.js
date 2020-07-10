import React, { createContext, useState, useEffect } from "react";

const initialState = null;

export const CatContext = createContext(initialState);

export const CatContextStore = ({children}) => {

    const [catInteraction, setCatInteraction] = useState(initialState)
    const [reloadCats, setReloadCats] = useState(false)

    return (
        <CatContext.Provider value={{catInteraction, setCatInteraction,reloadCats,setReloadCats}}>
            {children}
        </CatContext.Provider>
    )
} 
