import { NavLink } from "react-router-dom";
import { AddIcon } from "../Icons/AddIcon.tsx";
import "./Menu.styled.css";
import { StarIcon } from "../Icons/StarIcon.tsx";

export const Menu = () => {
  return (
    <nav>
      <div>
        <h1 style={{ textAlign: "center", color: "#5cc542" }}>TechnicalTest</h1>
        <br />
        <h3>Sections</h3>
        <ul>
          <li>
            <NavLink to="/">
              <StarIcon /> Weather
            </NavLink>
          </li>
          <li>
            <NavLink to="/form">
              <AddIcon /> Form Validation
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="logo">
        <img src="" alt="Logo" />
      </div>
    </nav>
  );
};
