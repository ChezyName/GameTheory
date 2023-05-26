import React from 'react'

type Quadrants = {
    leftPos:number|string,
    topPos:number|string,
    namedID:string,
    link:string,
}

const Quadrants = ({leftPos,topPos,namedID,link}:Quadrants) => {

    function openLink(){
        if(link != "" && link != null && link != undefined){
            //replace '' with _blank for new tab opening
            window.open(link, '');
        }
    }

    return (
        <div id={namedID} style={{
            width: "50vw",
            height: "50vh",
            position: "absolute",
            zIndex: '0',
            left: leftPos,
            top: topPos,
            userSelect: 'none',
        }} onClick={openLink}></div>
    )
}

export default Quadrants