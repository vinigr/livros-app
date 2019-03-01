import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import appLogo from '../img/logo.png'; 

class Cadastro extends Component{
    render(){
        return(
            <div className='login-wrapper'>
                <img src={appLogo} className='logo' alt='Meus Livros'/>
                <form className='form'>
                    <h1>Cadastro</h1>
                    <input type='name' placeholder='Nome completo' />
                    <input type='email' placeholder='E-mail' autoFocus/>
                    <input type='password' placeholder='Senha'/>
                    <input type='date' placeholder='Data de Nascimento' />
                    <input type='submit' value='Cadastrar' />
                    <hr />
                    <h3>Conecte-se com:</h3>
                    <input type='submit' className='button-facebook' value='Facebook' />
                    <input type='submit' className='button-google' value='Google'/>
                </form>
                <h3 className='cadastro'>Já possui conta? <Link to='/cadastro'><strong>Entre</strong></Link></h3>
            </div>
        )
    }
}

export default Cadastro;