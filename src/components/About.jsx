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

                        A ONG Miadota foi fundada como resposta ao crescente número de animais sem lar e às dificuldades enfrentadas pelos abrigos de animais para encontrar adotantes adequados. Determinados a fazer a diferença, os membros da equipe da Miadota reuniram suas habilidades em desenvolvimento web, design e marketing para criar uma plataforma online que conectasse animais disponíveis para adoção a pessoas dispostas a abrir seus corações e lares para eles.

                    </p>

                    <p>
                        A plataforma Miadota foi desenvolvida para ser intuitiva e fácil de usar. Permitia que os usuários cadastrassem animais para adoção, fornecendo informações detalhadas sobre cada animal, juntamente com fotos encantadoras para atrair possíveis adotantes. Além disso, os interessados em adotar podiam navegar pela variedade de animais cadastrados, filtrar suas preferências e iniciar o processo de adoção diretamente pelo site.
                    </p>

                    <p>
                        Com o passar do tempo, a Miadota tornou-se uma comunidade vibrante e acolhedora, reunindo amantes de animais de todas as partes do mundo. Milhares de animais encontraram lares amorosos graças à plataforma, e inúmeras histórias de adoção feliz foram compartilhadas e celebradas.

                    </p>
                    <p>
                        A ONG Miadota não apenas facilitou a adoção de animais, mas também promoveu a conscientização sobre a importância da adoção responsável e do cuidado com os animais. Eventos de adoção foram organizados regularmente em parceria com abrigos locais, e programas educacionais foram desenvolvidos para informar o público sobre questões relacionadas ao bem-estar animal.
                    </p>
                    <p>
                        Ao longo dos anos, a ONG Miadota continuou a crescer e expandir sua missão, inspirando outras iniciativas semelhantes em todo o mundo. Graças ao compromisso e dedicação de sua equipe e à generosidade de seus apoiadores, a Miadota continuou a fazer uma diferença significativa na vida de animais abandonados, proporcionando-lhes uma segunda chance e um lar para sempre.
                    </p>


                </div>

                <div class="about-imgs">
                    <img class="img-1" src='https://source.unsplash.com/random/700x701/?cat'/>
                    <img class="img-3" src='https://source.unsplash.com/random/700x1410/?dog'/>
                    <img class="img-2" src='https://source.unsplash.com/random/700x700/?cat'/>
                </div>
            </article>
        </section>
    )
}

