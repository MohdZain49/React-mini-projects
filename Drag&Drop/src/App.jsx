import React, { useState } from 'react'
import './App.css'
import { IoCloudUploadOutline } from "react-icons/io5";
import { RiDeleteBin4Line } from "react-icons/ri";

function App() {
  const [selectedImage, setSelectedImage] = useState(null)

  const handleImageOnChange = (event) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      setSelectedImage(selectedFile)
    }
  }

  const handleRemoveImage = () => {
    setSelectedImage(null)
  }

  const handleOnDrop = (event) => {
    console.log(event);
    event.preventDefault(); // Prevent default behavior
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) {
      setSelectedImage(droppedFile);
    }
  }

  const handleOnDragOver = (event) => {
    event.preventDefault();
  }

  return (
    <div className='container'>
      <p>Drag and Drop</p>
      <div onDrop={handleOnDrop}
        onDragOver={handleOnDragOver}>
        <div style={{ display: "none" }}>
          <input type="file" id='imageFile' onChange={handleImageOnChange} />
        </div>
        {
          !selectedImage ? (
            <label htmlFor="imageFile" className='label'>
              <IoCloudUploadOutline style={{ fontSize: "50px" }} />
              Drag and Drop and click to upload image</label>
          ) : (
            <div className='imageContainer'>
              <RiDeleteBin4Line onClick={handleRemoveImage} />
              <img src={URL.createObjectURL(selectedImage)} alt="selected-image" />
            </div>
          )
        }
      </div>
    </div >
  )
}

export default App