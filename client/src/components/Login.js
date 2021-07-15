import { navigate } from '@reach/router';
import React, { useState } from 'react';
import axios from 'axios';

const Login = (props) => {
    const {user, setUser} = props

const submitLogin = (e) => {
    e.preventDefault()
    axios.get(`http://localhost:8000/api/user/${user.username}`)
        .then(navigate(`/user/${user.username}`))
}

const formChange = (e) => {
    console.log("formchange")
    setUser({...user, [e.target.name]: e.target.value})
}

const newUser = (e) => {
    e.preventDefault() 
    axios.post('http://localhost:8000/api/user', user)
        // .then(response => setUser(response.data.results))
        .then(console.log("something"), navigate(`/user/${user.username}`))
        .catch(err => console.log(err.errors))
}

    return (
        <div className ="loginbackGround">
            <h2>Returning users login</h2>
            <form onSubmit={submitLogin}>
                <div>
                    <label htmlFor='username'>User Name</label>
                    <input type='text' name='username' onChange={formChange} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>
                    <input type='password' name='password' onChange={formChange} />
                    <button type="button" class="btn btn-primary " style={{backgroundColor:"lavender" , color: "black" , border: "3px solid lightcyan" }}>Login</button>
                </div>
            </form>
            <br/>
            <h2>New user registration</h2>
            <form onSubmit={ newUser }>
                <div>
                    <label htmlFor='username'>User Name</label>
                    <input type='text' name='username' onChange={formChange} />
                </div>
                <div>
                    <label htmlFor='email'>User Email</label>
                    <input type='text' name='email' onChange={formChange} />
                </div>
                <div>
                    <label htmlFor='password'>Password</label>     
                    <input type='text' name='password' onChange={formChange} />
                    <button type="submit" class="btn btn-primary " style={{backgroundColor:"lavender" , color: "black" , border: "3px solid lightcyan" }}>Login</button>
                </div>
            </form>
        </div>
    )
}

export default Login
