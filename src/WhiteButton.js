import React from "react";
import styled, {css} from "reshadow";
import {PrimaryButton} from "./PrimaryButton";

const styles = css`
  button {
    border: solid 1px #000000;
    background-color: #ffffff;
  }
  span {
    color: #000000;
  }
`;

export const WhiteButton = (props) => {
    return <PrimaryButton {...props} styles={styles} />
};
