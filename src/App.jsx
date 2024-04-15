
import './global.css';
import './App.css';
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';
import CadastroPet from './components/CadastroPet.jsx';
//imagens para os pets já cadastrados
import nick from './assets/adoption_cats/nick.jpg';
import timtim from './assets/adoption_cats/timtim.jpg';
import pingo from './assets/adoption_cats/pingo.jpg';
import luna from './assets/adoption_cats/luna.jpg';
import { useState } from 'react';
import LogIn from './components/LogIn.jsx';
import Home from './components/Home.jsx';
import { Routes, Route } from 'react-router-dom';



export function App() {

  //lista de objetos de pets

  const [pets, setPets] = useState([
    {
      id: 1,
      petImg: nick,
      petName: "Nick Mason",
      petSex: "macho",
      petCity: "Cataguases",
      petState: "MG"

    },
    {
      id: 2,
      petImg: timtim,
      petName: "Tim Tim",
      petSex: "macho",
      petCity: "Cataguases",
      petState: "MG"
    },
    {
      id: 3,
      petImg: pingo,
      petName: "Pingo",
      petSex: "macho",
      petCity: "Leopoldina",
      petState: "MG"
    },
    {
      id: 4,
      petImg: luna,
      petName: "Luna",
      petSex: "Femea",
      petCity: "Leopoldina",
      petState: "MG"
    }
  ])

  const [logged, setLogged] = useState();

  //add um novo pet na lista de objetos 
  function addPet(newPet) {
    setPets([...pets, newPet])
  }

  return (

    
    <main>
      <Navbar />
      <Routes className=''>

        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LogIn logged={logged} setLogged={setLogged}/>} />
        <Route path='/cadastro' element={<CadastroPet logged={logged} onSubmit={addPet} />} />
        <Route path='/adotar' element={<section className='pets'>

          {pets.map((pet) => (
            <Card key={pet.id} objPet={pet} />
          ))}

        </section>

        } />
      </Routes>





      {/* <CadastroPet onSubmit={addPet} /> */}

   

      {/* <About /> */}

      <Footer />

    </main>
  
  );
}





