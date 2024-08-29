import React, { useContext, useEffect, useRef, useState } from "react";
import "./style.css";
import { Context } from "../../Context/Context";
import { Messages } from "../enums";

export const Input = () => {
  const { checkNumber, message, setMessage, updateNumber } =
    useContext(Context);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }
  };

  const handleButtonClick = () => {
    if (message === Messages.Success) {
      updateNumber();
      setMessage("");
    } else {
      const inputNumber = Number(inputValue);
      if (!isNaN(inputNumber) && Number.isInteger(inputNumber)) {
        checkNumber(inputNumber);
      } else {
        setMessage(Messages.NonValid);
      }
      setInputValue("");
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <div className="input-container">
      <input
        type="text"
        className="textfield"
        value={inputValue}
        ref={inputRef}
        disabled={message === Messages.Success}
        onKeyDown={handleKeyDown}
        onChange={(event) => setInputValue(event.target.value)}
      />

      <button
        type="button"
        className="send-button"
        style={
          message === Messages.Success
            ? { backgroundColor: "lightseagreen", color: "cornsilk" }
            : {}
        }
        onClick={handleButtonClick}
        ref={buttonRef}
      >
        {message === Messages.Success ? "Again" : "Try"}
      </button>
    </div>
  );
};
