import './Navbar.css'
import { Cat } from "phosphor-react";
import {Link} from 'react-router-dom'
import { useState} from 'react';

export default function Navbar() {

    const [hamburgerOn, setHamburgerOn] = useState(false);

    return (
        <>

            <nav className="navbar navbar-expand-lg bg-body-tertiary teste fixed-top">
                <div className="container-fluid">
                    
                    <Link to='/' className="navbar-brand"><Cat size={50} /> Miadota</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setHamburgerOn(!hamburgerOn)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={(hamburgerOn? "show change-color":"") + " collapse navbar-collapse"} id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll my-navbar" >
                            <li className="nav-item">
                                <Link to='/'  className="nav-link active">Home</Link>
                                {/* <a className="nav-link active" aria-current="page" href="#">Sobre</a> */}
                            </li>
                            <li className="nav-item">
                            <Link to='/adotar' className="nav-link">Adotar</Link>
                            </li>

                            <li className="nav-item">
                                <Link to='/cadastro' className="nav-link">Cadastrar Pet</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " href="#">Contato</a>
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


