import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export const Singup = (props) => {
    const [credentials, setCredentials,] = useState({name:"", email: "", password: "", cpassword:"" });
    const navigate = useNavigate()
    let {name, email, password} = credentials;

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleSummit = async (e) => {
        e.preventDefault()
        const response = await fetch(`http://localhost:5000/api/auth/createuser`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({name, email, password})
        });
        const json = await response.json()
        if (json.success) {
            // saving the auth token in localstorage
            localStorage.setItem('token', json.authtoken);
            navigate('/')
            props.showAlert("Your Account is created Successfull", 'success')
        }
        else {
            props.showAlert("Invalid Credential", "danger")

        }
    }
    useEffect(() => {
        props.setProgress(10)
        props.setProgress(100)
      
      }, [])
    return (
        <div className='container'>
            <h2 className='mt-3'>Create a Account to use Cloud-Notebook</h2>
        <form onSubmit={handleSummit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input onChange={handleChange} type="text" className="form-control" id="name" name='name' aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input onChange={handleChange} type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" />
                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <input onChange={handleChange} type="password" className="form-control" id="password" name='password' minLength={5} required />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Confirm Password</label>
                <input onChange={handleChange} type="password" className="form-control" id="cpassword" name='cpassword' />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </div>
    )
}
