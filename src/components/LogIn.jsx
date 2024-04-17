import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom'
import './LogIn.css';

export default function LogIn({ logged, setLogged }) {

    const userRef = useRef('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        setUser('');
        setPassword('');
        setLogged(true);
    }

    return (

        <section className='login-page'>

            {logged ? (
                <section className='login-success'>
                    <h3>Você está logado!</h3>
                    <br />
                       <div className='login-btn'>
                       <button><Link to='/cadastro' className='btn'>Cadastrar Pet</Link></button> 
                       <button> <Link to='/adotar' className='btn'>Adotar Pet</Link></button>
                       </div>
                   

                </section>
            ) : (

                <section className='log-in'>


                    <h4>Log In</h4>

                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Usuário: </label>
                        <input type="text" id="username" ref={userRef} onChange={(e) => setUser(e.target.value)} value={user} required />

                        <label htmlFor="password">Senha: </label>
                        <input type="password" id="password" ref={userRef} onChange={(e) => setPassword(e.target.value)} value={password} required />

                        <button className='login-btn'>Log In</button>
                    </form>

                    <a href="#">Criar uma conta</a>

                </section>
            )}
        </section>
    )
}

