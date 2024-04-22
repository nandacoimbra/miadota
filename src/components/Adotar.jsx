import React from 'react'
//aproveita styles do form de login
import './LogIn.css';
import './Adotar.css';
//logo de coracao
import { Heart } from "phosphor-react";

//pag mostrada após clicar no botao "Adotar", na pag de pets
//disponiveis para adocao,já estando logado
const Adotar = () => {
  return (
    <section className='login-page'>

      <section className='login-success'>
        <h3>Seu interesse no pet foi registrado!</h3>
        <br />
        <Heart className='logo'size={50}/>
        <br />
        <p>Aguarde nossa equipe entrar em contato.</p>
      </section>

    </section>
  )
}

export default Adotar
