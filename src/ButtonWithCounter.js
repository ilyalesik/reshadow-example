import React, {useState} from "react";
import styled from "reshadow";

export const ButtonWithCounter = ({ children, ...props }) => {
    const [counter, setCounter] = useState(0);
    return styled`
        button {
          background-color: white;
          color: steelblue;
          border-radius: 20px;
          border: 2px solid;
          font-size: 16px;
          cursor: pointer;
          padding: 8px 16px;
          width: 250px;
        }
    `(<div>
        <button {...props} onClick={() => setCounter(counter + 1)}>{children}</button>
        <p>counter: {counter}</p>
    </div>);
};
