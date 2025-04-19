import { useState } from "react";
import { useNavigate } from "react-router";

const Form = () => {
  const [searchText, setSearchText] = useState("");

  const navigate = useNavigate();

  const handleFormSubmit = () => {
    if (searchText.trim() === "") {
      alert("Please enter something");
      setSearchText("");
      return;
    }
    let url = `/search/${searchText}`;
    navigate(url);
    setSearchText("");
  };
  const handleOnChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit} className="search-form">
      <input
        value={searchText}
        onChange={handleOnChange}
        className="form-Input"
        type="text"
        placeholder="Search..."
      />
      <button className="btnSearch">Search</button>
    </form>
  );
};

export default Form;
