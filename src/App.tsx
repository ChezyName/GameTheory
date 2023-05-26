import { useState } from 'react'
import './App.css'

import Trophy from "./assets/GameTheoryTrophy.png";
import Quadrants from './Quadrants/Quadrants';
import SpiningLogo from './Quadrants/SpiningLogo';

import FILM from "./assets/FILM.png"
import FOOD from "./assets/FOOD.png"
import STYLE from "./assets/STYLE.png"
import IntroSequence from './Quadrants/IntroSequence';

import G from "./assets/SFX/GameTheorySFX.mp3"
import Flm from "./assets/SFX/FilmTheorySFX.mp3"
import F from "./assets/SFX/FoodTheorySFX.mp3"
import S from "./assets/SFX/StyleTheorySFX.mp3"

function App() {
  const [A,setA] = useState(false);
  const [B,setB] = useState(false);
  const [C,setC] = useState(false);
  const [D,setD] = useState(false);
  const [E,setE] = useState(false);
  const [End,setEnd] = useState(false);

  return (
    <>
      {E ? <SpiningLogo/> : ""}
      
      {!End ? <IntroSequence A={setA} B={setB} C={setC} D={setD} E={setE} End={setEnd}/> : "" }

      { A ? <Quadrants sfx={G} leftPos={0} topPos={0} namedID='GAME' image={Trophy} link='https://www.youtube.com/@GameTheory'/> : "" }
      { B ? <Quadrants sfx={Flm} leftPos={"50vw"} topPos={0} namedID='FILM' image={FILM} link='https://www.youtube.com/@FilmTheory'/> : "" }
      { C ? <Quadrants sfx={F} leftPos={0} topPos={"50vh"} namedID='FOOD' image={FOOD} link='https://www.youtube.com/@FoodTheory'/> : "" }
      { D ? <Quadrants sfx={S} leftPos={"50vw"} topPos={"50vh"} namedID='STYLE' image={STYLE} link='https://www.youtube.com/@StyleTheorists'/> : "" }
    </>
  )
}

export default App
