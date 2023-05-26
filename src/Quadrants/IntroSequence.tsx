import IntroVideo from "..//assets/GT_SITE_INTRO.mp4";

import { useEffect,useRef, useState } from "react";

type settings = {
    A:any,
    B:any,
    C:any,
    D:any,
    E:any,
    End:any,
}

const IntroSequence = ({A,B,C,D,E,End}:settings) => {
    const vidPlayer:any = useRef();
    const [started,setStarted] = useState(false);

    useEffect(() => {
    }, [])

    function AudioBeats(){
        setTimeout(() => {
            A(true);
        },6027+1000)
        setTimeout(() => {
            B(true);
        },6464+1000)
        setTimeout(() => {
            C(true);
        },6785+1000)
        setTimeout(() => {
            D(true);
        },7132+1000)
        setTimeout(() => {
            E(true);
        },7479+900)
    }

    return (
    <>
        { !started ? <div style={{width: '100%', height: '100%', left: '0', top: '0', position: 'absolute', zIndex: '25', backgroundColor: "black", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button onClick={() => {vidPlayer.current.play(); setStarted(true); AudioBeats();}} style={{width: '15vw', height: '4vw'}}>
            PRESS START
            </button>
        </div> : "" }
        <video ref={vidPlayer} src={IntroVideo} onEnded={() => {End(true)}}/>
    </>
    )
}

export default IntroSequence