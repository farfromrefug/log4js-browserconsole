
var theConsole = {
  log:console.log,
  info:console.info,
  error:console.error,
  debug:console.debug,
  warn:console.warn,
  trace:console.trace
};
function consoleAppender(layout, timezoneOffset) {
  return function (loggingEvent) {
    var level = loggingEvent.level.levelStr.toLowerCase();
    (theConsole[level] || theConsole.log).apply(theConsole, layout(loggingEvent, timezoneOffset));
  };
}

function configure(config, layouts) {
  var layout = layouts.colouredLayout;
  if (config.layout) {
    layout = layouts.layout(config.layout.type, config.layout);
  }
  return consoleAppender(layout, config.timezoneOffset);
}

exports.configure = configure;
