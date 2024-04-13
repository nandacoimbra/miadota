import './CadastroPet.css';
// import catImg from "../assets/adoption_cats/nick.jpg";
// import { MapPinLine } from "phosphor-react";

export default function CadastroPet(props) {
    return (

        <section className='cadastro'>
            <h3>Informações do Pet</h3>
            <form className='cadastro-form'>
                <label htmlFor="">Nome: </label>
                <input type="text" placeholder='Digite o nome' />

                <div className='select-sex'>

                    <label htmlFor="">Sexo:</label>
                    <select>
                        <option value="macho">macho</option>
                        <option value="femea">femea</option>
                    </select>
                </div>

                <div className='city-name'>

                    <label htmlFor="">Cidade:</label>
                    <input type="text" placeholder='Digite a cidade' />
                </div>

                <div className="state-name">

                    <label htmlFor="" >Estado:</label>
                    <input type="text" placeholder='Digite o estado' />
                </div>
            </form>

        </section>

    )
}

