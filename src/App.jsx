
import Navbar from './components/Navbar.jsx';
import Banner from './components/Banner.jsx';
import Card from './components/Card.jsx';
import Footer from './components/Footer.jsx';
import CadastroPet from './components/CadastroPet.jsx';

import './global.css';
import './App.css';
import nick from './assets/adoption_cats/nick.jpg';
import timtim from './assets/adoption_cats/timtim.jpg';
import pingo from './assets/adoption_cats/pingo.jpg';
import luna from './assets/adoption_cats/luna.jpg';
import { useState } from 'react';
import LogIn from './components/LogIn.jsx';
import About from './components/About.jsx';



export function App() {

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




  function addPet(newPet) {
    setPets([...pets, newPet])
  }

  return (

    <>
      <Navbar />

     
      <Banner />

      <section className='pets'>

        {pets.map((pet) => (
          <Card key={pet.id} objPet={pet} />
        ))}



      </section>

      <CadastroPet onSubmit={addPet} />

      <LogIn />

      {/* <About /> */}

      <Footer />

    </>
  );
}





