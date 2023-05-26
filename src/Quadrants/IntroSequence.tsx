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
        AudioBeats();
    }, [])

    function AudioBeats(){
        setTimeout(() => {
            A(true);
        },7027+600)
        setTimeout(() => {
            B(true);
        },7464+600)
        setTimeout(() => {
            C(true);
        },7785+600)
        setTimeout(() => {
            D(true);
        },8132+600)
        setTimeout(() => {
            E(true);
        },8479+600)
    }

    return (
    <>
        { !started ? <div style={{width: '100%', height: '100%', left: '0', top: '0', position: 'absolute', zIndex: '25', backgroundColor: "black", display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button onClick={() => {vidPlayer.current.play(); setStarted(true)}} style={{width: '15vw', height: '4vw'}}>
                START
            </button>
        </div> : "" }
        <video ref={vidPlayer} src={IntroVideo} onEnded={() => {End(true)}}/>
    </>
    )
}

export default IntroSequence