import { useState } from 'react'
import './App.css'

import AllFour from "./assets/TheoryRing.png";
import Trophy from "./assets/GameTheoryTrophy.png";

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
            zIndex: "5"
          }}
        />
      </div>
      
      <div id="GAME" style={{
        width: "50vw",
        height: "50vh",
        position: "absolute",
        zIndex: '0',
        left: "0",
        top: "0",
        backgroundColor: "rgba(1,227,31,0.25)"
      }}></div>

      <div id="FILM" style={{
        width: "50vw",
        height: "50vh",
        position: "absolute",
        zIndex: '0',
        left: "50vw",
        top: "0",
        backgroundColor: "rgba(254, 0, 2,0.25)"
      }}></div>

      <div id="FOOD" style={{
        width: "50vw",
        height: "50vh",
        position: "absolute",
        zIndex: '0',
        left: "0vw",
        top: "50vh",
        backgroundColor: "rgba(255,255,1,0.25)"
      }}></div>

      <div id="STYLE" style={{
        width: "50vw",
        height: "50vh",
        position: "absolute",
        zIndex: '0',
        left: "50vw",
        top: "50vh",
        backgroundColor: "rgba(0,192,255,0.25)"
      }}></div>
    </>
  )
}

export default App
