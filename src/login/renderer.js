import React, { Component } from 'react';
import './style.scss'

class Form extends Component{
    constructor(props){
        super(props);
        this.state={ isLoginOpen: true , isRegisterOpen:false};
    }
    showRegisterBox(){
        this.setState({isLoginOpen:false , isRegisterOpen:true});
    }
    showLoginBox(){
        this.setState({isLoginOpen:true, isRegisterOpen:false});
    }
    
    render(){
        return(
            <div className="root-container">
                <div className="box-controller">
                    <div className={"controller "+(this.state.isLoginOpen? "selected-controller":"")}  onClick={this.showLoginBox.bind(this)}>
                    Login
                    </div>
                    <div className={"controller "+(this.state.isRegisterOpen? "selected-controller":"")} onClick={this.showRegisterBox.bind(this)}>
                        Register
                    </div>

                </div>
                <div className="box-container">
                   {this.state.isLoginOpen && <Login />}
                   {this.state.isRegisterOpen && <Register />}
                </div>
            </div>
        );
    }
    
}


class Login extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    submitLogin(e){
        
    }
    render(){
        return(
            <div className="inner-container">
                <div className="header">
                    Login
                </div>
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="username" >Username</label>
                        <input type="text" name="username" placeholder="Username" className="login-input" required/>

                    </div>

                    <div className="input-group">
                        <label htmlFor="password" >Password</label>
                        <input type="password" name="password" placeholder="Password" className="login-input" required/>

                    </div>

                    <button type="button" className="login-btn" onClick={this.submitLogin.bind(this)}>Login</button>

                </div>
            </div>
        );
    }
}

class Register extends Component{
    constructor(props){
        super(props);
        this.state={};
    }

    submitRegister(e){
        
    }
    render(){
        return(
            <div className="inner-container">
                <div className="header">
                    Register
                </div>
                <div className="box">
                    <div className="input-group">
                        <label htmlFor="username" >Username</label>
                        <input type="text" name="username" placeholder="Username" className="login-input"/>

                    </div>
                    <div className="input-group">
                        <label htmlFor="email" >Email</label>
                        <input type="email" name="email" placeholder="Email" className="login-input"/>

                    </div>

                    <div className="input-group">
                        <label htmlFor="password" >Password</label>
                        <input type="password" name="password" placeholder="Password" className="login-input"/>

                    </div>

                    <button type="button" className="login-btn" onClick={this.submitRegister.bind(this)}>Register</button>

                </div>
            </div>
        );
    }
}




export default Form; 