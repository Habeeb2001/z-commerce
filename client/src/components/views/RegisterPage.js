import "../../style/signinPage.css"
import React from "react"
import { useParams, useNavigate, useHistory } from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
// import { userSignInReducer, userRegisterReducer } from "../../reducers/userReducer"
import { register } from "../../dispatch/userAction"

function RegisterPage() {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const userRegister = useSelector(state=>state.userRegister)
    const {loading, userInfo, error} = userRegister
    const dispatch = useDispatch();


    var navigate = useNavigate()
    useEffect(()=>{
        if(userInfo) navigate('/')
    }, [userInfo])
   
    const  submitHandler=(e)=> {
        e.preventDefault()
        dispatch(register(name, email, password))
    }
    return (<div className="Form-parent">
        <div className="Form">
            <form onSubmit={submitHandler}>
                <div className="form-container">
                    <h1> create account </h1>
                    <div className="inputBox">
                        {loading&&<div>Submitting...</div>}
                        {error && <div className="error-message">{error}</div>}
                    </div>
                    <div className="inputBox">
                        <label htmlFor="email">
                            email
                        </label>
                        <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="name">
                            name
                        </label>
                        <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="password">
                            password
                        </label>
                        <input type="password" name="password"  id="password" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="inputBox">
                        <label htmlFor="confirmPassword`">
                            confirm password
                        </label>
                        <input type="password" name="confirmPassword"  id="confirmPassword" onChange={(e) => setConfirmPassword(e.target.value)} />
                    </div>
                    <div className="inputBox">

                        <button type="submit"  className="btn btn-primary">Register </button>
                    </div>
                    <div className="inputBox">Already hanve an account ?</div>
                    <div className="inputBox">
                        <Link to="/signin" className="btn btn-fullWidth">Log in</Link>
                    </div>

                </div>
            </form>
        </div>
    </div>)
}



export default RegisterPage