import { NavLink } from "react-router-dom";
import { AddIcon } from "../Icons/AddIcon.tsx";
import "./Menu.styled.css";
import { StarIcon } from "../Icons/StarIcon.tsx";

export const Menu = () => {
  return (
    <nav>
      <div>
        <h1 className="title">TechnicalTest</h1>
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
      <div className="logo center-flexbox">
        <img src="" alt="Logo" />
      </div>
    </nav>
  );
};
