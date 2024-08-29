import React, { useContext } from "react";
import "./style.css";
import { Context } from "../../Context/Context";
import { Messages } from "../enums";

export const MessageField = () => {
  const { message } = useContext(Context);

  return (
    <div
      className="error-field"
      style={{
        backgroundColor:
          message === Messages.Success
            ? "lightseagreen"
            : "rgba(255, 0, 0, 0.575)",
      }}
    >
      {message}
    </div>
  );
};
