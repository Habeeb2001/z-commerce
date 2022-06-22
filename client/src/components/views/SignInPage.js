import "../../style/signinPage.css"
import React, { useMemo } from "react"
import { useParams, useNavigate } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { signin } from "../../dispatch/userAction"


function SigninPage() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const userSignin = useSelector(state => state.userSignin)
    const { loading, userInfo, error } = userSignin
    const dispatch = useDispatch();


    const navigateTo = useNavigate()
    useEffect(()=>{

        if(userInfo) {
            navigateTo("/")
        }
    }, [userInfo])
    



    
    const submitHandler=(e)=>  {
        e.preventDefault()
        dispatch(signin(email, password))
    
        

        

    }
    return (
    <div className="Form-parent">
        <div className="Form">
            <form onSubmit={submitHandler}>
                <div className="form-container">
                    <h1> sign In </h1>
                    <div className="inputBox">
                        {loading && <div>Loading...</div>}
                        {error && <div className="error-message">{error}</div>}
                    </div>
                    <div className="inputBox">
                        <label htmlFor="email">
                            email
                        </label>
                        <input type="email" name='email' id="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="password">
                            password
                        </label>
                        <input type="password" name='password' id="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="inputBox">

                        <button type="submit" className="btn btn-primary" >signIn</button>
                    </div>
                    <div className="inputBox">New to this website ?</div>
                    <div className="inputBox">
                        <Link to="/register" className="btn btn-fullWidth">create Account</Link>
                    </div>

                </div>
            </form>
        </div>
    </div>)
}



export default SigninPage