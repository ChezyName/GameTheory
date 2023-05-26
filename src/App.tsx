import { useState } from 'react'
import './App.css'

import AllFour from "./assets/TheoryRing.png";
import Trophy from "./assets/GameTheoryTrophy.png";
import Quadrants from './Quadrants/Quadrants';

import FILM from "./assets/FILM.png"
import FOOD from "./assets/FOOD.png"
import STYLE from "./assets/STYLE.png"

function App() {
  return (
    <>
      <div style={{
        height: "100vh",
        width: '100vw',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        position: "absolute"
      }}>
        <img
          id="OuterImage"
          src={AllFour} alt="Four Rings"
          height="550vw"
          width="550vw"
          style={{
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: "5"
          }}
        />
      </div>

      <div style={{
        height: "100vh",
        width: '100vw',
        display: 'flex',
        justifyContent: "center",
        alignItems: "center",
        position: "absolute"
      }}>
        <img
          id="InnerImage"
          src={Trophy} alt="Trophy"
          height="550vw"
          width="550vw"
          style={{
            userSelect: 'none',
            pointerEvents: 'none',
            zIndex: "5"
          }}
        />
      </div>
      
      <Quadrants leftPos={0} topPos={0} namedID='GAME' image={Trophy} link='https://www.youtube.com/@GameTheory'/>
      <Quadrants leftPos={"50vw"} topPos={0} namedID='FILM' image={FILM} link='https://www.youtube.com/@FilmTheory'/>
      <Quadrants leftPos={0} topPos={"50vh"} namedID='FOOD' image={FOOD} link='https://www.youtube.com/@FoodTheory'/>
      <Quadrants leftPos={"50vw"} topPos={"50vh"} namedID='STYLE' image={STYLE} link='https://www.youtube.com/@StyleTheorists'/>
    </>
  )
}

export default App
