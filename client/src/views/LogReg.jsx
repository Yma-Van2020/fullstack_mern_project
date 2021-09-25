import React, {useState} from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"

const LogReg = () => {
    const history = useHistory()
    const [registerState, setRegisterState] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        repeatPassword:"",
        moodScore:[]
    })

    const[loginState, setLoginState] = useState({
        email:"",
        password:""
    })
 
    const [errorState, setErrorState] = useState({})
    const [lerrorState, setLerrorState] = useState("")

    const loginChangeHandler = e => {
        setLoginState({
            ...loginState,
            [e.target.name]:e.target.value
        })
    }

    const registerChangeHandler = e => {
        setRegisterState({
            ...registerState,
            [e.target.name]:e.target.value
        })
    }

    const registerSubmit = (e) =>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/user/register", registerState, {withCredentials:true})
            .then(res => history.push("/dashboard"))
            .catch(err => {
                const {errors} = err.response.data;
                const errObj = {}
    
                for(const [key, value] of Object.entries(errors)){
                    // console.log(errors[key])
                    errObj[key] = value;
                }
                setErrorState(errObj)
                console.log(errors)
            }
            )
    }

    const loginSubmit = e => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/user/login", loginState, {withCredentials:true})
            .then(res => history.push("/dashboard"))
            .catch(err => {
                setLerrorState(err.response.data.msg)
                console.log(lerrorState)
            })
    }


    return (
        <div>
            
    <div class="container">

<div class="row justify-content-center">

    <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
               
                <div class="row">
                    <div class="col-lg-6 d-none d-lg-block bg-login-image"></div>
                    <div class="col-lg-6">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Welcome Back!</h1>
                            </div>
                            <form onSubmit={loginSubmit} class="user">
                                <div class="form-group">
                                {(lerrorState)? <small className="ml-1 text-danger font-weight-bold">{lerrorState}</small>:null}
                                    <input  onChange={loginChangeHandler} type="email" class="form-control form-control-user"
                                        name="email" aria-describedby="emailHelp"
                                        placeholder="Enter Email Address..."></input>
                
                                </div>
                                <div class="form-group">
                                    <input  onChange={loginChangeHandler} type="password" class="form-control form-control-user"
                                        name="password" placeholder="Password"></input>
                                      
                                </div>
                                <div class="form-group">
                                    <div class="custom-control custom-checkbox small">
                                        <input type="checkbox" class="custom-control-input" id="customCheck"></input>
                                        <label class="custom-control-label" for="customCheck">Remember
                                            Me</label>
                                    </div>
                                </div>
                              
                                <input type="submit" value="Login" class="btn btn-primary btn-user btn-block"/>
                              
                                <a href="index.html" class="btn btn-google btn-user btn-block">
                                    <i class="fab fa-google fa-fw"></i> Login with Google
                                </a>
                                <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                    <i class="fab fa-facebook-f fa-fw"></i> Login with Facebook
                                </a>
                            </form>
                          
                            <div class="text-center">
                                <a class="small" href="forgot-password.html">Forgot Password?</a>
                            </div>
                            <div class="text-center">
                                <a class="small" href="register.html">Create an Account!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

</div>
<div class="row justify-content-center">

    <div class="col-xl-10 col-lg-12 col-md-9">

        <div class="card o-hidden border-0 shadow-lg my-5">
            <div class="card-body p-0">
                <div class="row">
                    <div class="col-lg-5 d-none d-lg-block bg-register-image"></div>
                    <div class="col-lg-7">
                        <div class="p-5">
                            <div class="text-center">
                                <h1 class="h4 text-gray-900 mb-4">Create an Account!</h1>
                            </div>
                            <form onSubmit={registerSubmit} class="user">
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input onChange={registerChangeHandler} type="text" class="form-control form-control-user" name="firstName"
                                            placeholder="First Name"></input>
                                              {(errorState.firstName)? <small className="ml-1 text-danger font-weight-bold">{errorState.firstName.message}</small>:null}
                                    </div>
                                    <div class="col-sm-6">
                                        <input onChange={registerChangeHandler} type="text" class="form-control form-control-user" name="lastName"
                                            placeholder="Last Name"></input>
                                              {(errorState.lastName)? <small className="ml-1 text-danger font-weight-bold">{errorState.lastName.message}</small>:null}
                                    </div>
                                </div>
                                <div class="form-group">
                                    <input onChange={registerChangeHandler} type="email" class="form-control form-control-user" name="email"
                                        placeholder="Email Address"></input>
                                          {(errorState.email)? <small className="ml-1 text-danger font-weight-bold">{errorState.email.message}</small>:null}
                                </div>
                                <div class="form-group row">
                                    <div class="col-sm-6 mb-3 mb-sm-0">
                                        <input onChange={registerChangeHandler} type="password" class="form-control form-control-user"
                                            name="password" placeholder="Password"></input>
                                             {(errorState.password)? <small className="ml-1 text-danger font-weight-bold">{errorState.password.message}</small>:null}
                                    </div>
                                    <div class="col-sm-6">
                                        <input onChange={registerChangeHandler} type="password" class="form-control form-control-user"
                                            name="repeatPassword" placeholder="Repeat Password"></input>
                                             {(errorState.repeatPassword)? <small className="ml-1 text-danger font-weight-bold">{errorState.repeatPassword.message}</small>:null}
                                    </div>
                                </div>
                                
                                <input type="submit" class="btn btn-primary btn-user btn-block" value="Register Account" />
                               
                                <a href="index.html" class="btn btn-google btn-user btn-block">
                                    <i class="fab fa-google fa-fw"></i> Register with Google
                                </a>
                                <a href="index.html" class="btn btn-facebook btn-user btn-block">
                                    <i class="fab fa-facebook-f fa-fw"></i> Register with Facebook
                                </a>
                            </form>
                           
                            <div class="text-center">
                                <a class="small" href="forgot-password.html">Forgot Password?</a>
                            </div>
                            <div class="text-center">
                                <a class="small" href="login.html">Already have an account? Login!</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </div>

</div>
        </div>
    )
}

export default LogReg
