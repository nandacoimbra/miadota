import './Footer.css';
import catImg from "../assets/adoption_cats/nick.jpg";
import { Cat, Copyright, InstagramLogo, FacebookLogo, Envelope } from "phosphor-react";

export default function Footer() {
    return (
        <>
            <footer className='footer-body'>
                
                <h3>MIAdota</h3>
                <div className='logo-text'>
                    <Cat size={50} />
                    <p className='copyright'>Todos os direitos reservados <Copyright size={16} /></p>
                </div>

                <div className='icons'>
                    <h6>Contato</h6>
                    <InstagramLogo size={25} />
                    <FacebookLogo size={25} />
                    <Envelope size={25} />
                </div>


            </footer>
        </>
    )
}