import { useState, useRef } from 'react';
import { Link } from 'react-router-dom'
import './LogIn.css';

export default function LogIn({ logged, setLogged }) {

    const userRef = useRef('');
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        // impede que o navegador execute a ação padrão associada ao evento, que neste caso é recarregar a página ou enviar uma requisição ao servidor.
        e.preventDefault();
        //limpa os campos
        setUser('');
        setPassword('');
        //seta o estado logged (declarado no App.jsx) para true
        setLogged(true);
    }

    return (

        <section className='login-page'>

            {/* se o usuario esta logado (logged=true) */}
            {logged ? (
                <section className='login-success'>
                    <h3>Você está logado!</h3>
                    <br />
                       <div>
                      <Link to='/cadastro' className='btn'><button className='login-btn login-btn-2'>Cadastrar Pet</button></Link>
                        <Link to='/adotar' className='btn'><button className='login-btn login-btn-2'>Adotar Pet</button></Link>
                       </div>
                </section>
            ) : (

                <section className='log-in'>
                    <h4>Log In</h4>

                    <form onSubmit={handleSubmit} autoComplete='off'>
                        <label htmlFor="username">Usuário: </label>
                        <input type="text" id="username" ref={userRef} onChange={(e) => setUser(e.target.value)} value={user} required />

                        <label htmlFor="password">Senha: </label>
                        <input type="password" id="password" ref={userRef} onChange={(e) => setPassword(e.target.value)} value={password} required />

                        <button className='login-btn'>Log In</button>
                    </form>

                    {/* em construcao */}
                    <a href="" className='creat-account'>Criar uma conta</a>

                </section>
            )}
        </section>
    )
}

