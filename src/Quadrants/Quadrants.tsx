type Quadrants = {
    leftPos:number|string,
    topPos:number|string,
    namedID:string,
    link:string,
    image:any,
}

const Quadrants = ({leftPos,topPos,namedID,link,image}:Quadrants) => {

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
            display: 'flex',
            justifyContent: "center",
            alignItems: "center",
        }} onClick={openLink}>
            <img
            className="QuadImage"
            src={image} alt="ImageName"
            height="500vw"
            width="500vw"
            style={{
                userSelect: 'none',
                pointerEvents: 'none',
                zIndex: "5"
            }}
            />
        </div>
    )
}

export default Quadrants