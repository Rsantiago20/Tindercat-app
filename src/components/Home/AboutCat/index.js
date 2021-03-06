import React, { useState, useEffect, useContext } from 'react'
import { Interest } from './components/Interests'
import { Preferences } from './components/Preferences'
import { AboutContext } from '../../../contexts/AboutContext'
import { PreferencesAges } from './components/PreferencesAges'
import { HTTP_CONSTANTS } from '../../../config/http-constants'
import { requestHttp } from '../../../config/http-server'

const showAboutPanel = {
	display : 'block'
}

const hideAboutPanel = {
	display : 'none'
}

export const AboutCat = ({preferences, interest}) => {

    const { aboutPanel } = useContext(AboutContext)
    const [ preferencesUpdated, setPreferencesUpdated ] = useState(preferences)

    

    const prefChangedHandler = (newGender) => {
        setPreferencesUpdated(prevState => ({
            ...prevState,
            gender: newGender
        }))
    }

    const prefAgesChangedHandler = (min, max) => {
        setPreferencesUpdated(prevState => ({
            ...prevState,
            age_min: min,
            age_max: max
        }))
    }

    useEffect(() => {
        if (JSON.stringify(preferences) !== JSON.stringify(preferencesUpdated)) {
            requestChangePreferences()
        }
    }, [preferencesUpdated])

    const requestChangePreferences = async () => {
        try {
            const endpoint = HTTP_CONSTANTS.updatePreferences
            const bodyData = {
                preferences: preferencesUpdated
            }
            const response = await requestHttp('put', endpoint, bodyData)
        } catch (err) {
            console.error('Error: ', err)
        }
    }

    return (
        <div style={ aboutPanel ? showAboutPanel : hideAboutPanel } className="about-cat">
            <Preferences onChange={ prefChangedHandler } gender={ preferences.gender } />
            <PreferencesAges notifyChange={ prefAgesChangedHandler } ageMax={ preferences.age_max } ageMin={ preferences.age_min } />
            <Interest interestCat={ interest } />
        </div>
    )
}