import React, { useState } from "react";
import { X } from "react-feather";
import { AvatarPhoto } from "../AvatarPhoto";
import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import './style.css';

export function CropContainer({ rawImage, childToParent } : any){
    const [zoomScale, setZoomScale] = useState(1.0);
    function handleSliderCrop(sliderValue : number){
        setZoomScale(1 + sliderValue/10);
    }

    function handleCloseBtn(){
        childToParent(0)
    }
    return(
        <>
        <div className="boxBodyContainer">
            <div className="photoContainer alignContainer">
                <AvatarPhoto zoomValue={zoomScale} diplayImage={rawImage} />
            </div>
            <div className="cropTextContainer alignContainer">
                <p>Crop</p>
                <Slider onChange={(value) => {handleSliderCrop(value)}} />
                <button>Save</button>
            </div>
            <X onClick={handleCloseBtn} className="closeBtn"/>
        </div>
        </>
    )
}