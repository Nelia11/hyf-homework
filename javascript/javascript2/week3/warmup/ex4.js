const earthLogger = () => console.log("Earth");
const saturnLogger = () => console.log("Saturn");
const planetLogFunction = (callbackFn) => callbackFn();

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);