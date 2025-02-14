// ImageContext.js
import React, { createContext, useState } from "react";

export const ImageContext = createContext();

export const ImageProvider = ({ children }) => {
  const [imageUrl, setImageUrl] = useState(() => {
    try {
      const saved = localStorage.getItem('attendeesData');
      if (saved) {
        const parsed = JSON.parse(saved);
        return parsed.profilePhoto || '';
      }
    } catch (e) {
      console.error("Error reading image from local storage:", e);
    }
    return '';
  });

  return (
    <ImageContext.Provider value={{ imageUrl, setImageUrl }}>
      {children}
    </ImageContext.Provider>
  );
};
