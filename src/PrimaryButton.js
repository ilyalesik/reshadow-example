import React from "react";
import styled, {css} from "reshadow";

const radius = "2px";
const green = "#4ba82e";

export const PrimaryButton = ({ children, styles, ...props }) => {
    return styled(styles)`
      button {
        display: flex;
        align-items: center;
        justify-content: center;
    
        width: 225px;
        height: 58px;
        border: none;
    
        border-radius: ${radius};
        background-color: ${green};
      }
      span {
        font-family: Helvetica, sans-serif;
        font-size: 20px;
        line-height: 1.4;
        color: #ffffff;
        text-transform: capitalize;
      }
    `(
        <button {...props}>
            <span>{children}</span>
        </button>
    )
};
