import React from "react";
import { CommonButton } from "./CommonButton";
import "./app.css";
import {ButtonWithCounter} from "./ButtonWithCounter";

const App = () => {
  return (
    <div className="app">
      <ButtonWithCounter>common button</ButtonWithCounter>
    </div>
  );
};
export default App;
