import { useContext, useEffect } from "react";
import { PhotoContext } from "../Context/PhotoContext";
import Gallary from "./Gallary";

const PhotosContainer = ({ searchTerm }) => {
  const { images, loading, runSearch } = useContext(PhotoContext);
  useEffect(() => {
    runSearch(searchTerm);
  }, [searchTerm]);

  return <>{loading ? <h1>Loading...</h1> : <Gallary data={images} />}</>;
};

export default PhotosContainer;
