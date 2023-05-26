import AllFour from "../assets/TheoryRing.png";
import Trophy from "../assets/GameTheoryTrophy.png";

const SpiningLogo = () => {
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
      </>
  )
}

export default SpiningLogo