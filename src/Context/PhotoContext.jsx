import { createContext, useEffect, useState } from "react";
import axios from "axios";
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
export const PhotoContext = createContext();

const PhotoContextProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const runSearch = (query) => {
    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setImages(response.data.photos.photo);
        // console.log(images);
        setLoading(false);
      })
      .catch((error) => {
        console.log(
          "Encountered an error with fetching and parsing data",
          error
        );
      });
  };

  return (
    <PhotoContext.Provider value={{ images, loading, runSearch }}>
      {children}
    </PhotoContext.Provider>
  );
};

export default PhotoContextProvider;
