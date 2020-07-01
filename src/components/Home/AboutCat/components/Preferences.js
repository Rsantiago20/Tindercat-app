import React, { useState, useEffect } from 'react'

export const Preferences = ({ gender, onChange }) => {

    const [genderSelected, setGenderSelected] = useState(gender)

    useEffect(() => {
        onChange(genderSelected)
    }, [genderSelected])

    //()
    /*const onChangeHandlerGender = (e) => {
        setGenderSelected(e.target.value)   
        onChange()
    }*/

    return (
        <div className="interest-container">
            <h3>Preferences</h3>
            <hr />
            <form className="form-preferences">
                <label htmlFor="female">Female</label>
                <input checked={ genderSelected == 'F' } onChange={ e => setGenderSelected(e.target.value) } name="gender" type="radio" value="F" />
                <span className="divider"></span>
                <label htmlFor="male">Male</label>
                <input checked={ genderSelected == 'M' } onChange={ e => setGenderSelected(e.target.value) } name="gender" type="radio" value="M" />
            </form>
        </div>
    )
}