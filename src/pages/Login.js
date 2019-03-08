import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import appLogo from '../img/logo.png'; 
import './Login.css'

class Login extends Component {
    render(){
        return(
            <div className='login-wrapper'>
                <img src={appLogo} className='logo-login' alt='Meus Livros'/>
                <form className='form-login'>
                    <h1>Login</h1>
                    <input type='email' placeholder='E-mail' autoFocus/>
                    <input type='password' placeholder='Senha'/>
                    <input type='submit' value='Entrar' />
                    <Link to='recuperacao'><p>Esqueceu sua senha?</p></Link>    
                    <hr />
                    <h3>Conecte-se com:</h3>
                    <div className='redes'>
                        <input type='submit' className='button-facebook' value='Facebook' />
                        <input type='submit' className='button-google' value='Google'/>
                    </div>
                    
                </form>
                <h3 className='cadastro'>Ainda não tem conta? <Link to='/cadastro'><strong>Cadastre-se</strong></Link></h3>
            </div>  
        )  
    }
}

export default Login;