import './Navbar.css'
import { Cat } from "phosphor-react";
import {Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <>

            {/* <nav>
                <ul>
                    <li>Sobre</li>
                    <li>Adote</li>
                    <li>Contato</li>
                </ul>
            </nav> */}
            <nav className="navbar navbar-expand-lg bg-body-tertiary teste">
                <div className="container-fluid">
                    <Cat size={32} />
                    <a className="navbar-brand" href="#">Miadota</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" >
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Sobre</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Adotar</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link " aria-disabled="true">Cadastrar Pet</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " aria-disabled="true">Contato</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}


