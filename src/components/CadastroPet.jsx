import { useState, useRef, useEffect } from 'react';
import './CadastroPet.css';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


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
    const [ufs, setUfs] = useState([]);
    const [selectedUf, setSelectedUf] = useState("0");
    const [cities, setCities] = useState([]);


    //verifica se o usuário já está logado, se sim, navega pra pag de pets para adocao
    useEffect(() => {
        if (!logged) {
            navigate("/login")
            alert("Necessário realizar o Log In")
        }
        //se o form já foi enviado, o pet foi cadastrado, entao direciona
        //para a pag de pets disponiveis
        if (cadastro) {

            navigate("/adotar")
        }
    });

    useEffect(() => {
        axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/").then(Response => {
            setUfs(Response.data);
        })
    });

    useEffect(() => {
        axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(Response => {
            setCities(Response.data);
        })
    }, [selectedUf]);

    function handleSelectedUf(e) {
        setSelectedUf(e.target.value);
    }

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

                    <div className="state-name">
                        <label htmlFor="uf">Estado:</label>
                        {/*<input type="text" value={estado} onChange={e => setEstado(e.target.value)} required /> */}

                        <select name="uf" id="uf" onChange={e => {
                            setEstado(e.target.value);
                            handleSelectedUf(e);
                        }
                        }
                            required>
                            <option value="0">Selecione o estado</option>

                            {ufs.map((uf) => {
                                return <option key={uf.id} value={uf.sigla}>{uf.nome}</option>
                            })}
                        </select>

                    </div>

                    <div className='city-name'>
                        <label htmlFor="city">Cidade:</label>
                        {/*<input type="text" value={city} onChange={e => setCity(e.target.value)} required /> */}
                        <select name="city" id="city" onChange={e => setCity(e.target.value)} required>
                            <option value="0">Selecione a cidade</option>
                            
                            {cities.map((newCity) => (
                                <option key={newCity.id} value={newCity.nome}>{newCity.nome}</option>
                            ))}
                        </select>

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

