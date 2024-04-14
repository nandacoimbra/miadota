import { useState } from 'react';
import './CadastroPet.css';
// import catImg from "../assets/adoption_cats/nick.jpg";
// import { MapPinLine } from "phosphor-react";

export default function CadastroPet({ onSubmit }) {

    const [name, setName] = useState('');
    const [sex, setSex] = useState('femea');
    const [city, setCity] = useState('');
    const [estado, setEstado] = useState('');
    const [file, setFile] = useState();

   function resetForm(){
    setName("");
    setSex("femea");
    setCity("");
    setEstado("");
    setFile("");
   }

    function handleSubmit(e) {
        e.preventDefault();
        const pet =
        {
            id: crypto.randomUUID(),
            petImg: file,
            petName: name,
            petSex: sex,
            petCity: city,
            petState: estado
        };
        onSubmit(pet);
        resetForm();
    }

    /**
     * 
     * @param {Event} e 
     */
    function handleFileChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }


    return (

        <section className='cadastro'>
            <h3>Informações do Pet</h3>

            <form className='cadastro-form' onSubmit={handleSubmit}>

                <label htmlFor="">Nome: </label>
                <input type="text" placeholder='Digite o nome' value={name} onChange={e => setName(e.target.value)} />

                <div className='select-sex'>
                    <label htmlFor="">Sexo:</label>
                    <select value={sex} onChange={e => setSex(e.target.value)}>

                        <option value="macho">macho</option>
                        <option value="femea">femea</option>
                    </select>
                </div>

                <div className='city-name'>
                    <label htmlFor="">Cidade:</label>
                    <input type="text" placeholder='Digite a cidade' value={city} onChange={e => setCity(e.target.value)} />
                </div>

                <div className="state-name">
                    <label htmlFor="">Estado:</label>
                    <input type="text" placeholder='Digite o estado' value={estado} onChange={e => setEstado(e.target.value)}/>
                </div>

                <div className="App">
                    <h6>Adicionar imagem:</h6>
                    <input type="file" onChange={handleFileChange} />
                    <img src={file} />
                </div>
              

                <button>Cadastrar</button>
            </form>

        </section>

    )
}

