import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EnvelopeIcon } from "../Icons/EnvelopeIcon";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import "./FormValidation.styled.css";
import { Validations } from "../utils/validations.utils";
import { InternetIcon } from "../Icons/InternetIcon";
import { InputType } from "../utils/types.utils";
import { ArrowBackIcon } from "../Icons/ArrowBackIcon";
import { CheckIcon } from "../Icons/CheckIcon";
export const FormValidation = () => {
  const [isActiveValidation, setIsActiveValidation] = useState(false);
  const [email, setEmail] = useState({ value: "", invalid: false });
  const [ammount, setAmmount] = useState({ value: "", invalid: false });
  const [url, setUrl] = useState({ value: "", invalid: false });
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="form__green center-flexbox">
      {isSuccess ? (
        <div className="center-flexbox">
          <p>
            <h1>Your information has been successfully sent.</h1>
          </p>
          <p>
            <h4>We will get back to you shortly.</h4>
          </p>
          <p>
            <Button
              name="Return to Weather"
              isSuccess={true}
              icon={<ArrowBackIcon />}
              onClick={() => {
                navigate("/");
              }}
            />
          </p>
        </div>
      ) : (
        <form action="" className="center-flexbox">
          <ul>
            <li className="center-flexbox min-content__width">
              <Input
                required={true}
                type={InputType.Text}
                icon={<EnvelopeIcon />}
                placeholder="Insert multiple mails separated by commas"
                errorMsg="Incorrect email/s. Please, try again."
                validationRegEx={Validations.emailList}
                isActiveValidation={isActiveValidation}
                inputValue={(value: string) => setEmail({ ...email, value })}
                inputIsInvalid={(invalid) => setEmail({ ...email, invalid })}
              />
            </li>
            <li className="center-flexbox min-content__width">
              <Input
                required={true}
                type={InputType.Currency}
                placeholder="Insert an amount whith € symbol and decimals"
                errorMsg="This field only accept numbers with decimals and € symbol."
                validationRegEx={Validations.number}
                isActiveValidation={isActiveValidation}
                inputValue={(value: string) =>
                  setAmmount({ ...ammount, value })
                }
                inputIsInvalid={(invalid) =>
                  setAmmount({ ...ammount, invalid })
                }
              />
            </li>
            <li className="center-flexbox min-content__width">
              <Input
                required={true}
                type={InputType.Text}
                icon={<InternetIcon />}
                placeholder="Insert a URL"
                errorMsg="Incorrect URL. Please try again."
                validationRegEx={Validations.url}
                isActiveValidation={isActiveValidation}
                inputValue={(value: string) => setUrl({ ...url, value })}
                inputIsInvalid={(invalid) => setUrl({ ...url, invalid })}
              />
            </li>
            <li className="center-flexbox">
              <Button
                name="Validate"
                isSuccess={true}
                icon={<CheckIcon />}
                onClick={() => {
                  setIsActiveValidation(true);
                  if (!url.invalid && !ammount.invalid && !email.invalid) {
                    setIsSuccess(true);
                  }
                }}
              />
            </li>
          </ul>
        </form>
      )}
    </div>
  );
};
