import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
import './PredictionResult.css';

function PredictionResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const { prediction, imageUrl } = location.state || {};

  if (!prediction || !imageUrl) {
    return <div>No prediction available.</div>;
  }

  const handleUploadNewImage = () => {
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <div className="container text-center">
        <h2>Prediction Result</h2>
        <div className="image-container">
          <img src={imageUrl} alt="Uploaded" className="uploaded-image" />
        </div>
        <p className="result-text">{prediction}</p>
        <button className="btn btn-primary" onClick={handleUploadNewImage}>Upload New Image</button>
      </div>
    </>
  );
}

export default PredictionResult;
