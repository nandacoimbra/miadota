import React from 'react'
import './LogIn.css';
import './Adotar.css';
import { Heart } from "phosphor-react";

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
