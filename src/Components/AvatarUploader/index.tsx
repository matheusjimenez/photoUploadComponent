import React, { useState } from 'react';
import { Image } from 'react-feather';
import { AvatarPhoto } from '../AvatarPhoto';

import "./style.css";

export function AvatarUpload ({childToParent, uploadDataModel} : any) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const reader = new FileReader();

  function handleImageUploaded(data : any) {
    uploadDataModel(data)
  }

  function checkFileType(fileType : string){
    const alowdedFileType = "image/png, image/gif, image/jpeg, image/svg+xml, image/svg";

    const isFileTypeAlowded = alowdedFileType.includes(fileType);
    
    return isFileTypeAlowded;
  }

  function handleUploadDialogBox (imageEvent: any) {
    reader.onload = () =>{
      if(reader.readyState === 2 && (checkFileType(imageEvent.target.files[0].type))){
        setSelectedImage(reader.result as string);
        handleImageUploaded(reader.result);
        childToParent(2);
      }else{
        setSelectedImage(null);
        childToParent(1)
      }
    }

    reader.readAsDataURL(imageEvent.target.files[0]);
  }

    return (
      <div className="DropBoxBody">
        {selectedImage? <AvatarPhoto /> : <></>}
        <div className="textContainer">
          <label htmlFor="file-upload">
            <p><Image />Organization Logo</p>
            <p>Drop the image here or click to browse.</p>
          </label>
          <form>
            <input 
              id="file-upload" 
              type="file" 
              accept="image/png, image/gif, image/jpeg, image/svg+xml, image/svg"
              onChange={(event)=>{handleUploadDialogBox(event)}}
            />
          </form>
        </div>
      </div>
    );
  }
  