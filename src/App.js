import React from "react";
import { CommonButton } from "./CommonButton";
import "./app.css";
import {ButtonWithCounter} from "./ButtonWithCounter";
import {PrimaryButton} from "./PrimaryButton";
import {WhiteButton} from "./WhiteButton";

const App = () => {
  return (
    <div className="app">
      <PrimaryButton>primary button</PrimaryButton>
      <WhiteButton>white button</WhiteButton>
    </div>
  );
};
export default App;
