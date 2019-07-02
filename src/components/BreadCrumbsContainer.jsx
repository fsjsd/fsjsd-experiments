import React from "react";
import { BreadCrumbs } from "react-router-utilitybelt";
import styled from "styled-components";

const BreadCrumbsStyled = styled.div`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  font-weight: 500;
  padding: 18px;
  background-color: white;
  padding-bottom: 12px;
  border-bottom: solid 1px rgb(218, 231, 241);
  letter-spacing: -0.5pt;
  a {
    text-decoration: none;
    color: rgb(44, 148, 226);
  }
`;

const Separator = styled.span`
  display: inline-block;
  margin-left: 5px;
  margin-right: 5px;
  color: rgb(180, 214, 239);
`;

const CurrentCrumb = styled.span`
  font-weight: bold;
`;

// BreadCrumbsContainer used to apply UI specifics to the underlying
// logic of the BreadCrumbsComponent

const BreadCrumbsContainer = () => (
  <BreadCrumbs
    renderWrapper={renderChildren => (
      <BreadCrumbsStyled>{renderChildren()}</BreadCrumbsStyled>
    )}
    renderSeparator={() => <Separator>&nbsp;/&nbsp;</Separator>}
    renderCurrentRouteCrumb={title => <CurrentCrumb>{title}</CurrentCrumb>}
  />
);

export default BreadCrumbsContainer;
