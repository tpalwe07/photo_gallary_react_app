import { useParams } from "react-router";
import PhotosContainer from "./PhotosContainer";

const Search = () => {
  const { searchInput } = useParams();
  return (
    <div className="photos-container">
      <h1> {searchInput} Images </h1>
      <PhotosContainer searchTerm={searchInput} />
    </div>
  );
};

export default Search;
