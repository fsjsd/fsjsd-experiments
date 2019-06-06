import React from "react";
import AdaptiveListContainer from "./adaptive-list/AdaptiveListContainer";
import { lgrBrowser } from "./lgr/lgr";

const style = {
  width: "100%",
  height: "100%"
};

let demoObj = {
  a: "objects",
  b: "work",
  c: "too",
  succes: true,
  someNumber: 123
};

let lgr = lgrBrowser();

lgr.log("hello");
lgr.debug("world");
lgr.error("uh oh");
lgr.log(demoObj);
lgr({ smile: true }).debug("pass log config!");

let myLogger = lgr({ meta: "somelogger" });
myLogger.debug("magic");
myLogger.debug("log");
myLogger.debug("formatting!");
myLogger.debug(demoObj);

let colorLogger = lgr({
  meta: ["somelogger", "info"],
  backgroundColor: "#FF0000"
});
colorLogger.debug("color");
colorLogger.debug("me");
colorLogger.debug("happy");
colorLogger.debug(demoObj);

function App() {
  return (
    <div style={style}>
      <AdaptiveListContainer />
    </div>
  );
}

export default App;
