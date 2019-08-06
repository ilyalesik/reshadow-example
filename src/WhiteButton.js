import React from "react";
import styled, {css} from "reshadow";
import {PrimaryButton} from "./PrimaryButton";

const black = "#000000";
const white = "#ffffff";

export const WhiteButton = ({ ...props }) =>
    styled`
  button {
    border: solid 1px ${black};
    background-color: ${white};
  }
  span {
    color: ${black};
  }
`(<PrimaryButton {...props} {...styled} />)
