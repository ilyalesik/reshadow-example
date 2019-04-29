import React from "react";
import styled from "reshadow";

export const CommonButton = ({ children, ...props }) =>
  styled`
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
`(<button {...props}>{children}</button>);
