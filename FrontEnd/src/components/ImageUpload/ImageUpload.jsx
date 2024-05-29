import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './ImageUpload.css'; // Add this line to include the CSS

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null); // State for the image preview URL
  const navigate = useNavigate();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedFile) {
      try {
        const formData = new FormData();
        formData.append('file', selectedFile);

        const response = await axios.post('http://localhost:5000/api/upload_predict', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        const imageUrl = URL.createObjectURL(selectedFile);
        navigate('/prediction-result', { state: { prediction: response.data.result, imageUrl } });
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  };

  const handleUploadClick = () => {
    document.getElementById('fileToUpload').click();
  };

  return (
    <div className="upload text-center">
      <div className="preview-container" onClick={handleUploadClick}>
        {previewUrl ? (
          <img src={previewUrl} alt="Preview" className="preview-image" />
        ) : (
          <div className="logo" id="logo">
            <svg xmlns="http://www.w3.org/2000/svg" width="140" height="140" fill="#ebebeb" className="bi bi-image d-block mx-auto" viewBox="0 0 16 16">
              <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
              <path d="M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"></path>
            </svg>
          </div>
        )}
      </div>

      <div className="button">
        {!selectedFile ? (
          <button type="button" className="btn btn-lg btn-primary" onClick={handleUploadClick}>
            Upload Image
          </button>
        ) : (
          <button type="submit" className="btn btn-lg btn-success" onClick={handleSubmit}>
            Scan Now
          </button>
        )}
      </div>

      <form onSubmit={handleSubmit} style={{ display: 'none' }}>
        <input type="file" name="fileToUpload" id="fileToUpload" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default ImageUpload;
