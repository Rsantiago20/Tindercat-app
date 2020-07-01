import React, { useEffect, useState, Fragment } from 'react'
import { Profile } from './Profile'
import { ViewCats } from './ViewCats'
import { AboutCat } from './AboutCat'
import { ProfileContextStore } from '../../contexts/ProfileContext'
import { HTTP_CONSTANTS } from '../../config/http-constants'
import { requestHttp } from '../../config/http-server'

export const Home = () => {

    const [cat, setCat] = useState({})

    const autologin = async () => {
        try {
            const endpoint = HTTP_CONSTANTS.autologin
            const response = await requestHttp('post', endpoint)
            const { status, cat } = response
            if (status === 1) {
                setCat(cat)
            } else {
                unauthorized()
            }
        } catch (err) {
            unauthorized()
        }
    }

    const unauthorized = () => {
        sessionStorage.removeItem('_TOKEN_')
        window.location.href = '/login'
    }

    useEffect (() => {
        autologin()

        return () => {}
    }, [])

    return (
        <div className="home-page">
            <ProfileContextStore>
                {
                    Object.keys(cat).length // false == 0
                    ? <Fragment>
                        <Profile bio={cat.bio} nick={cat.nick} image={cat.image} />
                        <ViewCats />
                        <AboutCat interest={ cat.interests } preferences={ cat.preferences } />
                    </Fragment>
                    : <p>Loading app...</p>
                }
            </ProfileContextStore>
        </div>
    )
}