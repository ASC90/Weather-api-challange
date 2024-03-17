import { ReactNode } from "react";
import "./Button.styled.css";
export const Button = ({
  name,
  isSuccess,
  icon,
  onClick,
}: {
  name: string;
  isSuccess?: boolean;
  icon?: ReactNode;
  onClick?: React.MouseEventHandler;
}) => {
  return (
    <button
      className={`button center-flexbox ${isSuccess && "button__success"}`}
      type="button"
      onClick={onClick}
    >
      {isSuccess && (
        <span
          className={`button--icon ${
            isSuccess && "button--icon__success"
          } center-flexbox`}
        >
          {icon && icon}
        </span>
      )}
      <h4>{name}</h4>
    </button>
  );
};
