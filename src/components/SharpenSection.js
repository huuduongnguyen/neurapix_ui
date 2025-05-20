import React, { useState } from 'react';
import '../styles/SharpenSection.css';

function SharpenSection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      handleImageUpload(file);
    }
  };

  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setSelectedImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  return (
    <section className="sharpen-section">
      <h1>Sharpen Your Images</h1>
      <p className="description">
        Upload your image and let our AI enhance its quality with advanced sharpening technology.
      </p>
      
      <div 
        className={`image-upload-box ${isDragging ? 'dragging' : ''}`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        {selectedImage ? (
          <img src={selectedImage} alt="Selected" className="preview-image" />
        ) : (
          <>
            <div className="upload-icon">+</div>
            <p>Drag and drop your image here or click to browse</p>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              style={{ display: 'none' }}
              id="file-input"
            />
            <label htmlFor="file-input" className="btn btn-outline">
              Choose File
            </label>
          </>
        )}
      </div>

      <div className="main-actions">
        <button className="btn btn-primary">Sharpen Image</button>
        <button className="btn btn-outline">Reset</button>
      </div>
    </section>
  );
}

export default SharpenSection; 