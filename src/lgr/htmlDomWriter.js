let writerOutputEl = null;

const makeStyle = (
  { backgroundColor = "black", color = "white" } = {},
  i = 0
) => {
  return `display:inline-block;background-color:${backgroundColor};color:${color};border-radius:3px;padding:2px 4px;margin-left:2px;`;
};
const transformConsoleArgs = config => (...args) => {
  if (config === undefined) return args;

  if (config.meta) {
    const metaArgs =
      typeof config.meta === "string"
        ? `<div style="${makeStyle()}">${config.meta}</div>`
        : config.meta
            .map(meta => `<div style="${makeStyle(config)}">${meta}</div>`)
            .join("");

    //console.log("ARGDEBUG", [...metaArgs, ...args]);

    return [metaArgs, ...args].join(" ");
  }

  return args;
};

const lineStyles = {
  log: "",
  debug: "color:blue",
  error: "color:red",
  warn: "color:orange"
};

const isAvailableInEnvironment = () => {
  return window !== undefined && window.document !== undefined;
};

const initialise = () => {
  writerOutputEl = document.createElement("DIV");
  writerOutputEl.setAttribute(
    "style",
    "position:fixed;width:400px;top:400px;background-color:white;padding:10px;bottom:0px;right:0px;overflow:scroll;border:solid 1px #999;font-size:12px;"
  );
  document.body.appendChild(writerOutputEl);
};

const dispatch = (level, config) => (...args) => {
  let line = document.createElement("DIV");
  line.setAttribute("style", `margin-bottom:2px;${lineStyles[level]}`);
  line.innerHTML = transformConsoleArgs(config)(...args);
  writerOutputEl.append(line);
};

export default { isAvailableInEnvironment, dispatch, initialise };
