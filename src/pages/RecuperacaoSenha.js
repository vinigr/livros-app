import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import appLogo from '../img/logo.png'; 
import './RecuperacaoSenha.css'

class Login extends Component {
    render(){
        return(
            <div className='login-wrapper'>
                <img src={appLogo} className='logo' alt='Meus Livros'/>
                <form className='form-'>
                    <h1>Recupere sua senha</h1>
                    <input type='email' placeholder='E-mail' autoFocus/>
                    <input type='submit' value='Entrar' />
                </form>
                <h3 className='cadastro'>Ainda não tem conta?<Link to='/cadastro'><strong>Cadastre-se</strong></Link></h3>
            </div>  
        )  
    }
}

export default Login;