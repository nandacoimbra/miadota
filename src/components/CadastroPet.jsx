import { useState, useRef, useEffect } from 'react';
import './CadastroPet.css';
import { useNavigate } from "react-router-dom";
// import catImg from "../assets/adoption_cats/nick.jpg";
// import { MapPinLine } from "phosphor-react";

export default function CadastroPet({ logged, onSubmit }) {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [sex, setSex] = useState('femea');
    const [city, setCity] = useState('');
    const [estado, setEstado] = useState('');
    const [file, setFile] = useState();
    const fileInputRef = useRef(null); // Adicionando uma referência ao elemento de entrada de arquivo

    useEffect(() => {
        if (!logged) {
            navigate("/login")
            alert("Necessário realizar o Log In")
        }
    });

    function resetForm() {
        setName("");
        setSex("femea");
        setCity("");
        setEstado("");
        setFile();
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }

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

    function handleFileChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (

        <section className='cadastro-page'>
            <section className='cadastro'>
                <h3>Informações do Pet</h3>

                <form className='cadastro-form' onSubmit={handleSubmit}>

                    <label htmlFor="">Nome: </label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} required />

                    <div className='select-sex'>
                        <label htmlFor="">Sexo:</label>
                        <select value={sex} onChange={e => setSex(e.target.value)}>

                            <option value="macho">macho</option>
                            <option value="femea">femea</option>
                        </select>
                    </div>

                    <div className='city-name'>
                        <label htmlFor="">Cidade:</label>
                        <input type="text" value={city} onChange={e => setCity(e.target.value)} required />
                    </div>

                    <div className="state-name">
                        <label htmlFor="">Estado:</label>
                        <input type="text" value={estado} onChange={e => setEstado(e.target.value)} required />
                    </div>

                    <div className="petPhoto">
                        <h6>Adicionar imagem:</h6>
                        <input type="file" onChange={handleFileChange} ref={fileInputRef} required />
                        {file && <img src={file} alt="Pet" className='img-preview' />}
                    </div>

                    <button>Cadastrar</button>
                </form>

            </section>
        </section>


    )
}

