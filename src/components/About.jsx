import './About.css'
import Contato from './Contato';
import { Target, Eye, SketchLogo } from "phosphor-react";
import aboutImg from '../assets/banner_imgs/cat-person.jpg';

export default function About() {

    //home page
    return (

        <section className='about-us'>

            <article className='about-text-img'>

                <section className='about-text'>

                    <h3>Nossa história</h3>
                    <p>
                        A plataforma <b>Miadota</b> foi criada como resposta ao crescente número de animais sem lar e às dificuldades enfrentadas pelos abrigos para encontrar adotantes adequados. Nosso principal objetivo é facilitar o processo de adoção, através de uma plataforma que permite o cadastro de pets e a vizualização destes por possíveis adotantes. A Miadota não apenas facilita a adoção de animais, mas, também, promove uma conscientização sobre a importância da adoção responsável e do cuidado com os animais.
                    </p>

                    <ul className='about-numbers'>
                        <li><span className='bigger'>+ 100</span><br /> animais adotados</li>
                        <li><span className='bigger'>+ 20</span><br /> ONGs parceiras</li>
                        <li><span className='bigger'>5 anos</span><br /> de funcionamento</li>
                    </ul>
                </section>

                <div className="about-img">
                    <img src={aboutImg} alt="mulher com um gato no colo" />
                </div>

            </article>

            <section className='missao'>

                <div className='mvv'>
                    <div>
                        <h3>Missão</h3>
                        <Target size={32} />

                    </div>
                    <p>Facilitar a adoção responsável de animais de estimação, conectando abrigos e resgatadores a adotantes comprometidos, promovendo o bem-estar animal e reduzindo o número de animais sem lar.</p>
                </div>
                <div className='mvv'>
                    <div>
                        <h3>Visão</h3>
                        <Eye size={32} />

                    </div>
                    <p>Nosso objetivo é criar um mundo onde todos os animais de estimação tenham um lar amoroso e permanente. Queremos ser a principal plataforma de adoção de animais, reconhecida pela sua eficácia, transparência e compromisso com o cuidado dos animais.</p>
                </div>
                <div className='mvv'>
                    <div>
                        <h3>Valores</h3>
                        <SketchLogo size={32} />

                    </div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, iure delectus nemo impedit deleniti ducimus quod eveniet deserunt nam quidem! Voluptate quaerat unde, blanditiis commodi earum reprehenderit deleniti incidunt perferendis?
                    </p>
                </div>

            </section>


            <Contato />

        </section>

    )
}

