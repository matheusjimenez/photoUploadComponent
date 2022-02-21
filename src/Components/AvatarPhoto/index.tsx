import React, { useEffect, useState } from "react";
import { AlertCircle } from 'react-feather';

import "./style.css";

export function AvatarPhoto({diplayImage, zoomValue = 1} : any){
    const [image, setImage] = useState("");
    
    useEffect(()=>{
        // alert("useffect"+diplayImage);
        handleImageDisplay(diplayImage);
    }, [diplayImage])

    function handleImageDisplay(newImage : string){
        setImage(newImage)
    }

    return(
        <div className="bodyContainer">
            {image? <img style={{transform : `scale(${zoomValue})`}} src={image}></img> : <AlertCircle color="white" size={36}/>}
        </div>
    )
}