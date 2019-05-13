import React from "react";
import styled, {css} from "reshadow";

const styles = css`
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 225px;
    height: 58px;
    border: none;

    border-radius: 2px;
    background-color: #4ba82e;
  }
  span {
    font-family: Helvetica, sans-serif;
    font-size: 20px;
    line-height: 1.4;
    color: #ffffff;
    text-transform: capitalize;
  }
`;

export const PrimaryButton = ({ children, ...props }) => {
    return styled(styles, props.styles)(
        <button {...props}>
            <span>{children}</span>
        </button>
    )
};
