import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import appLogo from '../img/logo.png'; 
import './Cadastro.css';

class Cadastro extends Component{
    render(){
        return(
            <div className='cadastro'>
                <header>
                    <img src={appLogo} className='logo' alt='Meus Livros'/>
                    <div className='login-entrar'>
                        <h3>Já possui conta?</h3>
                        <Link to='/login'><button>Entre</button></Link>
                    </div>
                    
                </header>
                



                {/* <form className='form'>
                    <h1>Cadastro</h1>
                    <input type='name' placeholder='Nome completo' autoFocus />
                    <input type='email' placeholder='E-mail' />
                    <input type='password' placeholder='Senha'/>
                    <label>Data de nascimento:</label>
                    <input type='date' placeholder='Data de Nascimento' className='data'/>
                    <input type='submit' value='Cadastrar' />
                    <hr />
                    <h3>Conecte-se com:</h3>
                    <input type='submit' className='button-facebook' value='Facebook' />
                    <input type='submit' className='button-google' value='Google'/>
                </form> */}
            </div>
        )
    }
}

export default Cadastro;