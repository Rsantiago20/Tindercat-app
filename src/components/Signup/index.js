import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import Logo from '../../static/logo-login.png'
import swal from 'sweetalert'
import { requestHttp } from '../../config/http-server'
import { HTTP_CONSTANTS } from '../../config/http-constants'

export const Signup = (props) => {

    const [gender, setGender] = useState('F')
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [birthday, setBirthday] = useState('')
    const [email, setEmail] = useState('')
    const [photo, setPhoto] = useState('')
    const [bio, setBio] = useState('')
    const [password, setPassword] = useState('')
    
    const history = useHistory()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        const data = signupCatData()
        signupRequest(data)
    }

    const signupCatData = () => {
        const data = {
            name,
            bio,
            email,
            nick: username,
            gender,
            password,
            birthday,
            image: photo,
            preferences: {
                gender: gender === 'F' ? 'M' : 'F',
                age_min: 1,
                age_max: 10
            }
        }
        return data
    }

    const signupRequest = async (data) => {
        try {
            const endpoint = HTTP_CONSTANTS.register
            const response = await requestHttp('post', endpoint, data)
            if (response.status === 1) {
                swal('Great!', 'You are now in Tindercat', 'success')
                .then(value => {
                    redirectLogin()
                })
            } else {
                swal('Error', 'Try later please', 'warning')
            }
        } catch (err) {
            swal('Error', 'Try later please', 'warning')
        }
    }

    const redirectLogin = () => {
        history.push('/login')
    }

    return (
        <div className="login">
            <form onSubmit={ onSubmitHandler }>
                <img src={Logo} />
                <h3>Sign Up</h3>
                <input checked={ gender === 'F' } onChange={ e => setGender(e.target.value) } type="radio" name="gender" value="F" />
                <label>Female</label>
                <span className="divider"></span>
                <input checked={ gender === 'M' } onChange={ e => setGender(e.target.value) } type="radio" name="gender" value="M" />
                <label>Male</label>
                <div className="input-custom">
                    <label>Name </label>
                    <input value={ name } onChange={ e => setName(e.target.value) } type="text" required={ true } />
                </div>
                <div className="input-custom">
                    <label>Username</label>
                    <input value={ username } onChange={ e => setUsername(e.target.value) } type="text" required={ true } />
                </div>
                <div className="input-custom">
                    <label>Birthday</label>
                    <input value={ birthday } onChange={ e => setBirthday(e.target.value) } type="date" required={ true } />
                </div>
                <div className="input-custom">
                    <label>Email</label>
                    <input value={ email } onChange={ e => setEmail(e.target.value) } type="email" required={ true } />
                </div>
                <div className="input-custom">
                    <label>Photo</label>
                    <input value={ photo } onChange={ e => setPhoto(e.target.value) } type="url" required={ true } />
                </div>
                <div className="input-custom">
                    <label>Bio</label>
                    <textarea value={ bio } onChange={ e => setBio(e.target.value) } required={ true }></textarea>
                </div>
                <div className="input-custom">
                    <label>Password</label>
                    <input value={ password } onChange={ e => setPassword(e.target.value) } type="password" required={ true } />
                </div>
                <br />
                <div className="button-primary">
                    <input type="submit" value="Sign Up" />
                </div>
            </form>
        </div>
    )
}