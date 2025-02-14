import React, { useState, useCallback, useContext } from "react";
import { useDropzone } from "react-dropzone";
import { BiCloudDownload } from "react-icons/bi";
import { ImageContext } from "./ImageContext";


export default function AvatarUpload() {
  const { imageUrl, setImageUrl } = useContext(ImageContext); // Store uploaded/pasted image URL
  const [loading, setLoading] = useState(false);

  // Function to upload image to Cloudinary
  const uploadToCloudinary = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "Ticket_Booking_Avatar"); // Replace with your preset

    setLoading(true);
    try {
      const response = await fetch("https://api.cloudinary.com/v1_1/drbwr5an2/image/upload", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setImageUrl(data.secure_url);
    } catch (error) {
      console.error("Upload failed:", error);
    }
    setLoading(false);
  };

  // React Dropzone for Drag & Drop functionality
  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      uploadToCloudinary(acceptedFiles[0]);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
        'image/jpeg': [],
        'image/png': [],
        'image/jpg': [],
    },
    multiple: false,
  });

  // Handle manual image URL input
  const handleUrlInput = (event) => {
    const url = event.target.value;
    if (url.match(/\.(jpeg|jpg|png|gif)$/) || url.includes("cloudinary.com")) {
      setImageUrl(url);
    } else {
      alert("Please enter a valid image URL");
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4  cursor-pointer">
      {/* Drag & Drop Area */}
      <div {...getRootProps()} className="w-full sm:w-52 h-52 sm:h-56 bg-mint-600 border-4 border-solid border-mint-100 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-2xl sm:rounded-4xl flex justify-center items-center">
        <div className="w-full flex flex-col items-center text-center">
          <input {...getInputProps()} />
          <BiCloudDownload />
          <p>Drag & Drop an image here, or click to select</p>
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Avatar"
              className="w-32 h-32 object-cover rounded-full border"
            />
          )}
        </div>
      </div>

      {/* Manual URL Input */}
      {/* <input
        type="text"
        placeholder="Paste Image URL (Cloudinary or any link)"
        onChange={handleUrlInput}
        className="border p-2 w-64"
      /> */}

      {/* Show Loading Indicator */}
      {/* {loading && <p>Uploading...</p>} */}

      {/* Show Uploaded Image */}
      {/* {imageUrl && <img src={imageUrl} alt="Avatar" className="w-24 h-24 rounded-full border z-50" />} */}

      {/* Display Image URL */}
      {/* {imageUrl && <p className="text-sm text-gray-500 break-all">{imageUrl}</p>} */}





      {/* {loading && <p>Uploading...</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Avatar"
          className="w-24 h-24 rounded-full border z-50"
        />
      )} */}
    </div>
  );
}
