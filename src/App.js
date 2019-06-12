import React from "react";
import AdaptiveListContainer from "./adaptive-list/AdaptiveListContainer";
//import DemoSiteLayoutContainer from "fsjsd-demosite";
import DemoSiteLayoutContainer from "./demosite/DemoSiteLayoutContainer";

/*
import { lgrBrowser, registerWriterMiddleware } from "./lgr/lgr";
import htmlDomWriter from "./lgr/htmlDomWriter";

let demoObj = {
  a: "objects",
  b: "work",
  c: "too",
  success: true,
  someNumber: 123
};

let lgr = lgrBrowser();

registerWriterMiddleware(htmlDomWriter);

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
  meta: ["colors!", "red ..."],
  backgroundColor: "#FF0000"
});
colorLogger.debug("color");
colorLogger.debug("me");
colorLogger.debug("happy");
colorLogger.debug(demoObj);

lgr({ meta: ["features"], timestamp: true }).debug("timestamp");
*/

let colorMap = {};

const getColor = str => {
  const keys = Object.keys(colorMap);

  const shift = keys.length === 0 ? 0 : Math.ceil(255 / keys.length);

  if (!colorMap[str]) {
    colorMap[str] = shift;
  }

  console.log(colorMap[str]);

  return `hsl(${colorMap[str]}, 200, 200)`;
};

/*
128 = 255/2
255 = 255/2 + 255/2
62.75 = 255/4
191 = 255/4 + 255/2
? = 255/6
? = 255/6 + 255/2

*/

const colFn = pos => {
  const odd = pos % 2 ? 0 : 1;
  const buffer = 256 / 2;
  let oddShift = 0;

  const colStep = pos + odd + 1;

  if (!odd) {
    oddShift = buffer;
  }

  const colHue = Math.floor(255 / colStep) + Math.floor(255 / colStep);

  const css = `color:hsl(${colHue}, 70%, 40%)`;

  console.log(`%c${colHue}`, css, odd, css);
};

function App() {
  const testRange = new Array(20).fill(0);
  testRange.map((val, i) => colFn(i));

  getColor("a");
  getColor("b");
  getColor("c");
  getColor("d");
  getColor("e");
  //getColor("a");
  //getColor("a");

  return (
    <DemoSiteLayoutContainer
      renderHeader={() => <>Adaptive List Demonstration</>}
      renderNavigation={() => <>x</>}
      renderContents={() => <AdaptiveListContainer />}
    />
  );
}

export default App;
