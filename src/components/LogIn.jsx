import { useState, useRef, useEffect } from 'react';
import './LogIn.css';

export default function LogIn() {

    const userRef = useRef('');
    // const errRef = useRef();

    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);

    // useEffect(() => {
    //     userRef.current.focus();
    // }, [])
    // useEffect(() => {
    //     setErrorMsg('');
    // }, [user, password])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, password);
        setUser('');
        setPassword('');
        setSuccess(true);
    }


    return (

        <>
            {success ? (
                <section className='login-success'>
                    <h3>Você está logado!</h3>
                    <br />
                    <a href="#">Cadastre o Pet</a>
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
        </>
    )
}

