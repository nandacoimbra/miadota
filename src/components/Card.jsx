import './Card.css';
import catImg from "../assets/adoption_cats/nick.jpg";
import { MapPinLine } from "phosphor-react";

export default function Card({objPet}) {
    return (
        <>
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
                    <button> Tenho interesse</button>
                    {/* <a href="">Tenho interesse</a> */}
                </div>
            </section>
        </>
    )
}

