import './Banner.css'
import bannerImg1 from '../assets/banner_imgs/cat-dog-2.jpg';

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
                <button>Adotar</button>
            </div>
            </div>
        </section>
    //    <div className="container-fluid">
    //    <figure id="container" >
    //         <img src={bannerImg1} className='banner-img'/>
    //         <figcaption>Seu melhor amigo está aqui!</figcaption>
    //     </figure>
        
    //    </div>
       
    )
}


