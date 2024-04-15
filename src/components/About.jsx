import './About.css'
import { Cat } from "phosphor-react";
import { Link } from 'react-router-dom'
import aboutImg from '../assets/banner_imgs/bannerCat.jpg';

export default function About() {
    return (
        <section className='about-us'>
            <article className='about-home'>
                <div className='about-text'>
                    <h3>Nossa História</h3>

                    <p>

                        A plataforma <b>Miadota</b> foi criada como resposta ao crescente número de animais sem lar e às dificuldades enfrentadas pelos abrigos para encontrar adotantes adequados. Nosso principal objetivo é facilitar o processo de adoção, através de uma plataforma que permite o cadastro de pets e a vizualização destes por possíveis adotantes. A Miadota não apenas facilita a adoção de animais, mas, também, promove uma conscientização sobre a importância da adoção responsável e do cuidado com os animais.

                    </p>

                </div>

                {/* <div class="about-imgs">
                    <img class="img-1" src={aboutImg}/>
                </div> */}
            </article>

            <section className='contact'>
            <h3>Contato</h3>
            </section>
        </section>
    )
}

