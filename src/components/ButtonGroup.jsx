import React from "react";
import styled from "styled-components";

const StyledButtonGroup = styled.div`
  button + button {
    margin-left: 10px;
  }
`;

export const ButtonGroup = ({ children, ...props }) => {
  return <StyledButtonGroup {...props}>{children}</StyledButtonGroup>;
};
