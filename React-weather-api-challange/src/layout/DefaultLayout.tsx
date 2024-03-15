import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import "./DefaultLayout.styled.css";
import { Menu } from "../components/Menu";
import { HouseIcon } from "../Icons/HouseIcon";
import { ChevronIcon } from "../Icons/ChevronIcon";

export const DefaultLayout = ({ children }: { children: ReactNode }) => {
  const { pathname } = useLocation();

  return (
    <div className="layout--container">
      <Menu />
      <div className="layout--body">
        <header>
          <HouseIcon /> <ChevronIcon />{" "}
          <h4>{pathname === "/" ? "Weather" : "Form Validation"} </h4>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};
