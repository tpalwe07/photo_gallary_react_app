import PhotosContainer from "./PhotosContainer";

const Item = ({ searchTerm }) => {
  return (
    <div className="photos-container">
      <h1>{searchTerm} Pictures</h1>
      <PhotosContainer searchTerm={searchTerm} />
    </div>
  );
};

export default Item;
