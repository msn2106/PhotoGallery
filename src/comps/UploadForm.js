import React, {useState} from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = () =>{
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  // const types = ['image/png','image/jpeg','image/jpg'];

  const changeHandler = (e) =>{
    let selectedFile = e.target.files[0];
    console.log(selectedFile);
    if(selectedFile){ //&& types.includes(selectedFile.type)
      setFile(selectedFile);
      setError('');
    }
    else{
      setFile(null);
      setError('Please select a valid image file (png, jpg or jpeg)');
    }

  }

  return(
    <form>
      <label>
        <input type="file" name='image' accept='image/*'  onChange={changeHandler}/> {/**hidden */}
        <span>+</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div className="fileName">{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile}/>}
      </div>
    </form>
  )
}

export default UploadForm;