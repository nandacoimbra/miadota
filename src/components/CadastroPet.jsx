import { useState, useRef, useEffect } from 'react';
import './CadastroPet.css';
import { useNavigate } from "react-router-dom";


export default function CadastroPet({ logged, onSubmit }) {

    const navigate = useNavigate();
    //nome do pet
    const [name, setName] = useState('');
    //sexo do pet
    const [sex, setSex] = useState('femea');
    //cidade do pet
    const [city, setCity] = useState('');
    //estado do pet
    const [estado, setEstado] = useState('');
    //foto do pet
    const [file, setFile] = useState();
    const [cadastro, setCadastro] = useState(false);
    const fileInputRef = useRef(null); // Adicionando uma referência ao elemento de entrada de arquivo


    //verifica se o usuário já está logado, se sim, navega pra pag de pets para adocao
    useEffect(() => {
        if (!logged) {
            navigate("/login")
            alert("Necessário realizar o Log In")
        }
        //se o form já foi enviado, o pet foi cadastrado, entao direciona
        //para a pag de pets disponiveis
        if(cadastro){
            
            navigate("/adotar")
        }
    });

    //funcao que limpa os dados do form apos cadastro
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

        //cria um obj pet e passa os valores coletados no form
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
        setCadastro(true)
        resetForm();
    }

    //upload da img do pet
    function handleFileChange(e) {
        console.log(e.target.files);
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    return (

        <section className='cadastro-page'>
            <section className='cadastro'>
                <h4>Informações do Pet</h4>

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

