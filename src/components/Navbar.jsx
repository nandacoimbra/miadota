import './Navbar.css'
import { Cat,SignIn } from "phosphor-react";
import {Link} from 'react-router-dom'
import { useState} from 'react';

export default function Navbar() {

    //variavel de estado que vai monitorar se o menu hamburguer esta aberto ou nao
    const [hamburgerOn, setHamburgerOn] = useState(false);

    return (
        <>
            {/*modelo de navbar retirada do Boostrap*/}
            <nav className="navbar navbar-expand-lg bg-body-tertiary teste fixed-top">
                <div className="container-fluid">
                    
                    <Link to='/' className="navbar-brand"><div><Cat size={50} alt='Home'/> MIAdota</div></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setHamburgerOn(!hamburgerOn)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* se o menu hamburguer estiver aberto, adiciona as classes show e change-color */}
                    <div className={(hamburgerOn? "show change-color":"") + " collapse navbar-collapse"} id="navbarScroll">

                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll my-navbar" >
                            <li className="nav-item">
                                <Link to='/'  className="nav-link active" onClick={()=>setHamburgerOn(false)}>Home</Link>
                              
                            </li>
                            <li className="nav-item">
                            <Link to='/adotar' className="nav-link" onClick={()=>setHamburgerOn(false)}>Adotar</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/cadastro' className="nav-link" onClick={()=>setHamburgerOn(false)}>Cadastrar Pet</Link>
                            </li>
                            {/* <li className="nav-item">
                                <Link to='/' className="nav-link" onClick={()=>setHamburgerOn(false)}>Contato</Link>
                            </li> */}
                            <li className="nav-item">
                                <Link to='/login'className="nav-link " onClick={()=>setHamburgerOn(false)}><SignIn size={30} alt='Entrar'/></Link>
                                
                            </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form> */}
                    </div>
                </div>
            </nav>
        </>
    )
}


