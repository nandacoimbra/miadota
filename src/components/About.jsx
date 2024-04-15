import './About.css'
import { Cat } from "phosphor-react";
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <section className='about-us'>
            <article className='about-home'>
                <div className='about-text'>
                    <h3>Nossa História</h3>

                    <p>

                        A plataforma Miadota foi criada como resposta ao crescente número de animais sem lar e às dificuldades enfrentadas pelos abrigos para encontrar adotantes adequados. Nosso principal objetivo é facilitar o processo de adoção, através de uma plataforma que permite o cadastro de pets e a vizualização destes por possíveis adotantes. A Miadota não apenas facilita a adoção de animais, mas também promove uma conscientização sobre a importância da adoção responsável e do cuidado com os animais.

                    </p>

                </div>

                {/* <div class="about-imgs">
                    <img class="img-1" src='https://source.unsplash.com/random/700x701/?cat'/>
                    <img class="img-3" src='https://source.unsplash.com/random/700x1410/?dog'/>
                    <img class="img-2" src='https://source.unsplash.com/random/700x700/?cat'/>
                </div> */}
            </article>
        </section>
    )
}

