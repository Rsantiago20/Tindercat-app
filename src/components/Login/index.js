import React, { useState } from 'react'
import Logo from '../../static/logo-login.png'
import {
    Link, useHistory
} from 'react-router-dom'
import { HTTP_CONSTANTS } from '../../config/http-constants'
import { requestHttp } from '../../config/http-server'
import swal from 'sweetalert'

export const Login = () => {

    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const history = useHistory()

    const loginHandler = (e) => {
        e.preventDefault()
        const data = {
            email,
            password
        }
        loginRequest (data)
    }

    const loginRequest = async (data) => {
        try {
            const endpoint = HTTP_CONSTANTS.login
            const response = await requestHttp('get', endpoint, {}, data)
            if (response.status === 1) {
                sessionStorage.setItem('_TOKEN_', response.token)
                redirectHome()
            } else {
                swal('Error', 'Email/passwort not valid', 'warning')
            }
        } catch (err) {
            swal('Error', 'Email/passwort not valid', 'warning')
        }
    }

    const redirectHome = () => {
        history.push('/')
    }

    return (
        <div className="login">
            <form onSubmit={ loginHandler }>
                <img src={Logo} />
                <div className="input-custom">
                    <label>Email address</label>
                    <input value={ email } onChange={ (e) => setEmail(e.target.value) } type="email" />
                </div>
                <div className="input-custom">
                    <label>Password</label>
                    <input value={ password } onChange={ (e) => setPassword(e.target.value) } type="password" />
                </div>
                <br />
                <div className="button-primary">
                    <input type="submit" value="Login" />
                </div>
                <br />
                <p className="signup-link">
                    ¿Not member yet?
                    <Link to="/signup">
                        Signup
                    </Link>
                </p>
            </form>
        </div>
    )
}