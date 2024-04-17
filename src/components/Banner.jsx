import './Banner.css'
import bannerImg1 from '../assets/banner_imgs/cat-dog-2.jpg';
import { Link } from 'react-router-dom'

export default function Banner() {
    return (

        <section className='home-page'>
            <div className='home-img'>
                <img src={bannerImg1} alt="" />
            </div>

            <div className='home-text'>
                <p>Olá! Somos a</p>
                <h1>MIAdota</h1>
                <p>Venha buscar seu melhor amigo!</p>
                <div className='home-btns'>
                    <Link to='/adotar' className='banner-btn'><button >Adotar</button></Link>
                </div>
            </div>
        </section>

    )
}


