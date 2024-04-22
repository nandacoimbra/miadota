import './Card.css';
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { MapPinLine } from "phosphor-react";

export default function Card({ objPet, logged }) {

    const navigate = useNavigate();

    //monitorar o click no botao de adotar
    const [click, setClick] = useState(false);

    useEffect(() => {
        //se clicar em adotar e estiver logado, navega para a pag "Adotar"
        if (click && logged) {
            navigate("/adocao");

        } else {
            //se clicar em adotar e não estiver logado, navega para a pag "Login"
            if (click && !logged) {
                navigate("/login")
                alert("Necessário realizar o Log In")
            }
        }

    });
    return (

        <>
            {/* recebe os objetos da lista de pets declarada no App.jsx e/ou de um cadastro de pet */}
            <section className='card_body' key={objPet.id}>
                <div className='img-container'>
                    <img src={objPet.petImg} alt="" className='pet_image' />
                </div>
                <div className='card_footer'>
                    <h6 className='pet_name'>{objPet.petName}</h6>
                    <p className='pet_sex'>{objPet.petSex}</p>
                    <div className='pet_local'>
                        <MapPinLine size={25} />
                        <p>{objPet.petCity} - {objPet.petState}</p>
                    </div>
                    <button onClick={() => setClick(true)} className='btn-adopt'>Adotar</button>
                   
                </div>
            </section>
        </>
    )
}

