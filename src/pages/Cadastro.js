import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import appLogo from '../img/logo.png'; 
import './Cadastro.css';

class Cadastro extends Component{

    state = {
        name : '',
        email : '',
        password : '',
        categoria : ''
    };
    
    handleInputName = e => {
        this.setState({ name: e.target.value })
    }

    handleInputEmail = e => {
        this.setState({ email: e.target.value })
    }

    handleInputPassword = e => {
        this.setState({ password: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        const { name, email, password} = this.state;
        console.log(`Nome: ${name},
        Email: ${email},
        Senha: ${password}`);
    }

    render(){
        return(
            <div className='cadastro'>
                <header>
                    <img src={appLogo} className='logo' alt='Meus Livros'/>
                    <div className='login-entrar'>
                        <h3>Já possui conta?</h3>
                        <button><Link className='header-link' to='/login'>Entre</Link></button>
                    </div>
                    
                </header>
                <h1 className='titulo-cadastro'>Cadastre-se e experimente nossa plataforma!</h1>
                <main>
                    <div className='informacoes'>
                        <h2>Organize seus livros</h2>
                        <p>Anote todos os títulos que lhe interessam e acesse de maneira rápida e fácil</p>                     
                        <h2>Defina prazos</h2>
                        <p>Coloque datas para que possa terminar cada livro e seja mais produtivo</p>

                        <h2>Compartilhe com seus amigos</h2>
                        <p></p>                        
                    </div>

                    <form className='form-cadastro' onSubmit={this.handleSubmit}>
                        <h1>Cadastro</h1>
                        <input type='name' placeholder='Nome completo' value={this.state.name} onChange={this.handleInputName}/>
                        <input type='email' placeholder='E-mail' value={this.state.email} onChange={this.handleInputEmail}/>
                        <input type='password' placeholder='Senha' value={this.state.password} onChange={this.handleInputPassword}/>
                        <select>
                            <option>Categoria favorita</option>
                        </select>
                        <input type='submit' value='Cadastrar'/>
                        <hr />
                        <h3>Conecte-se com:</h3>
                        <input type='submit' className='button-facebook' value='Facebook' />
                        <input type='submit' className='button-google' value='Google'/>
                    </form>
                </main>


                
            </div>
        )
    }
}

export default Cadastro;