import React from 'react'
import './Contato.css'

const Contato = () => {
    return (
        <section className='contact-us'>

            <form className='contact-form'>
                <h3>Contato</h3>
                <div>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" name="nome" id="nome" />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" name="email" id="email" />
                </div>
                <div>
                    <label htmlFor="msg">Mensagem: </label>
                    <textarea name="mensagem" id="msg" cols="30" rows="10" placeholder='Dúvidas, sugestões, etc.'></textarea>
                </div>
                <button className='contact-button'>Enviar</button>
            </form>
        </section>
    )
}

export default Contato
