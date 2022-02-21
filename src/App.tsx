import "./global.css";

import { AvatarUpload } from "./Components/AvatarUploader";
import { UploadFail } from "./Components/UploadFail";
import { useState } from "react";
import { CropContainer } from "./Components/CropContainer";

export function App() {
  const [state, setState] = useState<number>(0);
  const [data, setData] = useState(null);

  const childToParent = (childData : any) => {
    setState(childData);
  }

  const uploadDataModel = (childData : any) => {
    setData(childData);
  }

  return (
    <>
      {
        state === 0? 
        <AvatarUpload childToParent={childToParent} uploadDataModel={uploadDataModel} /> 
        :
        state === 1?
        <UploadFail childToParent={childToParent}/>
        :
        <CropContainer rawImage={data} childToParent={childToParent}/>
      }

      
    </>
  );
}
