import { ReactNode, useEffect, useState } from "react";
import "./Input.styled.css";
import { InputType } from "../utils/types.utils";
import { formatCurrency } from "../utils/currencies.utils";

export const Input = ({
  icon,
  placeholder,
  errorMsg,
  validationRegEx,
  isActiveValidation,
  type,
  required,
  inputValue,
  inputIsInvalid,
}: {
  icon?: ReactNode;
  placeholder?: string;
  errorMsg?: string;
  validationRegEx?: RegExp;
  isActiveValidation?: boolean;
  type: InputType;
  required?: boolean;
  inputValue?: (value: string) => void;
  inputIsInvalid?: (value: boolean) => void;
}) => {
  const [value, setValue] = useState<string>("");
  const [isInvalid, setIsInvalid] = useState<boolean>(false);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(
      type === InputType.Currency
        ? formatCurrency(event.target.value)
        : event.target.value
    );
    inputValue &&
      inputValue(
        type === InputType.Currency
          ? formatCurrency(event.target.value)
          : event.target.value
      );
    if (validationRegEx) {
      if (!validationRegEx?.test(value)) {
        console.log("true");
      } else {
        console.log("false");
      }
    }
  };
  useEffect(() => {
    if (validationRegEx) {
      if (!validationRegEx?.test(value)) {
        setIsInvalid(true);
        inputIsInvalid && inputIsInvalid(true);
      } else {
        setIsInvalid(false);
        inputIsInvalid && inputIsInvalid(false);

        required && !value ? setIsInvalid(true) : setIsInvalid(false);
        required && !value
          ? inputIsInvalid && inputIsInvalid(true)
          : inputIsInvalid && inputIsInvalid(false);
      }
    }
    return () => {};
  }, [value, isActiveValidation]);

  return (
    <div>
      <div className="input-wrapper">
        {icon && icon}
        <input
          placeholder={`${required && "*"} ${placeholder}`}
          type="text"
          className={`input ${isInvalid && isActiveValidation ? "error" : ""}`}
          style={icon ? { paddingLeft: "35px" } : {}}
          value={value}
          onChange={handleChange}
        />
      </div>
      {isInvalid && isActiveValidation && (
        <div className="errorMsg">{errorMsg}</div>
      )}
    </div>
  );
};
