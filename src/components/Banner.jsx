import React from "react";
import styled from "styled-components";

const StyledBanner = styled.div`
  background-color: ${props => props.color};
  color: White;
  font-size: 18px;
  padding: 1rem;
`;

export const Banner = ({ children, ...props }) => {
  return <StyledBanner {...props}>{children}</StyledBanner>;
};
