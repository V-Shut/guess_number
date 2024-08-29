import React, { useEffect, useContext } from "react";
import "./App.css";
import { MessageField } from "./components/MessageField/MessageField";
import { Input } from "./components/Input/Input.tsx";
import { Context } from "./Context/Context";

function App() {
  const { message, setNumber, number } = useContext(Context);

  useEffect(() => {
    fetch("/api")
      .then((response) => response.json())
      .then((response) => setNumber(response.randomNumber));
  }, [setNumber]);

  return (
    <div className="App">
      <Input />
      {message && <MessageField message={message} />}
    </div>
  );
}

export default App;
