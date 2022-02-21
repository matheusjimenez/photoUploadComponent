import React from "react";
import { AvatarPhoto } from '../AvatarPhoto';
import { X } from 'react-feather';

import "./style.css";

export function UploadFail({childToParent} : any){
    function handleCloseBtn (){
        childToParent(1);
    }
    return (
        <div className="boxBodyContainer">
            <div className="photoContainer alignContainer">
                <AvatarPhoto />
            </div>
            <div className="cropTextContainer alignContainer">
                <p>Sorry, the upload failed.</p>
                <p onClick={handleCloseBtn}>Try again</p>
            </div>
            <X onClick={handleCloseBtn} className="closeBtn"/>
        </div>
    )
}