import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


export const Login = (props) => {
    const [credentials, setCredentials,] = useState({ email: "", password: "" });
    const navigate = useNavigate()
    const handleSummit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        if (json.success) {
            // saving the auth token in localstorage
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Login Successfull", 'success')
            navigate('/')
        }
        else {
            props.showAlert("Invalid Credential", "danger")
        }
    }
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        props.setProgress(10)
        props.setProgress(100)
      
      }, [])
    return (
        <div className='container' >
            <h2>Login to continue Cloud-Notebook</h2>
            <form onSubmit={handleSummit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input value={credentials.email} type="email" className="form-control" onChange={handleChange} id="email" name='email' aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input value={credentials.password} type="password" className="form-control" onChange={handleChange} id="password" name='password' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div >
    )
}
