import React from "react";
import { Link } from "react-router-dom";
import { DemoSiteContent } from "../../components/DemoSiteContent";
import { Banner } from "../../components/Banner";

export const Index = () => {
  return (
    <>
      <Banner color={"red"}>
        <b>Experimental</b> - Not intended for use
      </Banner>
      <DemoSiteContent>
        <h1>React Symphony</h1>
      </DemoSiteContent>
    </>
  );
};
