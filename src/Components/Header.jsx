import { NavLink } from "react-router";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="headerContainer">
      <h1>
        <NavLink to={"/"}>Photos Gallary </NavLink>
      </h1>
      <Form />
      <Navigation />
    </div>
  );
};

export default Header;
