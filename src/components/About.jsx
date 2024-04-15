import './About.css'
import { Cat } from "phosphor-react";
import { Link } from 'react-router-dom'
import aboutImg from '../assets/banner_imgs/cat-person.jpg';

export default function About() {
    return (
        <section className='about-us'>
            <article className='about-home'>
                <div className='about-text'>
                    <h3>Nossa História</h3>

                    <p className='first-big'>

                        A plataforma <b>Miadota</b> foi criada como resposta ao crescente número de animais sem lar e às dificuldades enfrentadas pelos abrigos para encontrar adotantes adequados. Nosso principal objetivo é facilitar o processo de adoção, através de uma plataforma que permite o cadastro de pets e a vizualização destes por possíveis adotantes. A Miadota não apenas facilita a adoção de animais, mas, também, promove uma conscientização sobre a importância da adoção responsável e do cuidado com os animais.

                    </p>

                <section className='numeros'>
                    <div className='num'>
                        <h5>100 +</h5>
                        <p>Pets adotados</p>
                    </div>
                    <div className='num'>
                        <h5>20 +</h5>
                        <p>ONGs parceiras</p>
                    </div>
                    <div className='num'>
                        <h5>5 anos</h5>
                        <p>de funcionamento</p>
                    </div>
            </section>
                </div>
            </article>
                <img src={aboutImg} alt="" className='about-img'/>
            
        </section>
    )
}

