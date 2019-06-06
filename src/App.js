import React from "react";
import AdaptiveListContainer from "./adaptive-list/AdaptiveListContainer";
import { lgrBrowser } from "./lgr/lgr";

const style = {
  width: "100%",
  height: "100%"
};

let lgr = lgrBrowser();

lgr.log(process);

lgr.debug("hello");
lgr({ smile: true }).debug("hello");
lgr({ meta: "somelogger" }).debug("hello");
lgr({ meta: ["somelogger", "info"], backgroundColor: "#FF0000" }).debug(
  "hello"
);

function App() {
  return (
    <div style={style}>
      <AdaptiveListContainer />
    </div>
  );
}

export default App;
